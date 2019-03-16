import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { routeAnimation } from 'src/app/utils/animations';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less'],
  animations: [
    routeAnimation
  ]
})
export class LayoutComponent implements OnInit, AfterViewChecked {

  selectedClass: string = 'tab-item-selected';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    const node = document.querySelector(`.tab-item[routerLink='${this.router.url}']`);
    this.changeState(node);
  }

  changeState(node: any) {
    if (!node) { return; }
    Array.prototype.slice.call(document.querySelectorAll('.tab-item'))
      .forEach(element => element.classList.remove(this.selectedClass));
    node.classList.add(this.selectedClass);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'] || '';
  }

}