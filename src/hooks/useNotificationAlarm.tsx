import { useState, useEffect, useCallback } from "react";
import { UseNotificationAlarmProps } from "../types/Types";
import { INDIAN_STANDARD_TIMEZONE } from "../constants/Constants";
import moment from "moment-timezone";
import useTimeElapsed from "./useTimeElapsed";

const useNotificationAlarm = ({
  alarmTime,
  title,
  description = "Reminder",
  icon,
  timeZone = moment.tz.guess(),
}: UseNotificationAlarmProps) => {
  const [isAlarmTriggered, setIsAlarmTriggered] = useState(false);
  const [timeStatus, setTimeStatus] = useState<string>("");
  const [initialRender, setInitialRender] = useState(true);

  const elapsedTime = useTimeElapsed({
    targetDate: alarmTime,
    timeZone: INDIAN_STANDARD_TIMEZONE,
    countingConditions: { startCondition: true, stopCondition: false },
  });

  const showNotification = useCallback(() => {
    if (Notification.permission === "granted") {
      new Notification(title, {
        body: description,
        icon: icon,
      });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, {
            body: description,
            icon: icon,
          });
        }
      });
    }
  }, [title, description, icon]);

  const checkAlarmTime = useCallback(() => {
    const currentTime = moment.tz(timeZone);
    const targetTime = moment.tz(alarmTime, timeZone);
    const diffDuration = moment.duration(targetTime.diff(currentTime));

    if (diffDuration.asSeconds() > 0) {
      const hours = Math.floor(diffDuration.asHours());
      const minutes = Math.floor(diffDuration.minutes());
      const seconds = Math.floor(diffDuration.seconds());
      setTimeStatus(`Upcoming alert in ${hours}h ${minutes}m ${seconds}s`);
    } else {
      setTimeStatus(`Last alert was shown ${elapsedTime} ago`);
    }

    if (
      currentTime.isSame(targetTime, "second") &&
      !isAlarmTriggered &&
      !initialRender
    ) {
      showNotification();
      setIsAlarmTriggered(true);
    }
  }, [
    alarmTime,
    timeZone,
    showNotification,
    isAlarmTriggered,
    initialRender,
    elapsedTime,
  ]);

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
      return;
    }

    const intervalId = setInterval(checkAlarmTime, 1000);

    return () => clearInterval(intervalId);
  }, [checkAlarmTime, initialRender]);

  return { isAlarmTriggered, timeStatus };
};

export default useNotificationAlarm;
