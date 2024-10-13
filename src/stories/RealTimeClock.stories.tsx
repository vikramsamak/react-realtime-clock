import RealTimeClock from "../components/RealtimeClock";
import { Meta, StoryFn } from "@storybook/react";
import { formats } from "../constants/Formats";
import { timeZones } from "../constants/Timezones";
import { RealTimeClockProps } from "../types/Types";
import { FormatType } from "../types/FormatType";
import { TimezoneType } from "../types/TimezoneType";

export default {
  title: "Components/RealTimeClock",
  component: RealTimeClock,
  argTypes: {
    timeZone: {
      control: {
        type: "select",
      },
      options: timeZones as TimezoneType[],
    },
    clockType: {
      control: {
        type: "radio",
      },
      options: ["digital", "analog"],
    },
    renderAnalogClockNumbers: {
      control: { type: "boolean" },
      if: { arg: "clockType", eq: "analog" },
    },
    format: {
      control: {
        type: "select",
      },
      options: formats as FormatType[],
      if: { arg: "clockType", eq: "digital" },
    },
    clockSize: {
      control: { type: "number" },
      if: { arg: "clockType", eq: "analog" },
    },
    clockTextClassName: {
      control: { type: "text" },
      if: { arg: "clockType", eq: "digital" },
    },
    containerClassName: {
      control: { type: "text" },
    },
    analogClockClassName: {
      control: { type: "text" },
      if: { arg: "clockType", eq: "analog" },
    },
  },
} as Meta<RealTimeClockProps>;

const DigitalTemplate: StoryFn<RealTimeClockProps> = (args) => (
  <RealTimeClock {...args} />
);

const AnalogTemplate: StoryFn<RealTimeClockProps> = (args) => (
  <RealTimeClock {...args} />
);

export const DigitalClock = DigitalTemplate.bind({});
DigitalClock.args = {
  clockType: "digital",
  timeZone: "Asia/Kolkata",
  format: "hh:mm:ss",
  containerClassName: "p-4 flex justify-center items-center",
  clockTextClassName: "text-black",
};

export const AnalogClock = AnalogTemplate.bind({});
AnalogClock.args = {
  clockType: "analog",
  clockSize: 300,
  timeZone: "Asia/Kolkata",
  renderAnalogClockNumbers: true,
  containerClassName: "p-4 flex justify-center items-center",
  analogClockClassName: "text-black",
};
