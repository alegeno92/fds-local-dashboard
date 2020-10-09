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
    if (!v) return;
    this._elements = v;
    this._data = v.map(value => this.displayedColumns.map(key => value[key]));
  };

  get data() {
    return this._data;
  }

  @Input() displayedColumns: string[] = [];
  @Input() showCommands: { edit: boolean; delete: boolean; download: boolean } = {
    edit: false,
    delete: false,
    download: false
  };

  @Output() editClick = new EventEmitter<any>();
  @Output() deleteClick = new EventEmitter<any>();
  @Output() itemClick = new EventEmitter<any>();


  constructor() {
  }

  ngOnInit(): void {
  }

  format(value: any): string {
    if (value instanceof Date) {
      return moment(value).format(this.dateTimeFormat);
    }
    if (typeof value === 'boolean') {
      if (value) {
        return `<input type="checkbox" disabled checked/>`;
      }
      return `<input type="checkbox" disabled/>`;
    }

    return value;
  }

  onEditClick(id) {
    this.editClick.emit(this._elements[id]);
  }

  onDeleteClick(id) {
    this.deleteClick.emit(this._elements[id]);
  }

  onDownloadClick(id) {
    this.itemClick.emit(this._elements[id]);
  }


  resolve(obj = self, path, separator = '.') {
    const properties = Array.isArray(path) ? path : path.split(separator);
    return properties.reduce((prev, curr) => prev && prev[curr], obj);
  }

}
