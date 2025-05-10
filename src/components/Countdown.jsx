import { useEffect, useState } from "react";

const Countdown = () => {
  const target = new Date("2025-06-05").getTime();
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = target - now;
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center mt-6 text-xl text-gray-800">
      <p>Conference starts in:</p>
      <div className="flex justify-center gap-4 mt-2 text-lg">
        {Object.entries(timeLeft).map(([key, val]) => (
          <div key={key} className="bg-blue-100 p-2 rounded-md w-20">
            <div className="font-bold">{val}</div>
            <div className="text-xs uppercase">{key}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
