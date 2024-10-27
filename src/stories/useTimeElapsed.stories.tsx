import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import useTimeElapsed from "../hooks/useTimeElapsed";
import { UseTimeElapsedProps } from "../types/Types";
import { timeZones } from "../constants/Timezones";
import { TimezoneType } from "../types/TimezoneType";
import { Markdown } from "@storybook/blocks";

export default {
  title: "Hooks/useTimeElapsed",
  argTypes: {
    targetDate: {
      control: { type: "date" },
      description: "Target date to calculate time elapsed from.",
    },
    timeZone: {
      control: { type: "select" },
      options: timeZones as TimezoneType[],
    },
    countingConditions: {
      control: { type: "object" },
      description: "Conditions to control the timer behavior.",
    },
  },
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <>
          <Markdown>
            {`
# \`useTimeElapsed\` Hook

The \`useTimeElapsed\` hook calculates the time elapsed since a specified \`targetDate\`, updating every second. It supports custom time zones and can be controlled through counting conditions, making it suitable for timers and elapsed time displays.

## Features
- Calculates the elapsed time from a specific date.
- Supports custom time zones for accurate time tracking.
- Allows starting and stopping the timer using conditions.

## Usage

To use the \`useTimeElapsed\` hook, import it into your component:

\`\`\`tsx
import { useTimeElapsed } from "react-realtime-clock";

const App = () => {
  const targetDate = new Date("2023-01-01T00:00:00Z"); // Example target date
  const timeElapsed = useTimeElapsed({
    targetDate,
    timeZone: "Asia/Kolkata",
    countingConditions: { startCondition: true, stopCondition: false },
  });

  return <div>Elapsed Time: {timeElapsed}</div>;
};
\`\`\`

## Hook API

- \`targetDate\` (*Date*): The date from which to calculate elapsed time.
- \`timeZone\` (*string*): The time zone to use for the calculation (default is "Asia/Kolkata").
- \`countingConditions\` (*object*): 
  - \`startCondition\` (*boolean*): Whether to start counting.
  - \`stopCondition\` (*boolean*): Whether to stop counting.
- \`return\` (*string*): The formatted elapsed time as a string.

This hook is ideal for tracking time elapsed since specific events, deadlines, or for any application requiring elapsed time functionality.
`}
          </Markdown>
        </>
      ),
    },
  },
} as Meta;

const HookDisplay: React.FC<UseTimeElapsedProps> = ({
  targetDate,
  timeZone,
  countingConditions,
}) => {
  const timeElapsed = useTimeElapsed({
    targetDate,
    timeZone,
    countingConditions,
  });

  return (
    <div>
      <h3>Elapsed Time: {timeElapsed}</h3>
      <p>Target Date: {new Date(targetDate).toString()}</p>
      <p>Timezone: {timeZone}</p>
    </div>
  );
};

const Template: StoryFn<UseTimeElapsedProps> = (args) => {
  return <HookDisplay {...args} />;
};

const oneYearAgo = new Date();
oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);

export const Default = Template.bind({});
Default.args = {
  targetDate: oneYearAgo,
  timeZone: "Asia/Kolkata",
  countingConditions: { startCondition: true, stopCondition: false },
};

Default.parameters = {
  docs: {
    source: {
      code: false,
    },
  },
};
