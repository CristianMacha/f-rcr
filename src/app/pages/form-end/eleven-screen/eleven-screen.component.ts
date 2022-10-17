import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'vs-eleven-screen',
  templateUrl: './eleven-screen.component.html',
  styleUrls: ['./eleven-screen.component.scss']
})
export class ElevenScreenComponent implements OnInit {
  title = 'RECEIVE A QUOTE IN LESS THAN 24HRS';
  subTitle = 'THANK YOU!';

  hours = moment().hour(23).minutes(59).second(59);
  finalHour = '';
  finalMinute = '';
  finalsecond = '';

  constructor() { }

  ngOnInit(): void {
    this.timeRecorsive();
  }

  timeRecorsive() {
    setInterval(() => {
      this.hours.subtract(1, 'second');
      this.finalHour = this.hours.format('HH');
      this.finalMinute = this.hours.format('MM');
      this.finalsecond = this.hours.format('ss');
    }, 1000);
  }

}
