import React, { useState } from "react";
import "./WeekdaySelect.css";
import CheckIcon from "../icons/CheckIcon";

interface WeekdaySelectProps {
  disabledDays?: string[];
  selectedDays?: string[];
  onChange?: (selectedDays: string[]) => void;
}

const weekdays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const WeekdaySelect: React.FC<WeekdaySelectProps> = ({
  disabledDays = [],
  selectedDays = [],
  onChange,
}) => {
  const [selected, setSelected] = useState<string[]>(selectedDays);

  const handleCheckboxChange = (day: string, isChecked: boolean) => {
    let updatedSelectedDays = [...selected];

    if (isChecked) {
      updatedSelectedDays = updatedSelectedDays.filter((d) => d !== day);
    } else {
      updatedSelectedDays.push(day);
    }

    setSelected(updatedSelectedDays);
    if (onChange) {
      onChange(updatedSelectedDays);
    }
  };

  return (
    <div className="select-container">
      {weekdays.map((day, index) => {
        const isDisabled = disabledDays.includes(day);

        return (
          <div
            key={day}
            className={`select-item ${isDisabled ? "disabled" : ""}`}
            onClick={() => {
              if (!isDisabled) {
                handleCheckboxChange(day, selected.includes(day));
              }
            }}
            style={{
              borderBottom:
                index !== weekdays.length - 1 ? "1px solid #9B9BEB" : "none",
            }}
          >
            <label>{day}</label>
            {selected.includes(day) && !isDisabled && (
              <CheckIcon color="#5453E3" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default WeekdaySelect;
