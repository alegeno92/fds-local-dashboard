import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SensorActionService {

  constructor(private http: HttpClient) {
  }

  private static downloadFile(data: any, filename: string) {
    const link = document.createElement('a');
    const url = URL.createObjectURL(data);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  private static parseFilename(contentDisposition): string {
    if (!contentDisposition) return null;
    const matches = /filename="(.*?)"/g.exec(contentDisposition);
    return matches && matches.length > 1 ? matches[1] : null;
  }

  export(clearTable: boolean) {
    this.http.post('/api/sensors/export', { clear: clearTable }, { responseType: 'blob', observe: 'response' })
      .subscribe(response => {
        SensorActionService.downloadFile(response.body, SensorActionService.parseFilename(response.headers.get('Content-Disposition')));
      });
  }
}
