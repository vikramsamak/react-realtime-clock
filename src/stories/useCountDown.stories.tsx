import { Meta, StoryFn } from "@storybook/react";
import useCountdown from "../hooks/useCountDown";
import { UseCountdownProps } from "../types/Types";
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
