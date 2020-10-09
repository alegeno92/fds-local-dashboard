import { Component, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { EntityActionFactory } from '@ngrx/data';
import { Export } from '@fds/data-access/export';
import { ExportService } from '@fds/data-access/export';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'fds-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  exports$: Observable<Export[]>;
  loading$: Observable<boolean>;
  displayedColumns = ['id', 'name', 'size'];

  constructor(private store: Store<any>,
              private eaf: EntityActionFactory,
              private elRef: ElementRef,
              private exportService: ExportService) {
  }

  ngOnInit(): void {
    this.exports$ = this.exportService.getAll();
    this.loading$ = this.exportService.loading$;
  }

  download(item) {
    this.exportService.download(item.name, item.uri);
  }

  remove(item) {
    this.exportService.remove(item.name)
      .pipe(
        delay(100)
      )
      .subscribe(_ => {
      this.exports$ = this.exportService.getAll();
    });
  }
}
