import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'fds-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  _data = [];
  _elements = [];
  @Input() dateTimeFormat = 'DD/MM/YYYY hh:mm:ss';

  @Input('data')
  set data(v) {
    this._elements = v;
    this._data = v.map(value => this.displayedColumns.map(key => value[key]));
  };
  get data() {
    return this._data;
  }

  @Input() displayedColumns: string[] = [];
  @Input() showCommands = false;

  @Output() editClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  format(value: any): string {
    if (value instanceof Date) {
      return moment(value).format(this.dateTimeFormat);
    }
    return value;
  }

  onEditClick(id){
    this.editClick.emit(this._elements[id]);
  }

}
