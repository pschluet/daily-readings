import { LiturgicalDayPayload } from './models/liturgical-day-payload';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EnabledDate } from './models/enabled-date';

@Injectable({
  providedIn: 'root'
})
export class AntiochianService {

  constructor(
    private http: HttpClient,
  ) { }

  public getLiturgicDayInfoForDate(desiredDate: Date): Observable<LiturgicalDayPayload> {
    return this.getEnabledDates().pipe(
      switchMap(enabledDates => {
        const itemId = this.getItemIdForDate(desiredDate, enabledDates);
        return this.getLiturgicDayInfo(itemId);
      })
    );
  }

  private getEnabledDates(): Observable<EnabledDate[]> {
    return this.http.get<EnabledDate[]>(
      'https://antiochian-api-prod-wa.azurewebsites.net/api/data/RetrieveEnabledDates'
    );
  }

  private getLiturgicDayInfo(itemId: number): Observable<LiturgicalDayPayload> {
    return this.http.get<any>(
      'https://antiochian-api-prod-wa.azurewebsites.net/api/data/RetrieveLiturgicDayByItemId',
      {
        params: { itemId: itemId.toString() }
      }
    );
  }

  private getItemIdForDate(desiredDate: Date, enabledDates: EnabledDate[]): number {
    return enabledDates.find(dateItem =>
      dateItem.day === desiredDate.getDate() &&
      dateItem.month === desiredDate.getMonth() + 1 &&
      dateItem.year === desiredDate.getFullYear()
    ).ItemId;
  }
}
