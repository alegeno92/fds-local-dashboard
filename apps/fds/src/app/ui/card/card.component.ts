import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fds-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() loading = true;

  constructor() { }

  ngOnInit(): void {
  }

}
