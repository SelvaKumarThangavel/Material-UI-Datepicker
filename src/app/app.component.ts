import { Component } from '@angular/core';
import { DateServiceService } from './date-service.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { first } from 'rxjs/operators';
import * as _moment from 'moment';
const moment = _moment;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  finalDate: any ;
  _dateValue: any ;

  constructor(private dateServiceService: DateServiceService) { }

  ngOnInit() {
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    //console.log(event.value);
    this.dateValue = moment(event.value, 'YYYY/MM/DD HH:mm:ss');
    this.finalDate = {date: this._dateValue}
    console.log(this.finalDate)
    this.dateServiceService.sendDate(this.finalDate).pipe(first()).subscribe(data => {
      console.log(data)
    })
  }
 
  set dateValue(val) {
    this._dateValue = moment(val).format('YYYY/MM/DD HH:mm:ss');
  }

}
