import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService} from '../../core/services/auth.service';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  faLock = faLock;
  faUser = faUser;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
    ) {
      this.buildForm();
     }

  ngOnInit(): void {
  }

  logIn(event: Event) {
    event.preventDefault();
    if (this.form.valid){
      const value = this.form.value;
      this.authService.logIn(value.email, value.password)
      .then(() => {
        this.router.navigate(['/admin/dashboard']);
      })
      .catch(() => {
        alert('datos incorrectos');
      });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
}
