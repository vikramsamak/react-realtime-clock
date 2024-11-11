import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { UseTimeElapsedProps } from "../types/Types";
import { timeZones } from "../constants/Timezones";
import { TimezoneType } from "../types/TimezoneType";
import { Markdown } from "@storybook/blocks";
import { OBJECT_RETURN_TYPE, STRING_RETURN_TYPE } from "../constants/Constants";
import useTimeElapsed from "../hooks/useTimeElapsed";

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
    returnType: {
      control: { type: "select" },
      options: [STRING_RETURN_TYPE, OBJECT_RETURN_TYPE],
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
- Offers flexibility in the format of the elapsed time through the \`returnType\` option.

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
    returnType: "string", // Optionally specify the return type here
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
- \`returnType\` (*string*): Determines the format of the elapsed time. 
  - \`"string"\`: Returns the elapsed time as a formatted string (e.g., "1 year 2 months 3 days").
  - \`"object"\`: Returns the elapsed time as an object containing units like days, hours, minutes, etc. (e.g., \`{ days: 365, hours: 5, minutes: 30 }\`).

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
  returnType,
}) => {
  const timeElapsed = useTimeElapsed({
    targetDate,
    timeZone,
    countingConditions,
    returnType,
  });

  return (
    <div>
      <h3>
        Elapsed Time:{" "}
        {typeof timeElapsed === "string" ? (
          timeElapsed
        ) : (
          <span>
            {Object.entries(timeElapsed).map(([key, value]) => (
              <span key={key}>
                {key}: {value}{" "}
              </span>
            ))}
          </span>
        )}
      </h3>
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
