import React, { useState } from "react";
import "./WeekdaySelect.css";

interface WeekdaySelectProps {}

const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const WeekdaySelect: React.FC<WeekdaySelectProps> = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleCheckboxChange = (day: string, isChecked: boolean) => {
    let updatedSelectedDays = [...selected];

    if (isChecked) {
      updatedSelectedDays = updatedSelectedDays.filter((d) => d !== day);
    } else {
      updatedSelectedDays.push(day);
    }

    setSelected(updatedSelectedDays);
  };

  return (
    <div className="select-container">
      {weekdays.map((day, index) => (
        <div
          key={day}
          className="select-item"
          onClick={() => handleCheckboxChange(day, selected.includes(day))}
          style={{
            borderBottom:
              index !== weekdays.length - 1 ? "1px solid #9B9BEB" : "none",
          }}
        >
          <label className="select-label">{day}</label>
          <input
            type="checkbox"
            name={day}
            //Add empty onChange function to avoid warning
            onChange={() => {}}
            checked={selected.includes(day)}
          />
        </div>
      ))}
    </div>
  );
};

export default WeekdaySelect;
