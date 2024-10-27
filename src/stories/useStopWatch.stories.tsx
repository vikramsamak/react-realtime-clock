import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import useStopWatch from "../hooks/useStopWatch";
import { Markdown } from "@storybook/blocks";

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
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: () => (
        <>
          <Markdown>
            {`
# \`useStopWatch\` Hook

The \`useStopWatch\` hook provides an easy-to-use stopwatch with start, stop, and reset functionality, tracking elapsed time in seconds. It is ideal for time-tracking tasks or any application that requires a simple stopwatch.

## Features
- **Start**: Begins counting elapsed time.
- **Stop**: Pauses the stopwatch, preserving the current elapsed time.
- **Reset**: Resets the elapsed time to zero.

## Usage

First, import the \`useStopWatch\` hook:

\`\`\`tsx
import { useStopWatch } from "react-realtime-clock";

const App = () => {
  const { elapsedTime, isRunning, start, stop, reset } = useStopWatch();

  return (
    <div>
      <h3>Elapsed Time: {elapsedTime.toFixed(0)} seconds</h3>
      <button onClick={start} disabled={isRunning}>Start</button>
      <button onClick={stop} disabled={!isRunning}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
\`\`\`

## Hook API

- \`elapsedTime\` (*number*): The time elapsed in seconds.
- \`isRunning\` (*boolean*): Indicates whether the stopwatch is currently running.
- \`start\` (*function*): Starts the stopwatch.
- \`stop\` (*function*): Stops the stopwatch.
- \`reset\` (*function*): Resets the elapsed time to zero.

This hook is versatile for any stopwatch use case, providing a straightforward way to manage and display time elapsed.
`}
          </Markdown>
        </>
      ),
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
Default.parameters = {
  docs: {
    source: {
      code: false,
    },
  },
};
