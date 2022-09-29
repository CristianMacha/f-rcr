import {Component, HostBinding, OnInit} from '@angular/core';
import firebase from "firebase/compat/app";
import {Router} from "@angular/router";
import { MatDrawerMode } from '@angular/material/sidenav';

import {AuthenticationService} from "@core/services";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'vs-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.scss']
})
export class BackofficeComponent implements OnInit {
  user!: firebase.User | null;
  modeSidenav: MatDrawerMode = 'side';
  marginTopSidenav: number = 64;
  padding!: number;
  opened!: boolean;

  darkMode: boolean = false;

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
    ['(orientation: portrait)', 'Portrait'],
    ['(orientation: landscape)', 'Landscape'],
  ]);

  @HostBinding('class') className = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    private overlay: OverlayContainer,
  ) {
    this.breakpoint();
  }

  ngOnInit(): void {
    this.getUser();
    this.activateDarkMode((localStorage.getItem('mode') == 'true'));
  }

  getUser(): void {
    this.authService.getUserAuth().subscribe((resp) => this.user = resp);
  }

  logout(): void {
    this.authService.logout().then(() => this.router.navigateByUrl('login'));
  }

  breakpoint(): void {
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            console.log(query);
            console.log(this.displayNameMap.get(query));
            const screenSize = this.displayNameMap.get(query);
            if (screenSize == 'XSmall') {
              this.modeSidenav = 'over';
              this.marginTopSidenav = 56;
              this.padding = 15;
            }

            if (screenSize == 'Small') {
              this.modeSidenav = 'over';
              this.marginTopSidenav = 64;
              this.padding = 50;
            }

            if (screenSize == 'Medium') {
              this.modeSidenav = 'side';
              this.marginTopSidenav = 64;
              this.padding = 100;
            }

            if (screenSize == 'Large') {
              this.modeSidenav = 'side';
              this.marginTopSidenav = 64;
              this.padding = 180;
              this.opened = true;
            }

            if (screenSize == 'XLarge') {
              this.modeSidenav = 'side';
              this.marginTopSidenav = 64;
              this.padding = 200;
              this.opened = true;
            }

          }
        }
      })
  }

  activateDarkMode(active: boolean) {
    localStorage.setItem('mode', `${active}`);

    this.darkMode = active;
    const darkClassName = 'darkMode';
    this.className = active ? darkClassName : '';
    if(active) {
      this.overlay.getContainerElement().classList.add(darkClassName);
    } else {
      this.overlay.getContainerElement().classList.remove(darkClassName);
    }
  }

}
