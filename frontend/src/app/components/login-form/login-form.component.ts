import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { TeacherLogin } from 'src/app/interfaces/Teacher';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  @Output() onSubmit = new EventEmitter<TeacherLogin>();
  @Input() btnText!: string;

  loginForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  get email() {    
    return this.loginForm.get('email')!;
  }

  get password() {    
    return this.loginForm.get('password')!;
  }

  submit() {
    
    this.onSubmit.emit(this.loginForm.value);
  }
}
