import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "@core/services";
import firebase from "firebase/compat/app";
import {Router} from "@angular/router";

@Component({
  selector: 'vs-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss']
})
export class BackofficeComponent implements OnInit {
  user!: firebase.User | null;

  constructor(
    private authService: AuthenticationService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.authService.getUserAuth().subscribe((resp) => this.user = resp);
  }

  logout(): void {
    this.authService.logout().then(() => this.router.navigateByUrl('login'));
  }

}
