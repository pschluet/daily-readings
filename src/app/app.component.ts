import { AntiochianService } from './antiochian.service';
import { Component, OnInit } from '@angular/core';
import { LiturgicalDay } from './models/liturgical-day';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'daily-readings';
  liturgicalDay: LiturgicalDay;

  constructor(
    private antiochianService: AntiochianService
  ) {}

  ngOnInit(): void {
    const now = new Date();
    this.antiochianService.getLiturgicDayInfoForDate(now).subscribe(info => {
      this.liturgicalDay = info.LiturgicalDay;
    });
  }
}
