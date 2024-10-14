import { FormatType } from "./FormatType";
import { TimezoneType } from "./TimezoneType";
import { DIGITAL_CLOCK_TYPE, ANALOG_CLOCK_TYPE } from "../constants/Constants";

export interface RealTimeClockProps {
  containerClassName?: string;
  analogClockClassName?: string;
  clockTextClassName?: string;
  timeZone?: TimezoneType;
  format?: FormatType;
  clockType?: typeof DIGITAL_CLOCK_TYPE | typeof ANALOG_CLOCK_TYPE;
  clockSize?: number;
  renderAnalogClockNumbers?: boolean;
}

export type ClockType = typeof DIGITAL_CLOCK_TYPE | typeof ANALOG_CLOCK_TYPE;

export interface UseTimeElapsedProps {
  targetDate: string | Date;
  timeZone?: TimezoneType;
  countingConditions?: {
    startCondition: boolean;
    stopCondition: boolean;
  };
}

export interface UseNotificationAlarmProps {
  alarmTime: string | Date;
  title: string;
  description?: string;
  icon?: string;
  timeZone?: TimezoneType | string;
}

export interface UseCountdownProps {
  targetDate: Date;
  timeZone?: TimezoneType | string;
}
