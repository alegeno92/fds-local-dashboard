import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../data/data.service';
import { SensorValue } from '@fds/api-interfaces';

@Component({
  selector: 'fds-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns = ['#', 'Key', 'Sensor', 'Value', 'Date'];

  sensorData$: Observable<SensorValue[]>;
  loading = true;

  constructor(private sensorDataService: DataService) {
   this.sensorData$ = this.sensorDataService.sensorData$;
  }

  ngOnInit() {
    this.sensorData$.subscribe(value => {
      this.loading = value.length === 0;
    });
  }

}
