import RealTimeClock from "../components/RealtimeClock";
import { Meta, StoryFn } from "@storybook/react";
import { formats } from "../constants/Formats";
import { timeZones } from "../constants/Timezones";
import { RealTimeClockProps } from "../types/Types";
import { FormatType } from "../types/FormatType";
import { TimezoneType } from "../types/TimezoneType";
import { Markdown } from "@storybook/blocks";

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
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <>
          <Markdown>
            {`
# \`RealTimeClock\` Component

The \`RealTimeClock\` component displays the current time in either a digital or analog format, updated every second. It supports different time zones and customizable styles, making it suitable for various applications requiring real-time clock functionality.

## Features
- Displays current time in digital or analog format.
- Supports customizable time zones.
- Allows customization of clock size and appearance.
- Updates every second to provide real-time information.

## Usage

To use the \`RealTimeClock\` component in your application, import it and provide the necessary props:

\`\`\`tsx
import { RealTimeClock } from "react-realtime-clock";

const App = () => {
  return (
    <div>
      <RealTimeClock
        timeZone="Asia/Kolkata"
        format="hh:mm:ss A"
        clockType="digital"
        clockSize={250}
      />
    </div>
  );
};
\`\`\`

## Props

- \`containerClassName\` (*string*): Additional classes for the container.
- \`clockTextClassName\` (*string*): Additional classes for the clock text.
- \`analogClockClassName\` (*string*): Additional classes for the analog clock.
- \`timeZone\` (*string*): The time zone for the clock (default is "UTC").
- \`format\` (*string*): Format for the digital clock display (default is "HH:mm:ss").
- \`clockType\` (*string*): Type of clock to display ("digital" or "analog", default is "digital").
- \`clockSize\` (*number*): Size of the analog clock in pixels (default is 200).
- \`renderAnalogClockNumbers\` (*boolean*): Whether to render numbers on the analog clock (default is false).

This component is perfect for applications that require a reliable and visually appealing display of real-time information.
`}
          </Markdown>
        </>
      ),
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
