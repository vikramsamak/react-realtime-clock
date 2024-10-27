import { Meta, StoryFn } from "@storybook/react";
import useCountdown from "../hooks/useCountDown";
import { UseCountdownProps } from "../types/Types";
import { timeZones } from "../constants/Timezones";
import { TimezoneType } from "../types/TimezoneType";
import { Markdown } from "@storybook/blocks";

export default {
  title: "Hooks/useCountdown",
  argTypes: {
    targetDate: {
      control: { type: "date" },
      description: "The target date for the countdown.",
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
# \`useCountdown\` Hook 

The \`useCountdown\` hook calculates the time remaining until a specified \`targetDate\`, updating every second. It supports custom time zones, making it perfect for countdown timers that need to display the remaining time for events, deadlines, or other time-based tasks. 

## Usage

To use \`useCountdown\`, import it into your project:

\`\`\`tsx
import { useCountdown } from "react-realtime-clock";

const App = () => {
  const timeRemaining = useCountdown({
    targetDate: "2024-12-31T23:59:59Z", 
    timeZone: "Asia/Kolkata"
  });

  return <div>{timeRemaining}</div>;
};
\`\`\`

In this example, the \`timeRemaining\` variable will display the time left until the specified \`targetDate\` in the desired \`timeZone\`.
`}
          </Markdown>
        </>
      ),
    },
  },
} as Meta;

const HookDisplay: React.FC<UseCountdownProps> = ({ targetDate, timeZone }) => {
  const timeRemaining = useCountdown({ targetDate, timeZone });

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h3>Time Remaining: {timeRemaining}</h3>
      <p>Target Date: {new Date(targetDate).toString()}</p>
      <p>Timezone: {timeZone}</p>
    </div>
  );
};

const Template: StoryFn<UseCountdownProps> = (args) => (
  <HookDisplay {...args} />
);

const oneMinuteLater = new Date();
oneMinuteLater.setMinutes(oneMinuteLater.getMinutes() + 1);

export const Default = Template.bind({});
Default.args = {
  targetDate: oneMinuteLater,
  timeZone: "Asia/Kolkata",
};
Default.parameters = {
  docs: {
    source: {
      code: false,
    },
  },
};
