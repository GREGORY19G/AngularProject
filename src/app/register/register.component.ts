import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formgroup: FormGroup;
  phone: any ="^((\\+1-?)|0)?[0-9]{10}$"; 
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private router:Router, 
    private fb: FormBuilder, 
    private auth: AngularFireAuth, 
    private db: AngularFireDatabase,
    private snack: MatSnackBar) { }

  ngOnInit() {
    this.formgroup = this.fb.group({
      Name: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      LastName: ["",[Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      Phone: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(this.phone)]],
      Email: ["", [Validators.required, Validators.maxLength(50), Validators.pattern(this.emailPattern)]],
      Password: ["",[Validators.required, Validators.minLength(8), Validators.maxLength(16)]]
    });
  }

  async Regist()
  {
    const Name = this.formgroup.value.Name;
    const LastName = this.formgroup.value.LastName;
    const Phone = this.formgroup.value.Phone;
    const email = this.formgroup.value.Email;
    const pass = this.formgroup.value.Password;

    await this.auth.auth.createUserWithEmailAndPassword(email, pass).then(()=>
    {
      this.auth.auth.onAuthStateChanged((userData)=>{
        userData.updateProfile({
            displayName: Name
        });
      });
    });

    const userID = this.auth.auth.currentUser.uid;
    this.db.database.ref('restaurants/users/'+userID+'/').set({
      Name: Name,
      LastName: LastName,
      Phone: Phone,
      email: email
    });
    this.auth.auth.currentUser.sendEmailVerification();
    this.snack.open('Usted ha sido registrado correctamente', 'Listo',{
      duration: 3000,
    });
    this.router.navigate(['/login']).catch((error)=>{
      const errorCode = error.code;
      switch(errorCode)
      {
        case 'auth/invalid-email':
          this.snack.open('email inválido', 'Listo',{
            duration: 3000,
          });
        break;
        
        case 'auth/email-already-in-use':
          this.snack.open('email en uso', 'Listo',{
            duration: 3000,
          })
        break;

        case 'auth/operation-not-allowed':
          this.snack.open('Operación no permitida', 'Listo',{
            duration: 3000,
          })
        break;

        case 'auth/weak-password':
          this.snack.open('Contraseña débil', 'Listo',{
            duration: 3000,
          })
        break;
      }
    })
  }
  
  Login()
  {
    this.router.navigate(['/login']);
  }

  get Name()
  {
    return this.formgroup.get('Name');
  }

  get LastName()
  {
    return this.formgroup.get('LastName');
  }

  get Phone()
  {
    return this.formgroup.get('Phone');
  }

  get Email()
  {
    return this.formgroup.get('Email');
  }

  get Password()
  {
    return this.formgroup.get('Password');
  }

}