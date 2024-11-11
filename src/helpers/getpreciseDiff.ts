import moment from "moment-timezone";
import { TimezoneType } from "../types/TimezoneType";
import { UseTimeElapsedReturnType } from "../types/Types";
import { STRING_RETURN_TYPE } from "../constants/Constants";

function preciseDiff(
  targetDate: string | Date,
  timeZone: TimezoneType,
  returnType: UseTimeElapsedReturnType = "string"
) {
  const now = moment.tz(timeZone);
  const parsedDate = moment.tz(targetDate, timeZone);

  const years = now.diff(parsedDate, "years");
  parsedDate.add(years, "years");

  const months = now.diff(parsedDate, "months");
  parsedDate.add(months, "months");

  const days = now.diff(parsedDate, "days");
  parsedDate.add(days, "days");

  const hours = now.diff(parsedDate, "hours");
  parsedDate.add(hours, "hours");

  const minutes = now.diff(parsedDate, "minutes");
  parsedDate.add(minutes, "minutes");

  const seconds = now.diff(parsedDate, "seconds");

  let result = "";
  if (years > 0) result += `${years} years `;
  if (months > 0) result += `${months} months `;
  if (days > 0) result += `${days} days `;
  if (hours > 0) result += `${hours} hours `;
  if (minutes > 0) result += `${minutes} minutes `;
  if (seconds > 0) result += `${seconds} seconds`;

  if (returnType === STRING_RETURN_TYPE) {
    return result.trim();
  } else {
    return {
      years,
      months,
      days,
      hours,
      minutes,
      seconds,
    };
  }
}

export default preciseDiff;
