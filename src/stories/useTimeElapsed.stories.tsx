import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import useTimeElapsed from "../hooks/useTimeElapsed";
import { UseTimeElapsedProps } from "../types/Types";

export default {
  title: "Hooks/useTimeElapsed",
  argTypes: {
    targetDate: {
      control: { type: "date" },
      description: "Target date to calculate time elapsed from.",
    },
    timeZone: {
      control: { type: "text" },
      description: "The timezone to calculate the elapsed time.",
    },
    countingConditions: {
      control: { type: "object" },
      description: "Conditions to control the timer behavior.",
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
