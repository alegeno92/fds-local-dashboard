import { Component, Input, OnInit } from '@angular/core';
import { RouteItem, routes } from '../../routes';
@Component({
  selector: 'fds-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  @Input() appName = "Company";
  @Input() routes: RouteItem[] = routes;

  constructor() { }

  ngOnInit(): void {
  }

}
