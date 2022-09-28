import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "@core/services";
import {FormControl, UntypedFormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'vs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  authForm = new UntypedFormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  loading = false;
  hasErrorMessage = false;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  handleLogin(): void {
    this.setErrorMessage(false);
    this.authForm.invalid ? this.authForm.markAllAsTouched() : this.loginWithEmailAndPassword();
  }

  loginWithEmailAndPassword() {
    this.loading = true;
    this.authService.authWithEmailAndPassword(this.authForm.value)
      .then(() => this.router.navigateByUrl('backoffice/orders'))
      .catch(() => this.setErrorMessage(true))
      .finally(() => this.loading = false)
  }

  setErrorMessage(showError: boolean): void {
    this.hasErrorMessage = showError;
  }
}
