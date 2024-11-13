import React, { useState } from "react";
import "./GoalRadioSelect.css";

interface GoalRadioSelectProps {
  disabledDays?: string[];
}

const goals = ["Lose weight", "Build muscle", "Stay healthy"];

const GoalRadioSelect: React.FC<GoalRadioSelectProps> = () => {
  const [selected, setSelected] = useState<string>("");

  return (
    <div className="ratio-container">
      {goals.map((goal, index) => (
        <div
          key={goal}
          className="ratio-item"
          onClick={() => setSelected(goal)}
          style={{
            borderBottom:
              index !== goals.length - 1 ? "1px solid #9B9BEB" : "none",
          }}
        >
          <label>{goal}</label>
          <input type="radio" checked={selected === goal} onChange={() => {}} />
        </div>
      ))}
    </div>
  );
};

export default GoalRadioSelect;
