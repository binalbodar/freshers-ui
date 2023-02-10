import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FreshersService } from '../services/freshers.service'

@Component({
  selector: 'app-fresher-api',
  templateUrl: './fresher-api.component.html',
  styleUrls: ['./fresher-api.component.css']
})
export class FresherApiComponent implements OnInit {

  user_id: string;
  pass: string;
  cat: string;
  mail:string;
  checkbox:string;

  constructor(private fresherserve: FreshersService) { }

  userData: any = [];

  ngOnInit() {
    this.fresherserve.getAll().subscribe((data: any) => {
      this.userData = data
    })
  }

  loginForm = new FormGroup({
    user_id: new FormControl('', [Validators.required]),
    pass: new FormControl('', [Validators.required]),
    cat: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required]),
    checkbox: new FormControl('', [Validators.required]),
  })

  onSubmit() {
    // debugger
    let value = this.loginForm.value;
    this.user.push(value);
    console.log(value);
    this.clearForm();
  }

  clearForm() {
    this.loginForm.reset();
  };

  user: any = []
  displayedColumns: string[] = ['user_id', 'pass', 'cat', 'mail', 'checkbox'];
  dataSource = this.user;

}

class userData {
  user_id: string | undefined;
  pass: string | undefined;
  cat: string | undefined;
  mail: string | undefined;
  checkbox: string | undefined;
}
