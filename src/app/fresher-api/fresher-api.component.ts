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
    this.fresherserve.getUser().subscribe((res: any) => {
      this.userData = new MatTableDataSource(res.data)
      setTimeout(() => {
        this.userData.paginator = this.paginator;
      }, 100);
    })
  }

  loginForm = new FormGroup({
    user_id: new FormControl('', [Validators.required]),
    pass: new FormControl('', [Validators.required]),
    cat: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    checkbox: new FormControl('', [Validators.required]),
  })

  onSubmit() {
    let value = this.loginForm.value
    this.fresherserve.addUser(value).subscribe(()=>{
      console.log(value);
      this.userData.data.push(value.data);
      this.clearForm();
    })
  }

  clearForm() {
    this.loginForm.reset();
  };

  // deleteUser(value: any) {
  //   this.fresherserve.delete(value).subscribe((res: any) => {
  //     this.userData = this.userData.filter((res: any) => res.id !== value);
  //     console.log(res, 'Post Deleted Successfully!');
  //   })
  // }
}
