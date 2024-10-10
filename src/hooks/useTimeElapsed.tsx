import { useState, useEffect, useCallback } from "react";
import { UseTimeElapsedProps } from "../types/Types";
import preciseDiff from "../helpers/getpreciseDiff";

const useTimeElapsed = ({
  targetDate,
  timeZone = "Asia/Kolkata",
  countingConditions = { startCondition: false, stopCondition: false },
}: UseTimeElapsedProps): string => {
  const [timeElapsed, setTimeElapsed] = useState<string>("");

  const updateElapsedTime = useCallback(() => {
    const duration = preciseDiff(targetDate, timeZone);
    setTimeElapsed(duration);
  }, [targetDate, timeZone]);

  useEffect(() => {
    if (
      countingConditions.startCondition &&
      !countingConditions.stopCondition
    ) {
      updateElapsedTime();
      const interval = setInterval(updateElapsedTime, 1000);
      return () => clearInterval(interval);
    }
  }, [updateElapsedTime, countingConditions]);

  return timeElapsed;
};

export default useTimeElapsed;
