import { FormatType } from "react-realtime-clock";

export const formats: FormatType[] = [
  "HH:mm:ss", // 24-hour format with seconds
  "hh:mm:ss A", // 12-hour format with seconds
  "MMMM Do YYYY, h:mm:ss a", // Full month name, day, year, 12-hour format with seconds
  "MM/DD/YYYY, h:mm A", // MM/DD/YYYY format with 12-hour time
  "YYYY-MM-DD HH:mm:ss", // ISO format (24-hour)
  "HH:mm", // 24-hour format without seconds
  "hh:mm A", // 12-hour format without seconds
  "dddd, MMMM Do YYYY", // Full day name, full month name, day, year
  "YYYY/MM/DD", // ISO date format (YYYY/MM/DD)
  "DD MMM YYYY", // Day month abbreviation year
  "MMM Do YY", // Month abbreviation day of month abbreviation year
  "dddd", // Full day name
  "MMM YYYY", // Month abbreviation year
  "MMMM YYYY", // Full month name year
  "h:mm A", // 12-hour format without date
  "MM-DD-YYYY", // MM-DD-YYYY format
  "DD-MM-YYYY", // DD-MM-YYYY format
  "YYYY-MM-DDTHH:mm:ssZ", // ISO 8601 format with timezone
  "h:mm:ss A", // 12-hour format with seconds and AM/PM
  "hh:mm:ss", // 12-hour format with leading zero
  "MM/DD/YYYY", // MM/DD/YYYY format without time
  "MMMM Do", // Full month name and day
  "MMM Do h:mm A", // Month abbreviation day of month and 12-hour time
  "YYYY", // Year only
  "MM", // Month only
  "DD", // Day only
  "hh:mm:ss a", // 12-hour format with lowercase AM/PM
  "HH:mm:ss.SSS", // 24-hour format with milliseconds
  "YYYY-MM-DD HH:mm", // ISO format without seconds
  "MM-DD-YYYY, h:mm A", // MM-DD-YYYY format with 12-hour time
  "DD/MM/YYYY", // DD/MM/YYYY format
  "MMMM DD, YYYY", // Full month name, day, year
  "MMMM DD", // Full month name and day
  "YYYY-MM-DDTHH:mm:ss.SSSZ", // ISO 8601 format with milliseconds and timezone
];
