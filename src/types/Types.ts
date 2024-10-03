import { FormatType } from "./FormatType";
import { TimezoneType } from "./TimezoneType";

export interface RealTimeClockProps {
  containerClassName?: string;
  clockTextClassName?: string;
  timeZone?: TimezoneType;
  format?: FormatType;
}
