import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import useTimeElapsed from "../hooks/useTimeElapsed";
import { UseTimeElapsedProps } from "../types/Types";
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
  title: "Hooks/useTimeElapsed",
  argTypes: {
    targetDate: {
      control: { type: "date" },
      description: "Target date to calculate time elapsed from.",
    },
    timeZone: {
      control: {
        type: "select",
      },
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
