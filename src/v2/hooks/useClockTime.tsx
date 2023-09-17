import { useEffect, useState } from "react";

function useClockTime(startAt?: Date) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(
      () =>
        setTime((t) => {
          const newDate = new Date(t);
          newDate.setTime(newDate.getTime() + 1000);
          return newDate;
        }),
      1000
    );

    return () => clearInterval(interval);
  }, []);

  useEffect(() => setTime(startAt ?? new Date()), [startAt]);

  return time;
}

export default useClockTime;