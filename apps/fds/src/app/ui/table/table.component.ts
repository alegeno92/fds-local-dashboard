import { Component, Input, OnInit } from '@angular/core';
import { SensorValue } from '@fds/api-interfaces';
import * as moment from 'moment';

@Component({
  selector: 'fds-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() dateTimeFormat = 'DD/MM/YYYY hh:mm:ss';
  @Input() data: SensorValue[] = [];
  @Input() displayedColumns: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  toString(date: Date): string {
    return moment(date).format(this.dateTimeFormat)
  }

}
