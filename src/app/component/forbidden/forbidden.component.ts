import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-forbidden',
  templateUrl: './forbidden.component.html',
  styleUrls: ['./forbidden.component.less']
})
export class ForbiddenComponent implements OnInit {
  isVisible: boolean = false;

  constructor(
    private location: Location,
    private router: Router
  ) { }

  ngOnInit() {
  }

  back() {
    if (this.router.navigated) {
      this.location.back();
    } else {
      this.router.navigateByUrl(environment.homeUrl);
    }
  }
}
