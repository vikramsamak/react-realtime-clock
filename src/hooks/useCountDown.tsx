import { useState, useEffect, useCallback } from "react";
import moment from "moment-timezone";
import { UseCountdownProps } from "../types/Types";

const useCountdown = ({
  targetDate,
  timeZone = moment.tz.guess(),
}: UseCountdownProps) => {
  const [timeRemaining, setTimeRemaining] = useState<string>("");

  const calculateTimeRemaining = useCallback(() => {
    const currentTime = moment.tz(timeZone);
    const targetTime = moment.tz(targetDate, timeZone);
    const diffDuration = moment.duration(targetTime.diff(currentTime));

    if (diffDuration.asMilliseconds() > 0) {
      const days = Math.floor(diffDuration.asDays());
      const hours = Math.floor(diffDuration.hours());
      const minutes = Math.floor(diffDuration.minutes());
      const seconds = Math.floor(diffDuration.seconds());
      setTimeRemaining(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    } else {
      setTimeRemaining("Time's up!");
    }
  }, [targetDate, timeZone]);

  useEffect(() => {
    const interval = setInterval(calculateTimeRemaining, 1000);
    return () => clearInterval(interval);
  }, [calculateTimeRemaining]);

  return timeRemaining;
};

export default useCountdown;
