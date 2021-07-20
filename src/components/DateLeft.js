import React, { useEffect, useState } from "react";

export default function DateLeft(props) {
  const [days, setDays] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);

  const [totalDays, setTotalDays] = useState(0);
  const [totalMonths, setTotalMonths] = useState(0);

  var min_days = 180;
  var exp_mod = 1;
  var lin_mod = 1;

  if (props.isRestricted) {
    var min_days = 0;
    var exp_mod = 0.35;
    var lin_mod = 0.75;
  }

  useEffect(() => {
    var playCount = parseInt(props.playCount)

    // days
    var totalDays = parseInt(
      min_days + 
      1580 * (1 - Math.exp(playCount * exp_mod * -1 / 5900)) +
      (playCount * lin_mod * 8 / 5900)
    );
    setTotalDays(totalDays)

    var years = Math.floor(totalDays / 365);
    setYear(years);

    var months = Math.floor(
      (totalDays - (years * 365)) /
      (365 / 12) // months
    );
    setMonth(months)
    setTotalMonths(Math.floor(totalDays / (365 / 12)))

    var days = Math.floor(
      totalDays -
      // year days/     // month days //////
      ((years * 365) + (months * (365 / 12)))
    );
    setDays(days)

  }, [props])

  return (
    <div className="User mt-auto">
      <div className="rounded mb-4 w-full h-16 bg-black-700 flex justify-center items-center">
        <div id="day_count" className="mx-2">
          <p className="text-xs font-medium text-blue-light">Days</p>
          <p className="text-xl font-medium">{totalDays}</p>
        </div>
        <div id="month_count" className="mx-2">
          <p className="text-xs font-medium text-blue-light">Months</p>
          <p className="text-xl font-medium">{totalMonths}</p>
        </div>
      </div>

      <div id="available After">
        <h1 className="text-blue-light font-medium" >Available after</h1>
        <p>{year} year, {month} month, {days} days</p>
      </div>
    </div>
  )
}
