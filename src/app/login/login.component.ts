import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fg: FormGroup;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private router: Router, 
    private fb: FormBuilder,
    private auth: AngularFireAuth,
    private db: AngularFireDatabase,
    private snack: MatSnackBar) { }

  ngOnInit() {
    this.fg = this.fb.group({
      Email: ["",[Validators.required, Validators.maxLength(30), Validators.pattern(this.emailPattern)]],
      Password: ["",[Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
    });
  }

  Register()
  {
    this.router.navigate(['/register']);
  }

  Login()
  {
    this.auth.auth.signInWithEmailAndPassword(this.fg.value.Email, this.fg.value.Password)
    .then((res)=>{
      this.snack.open('Welcom to G-Restaurats', 'OK',{
        duration: 3000,
      })
      this.router.navigate(['/restaurants']);
    }).catch((err)=>{
      this.snack.open('Email or password is incorrect', 'Ok',{
        duration: 3000,
      })
    });
  }
  get Email()
  {
    return this.fg.get('Email');
  }
  
  get Password()
  {
    return this.fg.get('Password');
  }

}