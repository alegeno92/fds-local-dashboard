import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'fds-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() collapse: EventEmitter<boolean> = new EventEmitter<boolean>()
  @Input() appName = "Company";

  _collapse = true;

  constructor() { }

  ngOnInit(): void {
  }

  onCollapse() {
    this._collapse = !this._collapse;
    this.collapse.emit(this._collapse);
  }

}
