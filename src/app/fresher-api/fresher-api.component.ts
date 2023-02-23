import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FreshersService } from '../services/freshers.service'

@Component({
  selector: 'app-fresher-api',
  templateUrl: './fresher-api.component.html',
  styleUrls: ['./fresher-api.component.css']
})
export class FresherApiComponent implements OnInit {

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private fresherserve: FreshersService) {
  }
  displayedCol: string[] = ['USER_ID', 'PASS', 'CAT', 'MAIL', 'CHECKBOX', 'Action'];

  userData: MatTableDataSource<any>;

  ngOnInit() {
    this.getUserMast();
  }

  getUserMast() {
    this.fresherserve.getUser().subscribe((res: any) => {
      this.userData = new MatTableDataSource(res.data)
      setTimeout(() => {
        this.userData.paginator = this.paginator;
      }, 100);
    })
  }

  loginForm = new FormGroup({
    USER_ID: new FormControl('', [Validators.required]),
    PASS: new FormControl('', [Validators.required]),
    CAT: new FormControl('', [Validators.required]),
    MAIL: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    CHECKBOX: new FormControl('', [Validators.required]),
  })

  onSubmit() {
    let value = this.loginForm.value;
    this.fresherserve.addUser(value).subscribe((res: any) => {
      if (res.success = 1) {
        this.getUserMast();
      }
      this.clearForm();
    })
  }

  deleteUser(value: any) {
    let data = {
      USER_ID: value
    }
    this.fresherserve.delete(data).subscribe((res: any) => {
      if (res.success = 1) {
        this.getUserMast();
      }
    })
  }

  editUser(value: any) {
    this.fresherserve.editUser(value).subscribe((res: any) => {
      if (res.success = 1) {
        this.getUserMast();
      }
    })
  }

  clearForm() {
    this.loginForm.reset();
  };
}