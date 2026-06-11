import { useEffect, useState } from "react";

function Timer({ endTime }) {
  let difference;

  function calcTimeLeft() {
    difference = new Date(endTime) - new Date();
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  const [timeLeft, setTimeLeft] = useState(calcTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calcTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  if (difference <= 0)
    return <span className="text-error">تخفیف به پایان رسید!</span>;

  return (
    <>
      <div className="flex flex-col 2xs:flex-row items-center justify-between bg-paper 2xs:p-3 p-2 sm:w-80 2xs:w-auto w-11/12 gap-x-4 gap-y-3 rounded border border-brdr-clr">
        <h3 className="2xs:text-base text-sm font-semibold text-error ">
          تا پایان تخفیف:
        </h3>
        <div className="flex space-x-4 text-center text-primary child:font-semibold child:font-heading child:sm:text-xl child:2xs:text-base child:text-sm">
          <div>
            <span className="block">
              {`${timeLeft.seconds}`.padStart(2, 0)}
            </span>
            <span className="sm:text-sm text-xs text-muted ">ثانیه</span>
          </div>
          <div>
            <span className="block">
              {`${timeLeft.minutes}`.padStart(2, 0)}
            </span>
            <span className="sm:text-sm text-xs text-muted ">دقیقه</span>
          </div>
          <div>
            <span className="block">{`${timeLeft.hours}`.padStart(2, 0)}</span>
            <span className="sm:text-sm text-xs text-muted ">ساعت</span>
          </div>
          <div>
            <span className="block">{`${timeLeft.days}`.padStart(2, 0)}</span>
            <span className="sm:text-sm text-xs text-muted ">روز</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timer;
