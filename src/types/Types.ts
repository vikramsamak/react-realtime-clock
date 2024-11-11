import { FormatType } from "./FormatType";
import { TimezoneType } from "./TimezoneType";
import {
  DIGITAL_CLOCK_TYPE,
  ANALOG_CLOCK_TYPE,
  STRING_RETURN_TYPE,
  OBJECT_RETURN_TYPE,
} from "../constants/Constants";

export interface RealTimeClockProps {
  containerClassName?: string;
  analogClockClassName?: string;
  clockTextClassName?: string;
  timeZone?: TimezoneType;
  format?: FormatType;
  clockType?: ClockType;
  clockSize?: number;
  renderAnalogClockNumbers?: boolean;
}

export type ClockType = typeof DIGITAL_CLOCK_TYPE | typeof ANALOG_CLOCK_TYPE;

export type UseTimeElapsedReturnType =
  | typeof STRING_RETURN_TYPE
  | typeof OBJECT_RETURN_TYPE;

export interface UseTimeElapsedProps {
  targetDate: string | Date;
  timeZone?: TimezoneType;
  countingConditions: {
    startCondition: boolean;
    stopCondition: boolean;
  };
  returnType?: UseTimeElapsedReturnType;
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

export interface TimeElapsedObject {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
