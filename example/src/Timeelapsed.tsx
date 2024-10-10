import { useTimeElapsed } from "react-realtime-clock";

function TimeElapsed() {
  const timeElapsed = useTimeElapsed({
    targetDate: "2023-10-10",
    timeZone: "Asia/Kolkata",
    countingConditions: {
      startCondition: true,
      stopCondition: false,
    },
  });

  return <div>{timeElapsed}</div>;
}

export default TimeElapsed;
