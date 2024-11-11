import { useState, useEffect, useCallback } from "react";
import { TimeElapsedObject, UseTimeElapsedProps } from "../types/Types";
import { INDIAN_STANDARD_TIMEZONE, STRING_RETURN_TYPE } from "../constants/Constants";
import preciseDiff from "../helpers/getpreciseDiff";

const useTimeElapsed = ({
  targetDate,
  timeZone = INDIAN_STANDARD_TIMEZONE,
  countingConditions = { startCondition: false, stopCondition: false },
  returnType = STRING_RETURN_TYPE,
}: UseTimeElapsedProps): string | TimeElapsedObject => {
  const [timeElapsed, setTimeElapsed] = useState<string | TimeElapsedObject>(
    ""
  );

  const updateElapsedTime = useCallback(() => {
    const duration = preciseDiff(targetDate, timeZone, returnType);
    setTimeElapsed(duration);
  }, [targetDate, timeZone, returnType]);

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
