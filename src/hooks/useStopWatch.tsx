import { useState, useRef, useCallback } from "react";

const useStopWatch = () => {
  const [elapsedTime, setElapsedTime] = useState<number>(0); 
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  
  const start = useCallback(() => {
    if (!isRunning) {
      setIsRunning(true);
      const startTime = Date.now() - elapsedTime * 1000; 

      intervalRef.current = setInterval(() => {
        setElapsedTime((Date.now() - startTime) / 1000); 
      }, 1000);
    }
  }, [isRunning, elapsedTime]);

  
  const stop = useCallback(() => {
    if (isRunning) {
      setIsRunning(false);
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
  }, [isRunning]);

  
  const reset = useCallback(() => {
    stop(); 
    setElapsedTime(0); 
  }, [stop]);

  return {
    elapsedTime,
    isRunning,
    start,
    stop,
    reset,
  };
};

export default useStopWatch;
