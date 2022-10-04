import React, { useEffect, useState } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(() => setDate(new Date()));
    };
  }, [date]);

  return <h2>Mon heure est : {date.toLocaleTimeString()}</h2>;
}

export default Clock;
