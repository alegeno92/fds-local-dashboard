import { Component, Input, OnInit } from '@angular/core';
import { RouteItem } from '../../routes';

@Component({
  selector: 'fds-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() routes: RouteItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
