import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Export } from './interfaces';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class ExportService {

  _loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private static downloadFile(name: string, data: any, type: string) {
    const blob = new Blob([data], { type: type});
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', name);
    document.body.appendChild(link);
    link.click();
  }
  constructor(public http: HttpClient) {
  }

  public get loading$(): Observable<boolean> {
    return this._loading$.asObservable();
  }

  public getAll(): Observable<Export[]> {
    this._loading$.next(true);
    return this.http.get('/api/exports')
      .pipe(
        map((res: any[]) => res.map((e, i) => <Export>({id: i, ...e }))),
        tap(_ => this._loading$.next(false))
      );
  }

  public remove(filename) {
    return this.http.delete(`/api/exports/${filename}`);
  }

  download(name, uri) {
    this.http.get(uri,{
      responseType: 'arraybuffer'
    }
    ).subscribe(response => ExportService.downloadFile(name, response, "application/csv"));
  }


}
