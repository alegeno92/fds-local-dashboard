import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fds-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() appName = "Company";

  constructor() { }

  ngOnInit(): void {
  }

}
