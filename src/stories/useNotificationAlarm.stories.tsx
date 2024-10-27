import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import useNotificationAlarm from "../hooks/useNotificationAlarm";
import { UseNotificationAlarmProps } from "../types/Types";
import { timeZones } from "../constants/Timezones";
import { TimezoneType } from "../types/TimezoneType";
import { Markdown } from "@storybook/blocks";

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
          <Markdown>
            {`
# \`useNotificationAlarm\` Hook 

The \`useNotificationAlarm\` hook provides a way to set up an alarm notification for a specific \`alarmTime\` with customizable options. It integrates a real-time countdown to the alarm, displays time status messages, and triggers a notification at the designated time. This hook is particularly useful for reminder systems, countdowns, or event notifications.

## Features
- Displays the time remaining until the alarm in a human-readable format.
- Sends a browser notification with a customizable title, description, and icon when the alarm time is reached.
- Automatically adjusts to the user’s time zone or any specified \`timeZone\`.

## Usage

First, import the \`useNotificationAlarm\` hook:

\`\`\`tsx
import { useNotificationAlarm } from "react-realtime-clock";

const App = () => {
  const { isAlarmTriggered, timeStatus } = useNotificationAlarm({
    alarmTime: "2024-12-31T23:59:59Z",
    title: "New Year's Eve Alert!",
    description: "Countdown to the new year!",
    icon: "https://example.com/icon.png",
    timeZone: "Asia/Kolkata",
  });

  return (
    <div>
      <h3>{timeStatus}</h3>
      {isAlarmTriggered && <p>Alarm has been triggered!</p>}
    </div>
  );
};
\`\`\`

## Props

- \`alarmTime\` (*string*): The target date and time to trigger the alarm.
- \`title\` (*string*): The title of the notification.
- \`description\` (*string*, optional): The body of the notification.
- \`icon\` (*string*, optional): The icon URL for the notification.
- \`timeZone\` (*string*, optional): Specifies the time zone to calculate the alarm time. Defaults to the user's local time zone.

When the specified \`alarmTime\` is reached, a notification will display with the \`title\`, \`description\`, and optional \`icon\`.
`}
          </Markdown>
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
Default.parameters = {
  docs: {
    source: {
      code: false,
    },
  },
};
