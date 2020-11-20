import { LiturgicalDay } from './liturgical-day';

export interface LiturgicalDayPayload {
  LiturgicalDay: LiturgicalDay;
  NextItemId: number;
  PreviousItemId: number;
}
