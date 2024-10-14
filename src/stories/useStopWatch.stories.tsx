import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import useStopWatch from "../hooks/useStopWatch";

export default {
  title: "Hooks/useStopWatch",
  argTypes: {
    isRunning: {
      control: { type: "boolean" },
      description: "Controls whether the stopwatch is running",
    },
    resetWatch: {
      control: { type: "boolean" },
      description: "Triggers the reset for the stopwatch",
    },
  },
} as Meta;

const HookDisplay: React.FC<{
  isRunning: boolean;
  resetWatch: boolean;
}> = ({ isRunning, resetWatch }) => {
  const { elapsedTime, start, stop, reset } = useStopWatch();

  
  React.useEffect(() => {
    if (isRunning) {
      start();
    } else {
      stop();
    }
  }, [isRunning, start, stop]);

  React.useEffect(() => {
    if (resetWatch) {
      reset();
    }
  }, [resetWatch, reset]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Stopwatch</h2>
      <p>
        <strong>Elapsed Time:</strong> {elapsedTime.toFixed(0)} seconds
      </p>
    </div>
  );
};

const Template: StoryFn<{ isRunning: boolean; resetWatch: boolean }> = (
  args
) => <HookDisplay {...args} />;

export const Default = Template.bind({});
Default.args = {
  isRunning: false,
  resetWatch: false,
};
