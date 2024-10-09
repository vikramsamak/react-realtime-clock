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
