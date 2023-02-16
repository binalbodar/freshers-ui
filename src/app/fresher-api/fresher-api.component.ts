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
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(private fresherserve: FreshersService) {
  }
  userData: any = [];
  displayedColumns: string[] = ['user_id', 'pass', 'cat', 'mail', 'checkbox', 'action'];
  dataSource = this.userData;

  res: MatTableDataSource<any>;

  ngOnInit() {
    this.fresherserve.getUser().subscribe(res => {
      this.res = new MatTableDataSource<any>(res)
      if (res.success == 1) {
        this.userData = res.data
      }
    })
  }

  loginForm = new FormGroup({
    user_id: new FormControl('', [Validators.required]),
    pass: new FormControl('', [Validators.required]),
    cat: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    checkbox: new FormControl('', [Validators.required]),
  })

  // edit: any = '';

  onSubmit() {
    let value = this.loginForm.value
    this.userData.push(value);
    this.clearForm();
  }

  clearForm() {
    this.loginForm.reset();
  };
}

class userData {
  USER_ID: string | undefined;
  PASS: string | undefined;
  CAT: string | undefined;
  MAIL: string | undefined;
  CHECKBOX: string | undefined;
}

// onSubmit() {
//   debugger
//   let value = this.loginForm.value
//   if (this.edit !== '') {
//     this.userData[this.edit] = { user_id: value.user_id, pass: value.pass, cat: value.cat, mail: value.mail, checkbox: value.checkbox };
//     this.edit = '';
//     this.clearForm();
//   }
//   else {
//     this.userData.push(value);
//     this.clearForm();
//   }
// }