import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import useNotificationAlarm from "../hooks/useNotificationAlarm";
import { UseNotificationAlarmProps } from "../types/Types";
import { timeZones } from "../constants/Timezones";
import { TimezoneType } from "../types/TimezoneType";
import {
  Controls,
  Description,
  Primary,
  Stories,
  Title,
} from "@storybook/blocks";

export default {
  title: "Hooks/useNotificationAlarm",
  argTypes: {
    alarmTime: {
      control: { type: "date" },
      description: "The target time to trigger the alarm notification.",
    },
    title: {
      control: { type: "text" },
      description: "The title of the notification.",
    },
    description: {
      control: { type: "text" },
      description: "The body text of the notification.",
    },
    icon: {
      control: { type: "text" },
      description: "The icon for the notification (optional).",
    },
    timeZone: {
      control: {
        type: "select",
      },
      options: timeZones as TimezoneType[],
    },
  },
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
} as Meta;

const HookDisplay: React.FC<UseNotificationAlarmProps> = ({
  alarmTime,
  title,
  description,
  icon,
  timeZone,
}) => {
  const { isAlarmTriggered, timeStatus } = useNotificationAlarm({
    alarmTime,
    title,
    description,
    icon,
    timeZone,
  });

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        <strong>Time Status:</strong> {timeStatus}
      </p>
      <p>
        <strong>Alarm Triggered:</strong> {isAlarmTriggered ? "Yes" : "No"}
      </p>
    </div>
  );
};

const Template: StoryFn<UseNotificationAlarmProps> = (args) => {
  return <HookDisplay {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  alarmTime: new Date(new Date().getTime() + 2 * 60 * 1000),
  title: "Reminder",
  description: "This is your alarm notification.",
  timeZone: "Asia/Kolkata",
};
