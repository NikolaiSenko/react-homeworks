import "./styles.css";
import { useState, useEffect } from "react";
const TimePicker = () => {
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  useEffect(() => {
    if (hours < 0) {
      setHours(23);
    } else if (hours === 24) {
      setHours(0);
    } else if (minutes === 60) {
      setHours(hours + 1);
      setMinutes(0);
    } else if (minutes < 0) {
      setMinutes(59);
      setHours(hours - 1);
    }
  }, [hours, minutes]);
  const onMinusHours = () => setHours(hours - 1);
  const onPlusHours = () => setHours(hours + 1);
  const onMinusMinutes = () => setMinutes(minutes - 1);
  const onPlusMinutes = () => setMinutes(minutes + 1);
  const onReset = () => {
    setHours(0)
    setMinutes(0)
  };

  return (
    <div className="wrapper">
      <div className="time">
        {hours}:{minutes}
      </div>
      <div className="buttons">
        <button className="btn" onClick={onMinusHours}>➖</button>
        <button className="btn" onClick={onPlusHours}>➕</button>
        <button className="btn" onClick={onMinusMinutes}>➖</button>
        <button className="btn" onClick={onPlusMinutes}>➕</button>
      </div>
      <button className="btn btn-reset" onClick={onReset}>RESET</button>
    </div>
  );
};

export default TimePicker;
