import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';

type Date = {
  value: dayjs.Dayjs,
  dayDisplay: string
  isInMonth: boolean
}
@Component({
  selector: 'dp-calendar-container',
  templateUrl: './calendar-container.component.html',
  styleUrls: ['./calendar-container.component.scss']
})
export class CalendarContainerComponent implements OnInit {

  targetDate: dayjs.Dayjs
  listDate: Date[] = []
  listDay = ['Mon', 'Tues', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  currentMonth: number
  currentMonthDisplay: string
  constructor() { }

  ngOnInit(): void {
    this.currentMonth = dayjs().month()
    // dayjs().
    const currentMonth = dayjs().month()
    const startDay = dayjs().startOf('month').startOf('week')
    const endDay = dayjs().endOf('month').endOf('week')

    console.log(endDay.diff(startDay, 'day'))

    this.listDate = []
    for(let index = startDay; index.isBefore(endDay); index = index.add(1,'day')) {
      this.listDate.push({
        value: index,
        isInMonth: index.month() == currentMonth,
        dayDisplay: index.format('D')
      })
    }
  }

  setCurrentMonth() {

  }

}
