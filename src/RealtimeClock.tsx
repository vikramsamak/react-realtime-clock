import React, { useState, useEffect, useCallback } from "react";
import { cn } from "./lib/utils";
import moment from "moment-timezone";
import { RealTimeClockProps } from "./types/Types";

const RealTimeClock: React.FC<RealTimeClockProps> = ({
  containerClassName,
  clockTextClassName,
  timeZone = "UTC",
  format = "HH:mm:ss",
}) => {
  const [currentTime, setCurrentTime] = useState<string>(
    moment.tz(timeZone).format(format)
  );

  const updateTime = useCallback(() => {
    setCurrentTime(moment.tz(timeZone).format(format));
  }, [timeZone, format]);

  useEffect(() => {
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, [timeZone, format, updateTime]);

  return (
    <div
      className={cn(
        "p-4 flex justify-center items-center bg-white rounded-md",
        containerClassName
      )}
    >
      <span
        className={cn("text-2xl font-semibold text-black", clockTextClassName)}
      >
        {currentTime}
      </span>
    </div>
  );
};

export default RealTimeClock;
