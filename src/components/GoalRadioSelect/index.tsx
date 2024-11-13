import React, { useState } from "react";
import "./GoalRadioSelect.css";
import FlameIcon from "../icons/FlameIcon";
import LevelIcon from "../icons/LevelIcon";
import SmileIcon from "../icons/SmileIcon";
import RadioButton from "../RadioButton";

interface GoalRadioSelectProps {
  disabledDays?: string[];
}

const goals = [
  { icon: <FlameIcon />, name: "Lose weight" },
  { icon: <LevelIcon />, name: "Build muscle" },
  { icon: <SmileIcon />, name: "Stay healthy" },
];

const GoalRadioSelect: React.FC<GoalRadioSelectProps> = () => {
  const [selected, setSelected] = useState<string>("");

  return (
    <div className="ratio-container">
      {goals.map((goal, index) => (
        <div
          key={goal.name}
          className="ratio-item"
          onClick={() => setSelected(goal.name)}
          style={{
            borderBottom:
              index !== goals.length - 1 ? "1px solid #9B9BEB" : "none",
          }}
        >
          <label className="ratio-label">
            {goal.icon}
            {goal.name}
          </label>
          <RadioButton checked={selected === goal.name} />
        </div>
      ))}
    </div>
  );
};

export default GoalRadioSelect;
