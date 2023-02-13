import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FreshersService } from '../services/freshers.service'

@Component({
  selector: 'app-fresher-api',
  templateUrl: './fresher-api.component.html',
  styleUrls: ['./fresher-api.component.css']
})
export class FresherApiComponent implements OnInit {

  userData: any = [];

  constructor(private fresherserve: FreshersService) { }

  ngOnInit() {
    this.fresherserve.getUsers().subscribe((userData) => {
      this.userData = userData;
    });
  }

  login = new FormGroup({
    user_id: new FormControl('', [Validators.required]),
    pass: new FormControl('', [Validators.required]),
    cat: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
    checkbox: new FormControl('', [Validators.required]),
  })

  // edit: any = '';

  onSubmit() {
    let value = this.login.value
    this.userData.push(value);
    this.clearForm();
  }

  // onSubmit() {
  //   debugger
  //   let value = this.login.value;
  //   this.user.push(value);
  //   console.log(value);
  //   this.clearForm();
  // }

  clearForm() {
    this.login.reset();
  };

  user: any = []
  displayedColumns: string[] = ['user_id', 'pass', 'cat', 'mail', 'checkbox', 'action'];
  dataSource = this.user;

}

class userData {
  user_id: string;
  pass: string;
  cat: string;
  mail: string;
  checkbox: string;
}
