import { useState, useEffect, useCallback } from "react";
import { TimezoneType } from "../types/TimezoneType";
import moment from "moment-timezone";

interface UseNotificationAlarmProps {
  alarmTime: string | Date;
  title: string;
  description?: string;
  icon?: string;
  timeZone?: TimezoneType | string;
}

const useNotificationAlarm = ({
  alarmTime,
  title,
  description = "Reminder",
  icon,
  timeZone = moment.tz.guess(),
}: UseNotificationAlarmProps) => {
  const [isAlarmTriggered, setIsAlarmTriggered] = useState(false);
  const [initialRender, setInitialRender] = useState(true);

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

    if (
      currentTime.isSame(targetTime, "second") &&
      !isAlarmTriggered &&
      !initialRender
    ) {
      showNotification();
      setIsAlarmTriggered(true);
    }
  }, [alarmTime, timeZone, showNotification, isAlarmTriggered, initialRender]);

  useEffect(() => {
    if (initialRender) {
      setInitialRender(false);
    }
    const interval = setInterval(checkAlarmTime, 1000);
    return () => clearInterval(interval);
  }, [checkAlarmTime, initialRender]);

  return isAlarmTriggered;
};

export default useNotificationAlarm;
