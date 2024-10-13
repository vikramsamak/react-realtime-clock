import React, { useState, useEffect, useCallback } from "react";
import { cn } from "../lib/utils";
import moment, { Moment } from "moment-timezone";
import { RealTimeClockProps } from "../types/Types";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

const RealTimeClock: React.FC<RealTimeClockProps> = ({
  containerClassName,
  clockTextClassName,
  analogClockClassName,
  timeZone = "UTC",
  format = "HH:mm:ss",
  clockType = "digital",
  clockSize = 200,
  renderAnalogClockNumbers = false,
}) => {
  const [currentTime, setCurrentTime] = useState<Moment>(moment().tz(timeZone));

  const updateTime = useCallback(() => {
    setCurrentTime(moment().tz(timeZone));
  }, [timeZone]);

  useEffect(() => {
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [updateTime]);

  const currentDateTimeForAnalog = new Date(
    currentTime.year(),
    currentTime.month(),
    currentTime.date(),
    currentTime.hours(),
    currentTime.minutes(),
    currentTime.seconds()
  );

  if (clockType === "analog") {
    return (
      <div
        className={cn(
          "p-4 flex justify-center items-center bg-transparent",
          containerClassName
        )}
      >
        <Clock
          value={currentDateTimeForAnalog}
          size={clockSize}
          className={cn(
            "bg-transparent text-black",
            analogClockClassName
          )}
          renderNumbers={renderAnalogClockNumbers}
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "p-4 flex justify-center items-center bg-transparent",
        containerClassName
      )}
    >
      <span className={cn("text-2xl font-semibold", clockTextClassName)}>
        {currentTime.format(format)}
      </span>
    </div>
  );
};

export default RealTimeClock;
