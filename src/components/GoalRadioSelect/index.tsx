import React, { useState } from "react";
import "./GoalRadioSelect.css";
import FlameIcon from "../icons/FlameIcon";
import LevelIcon from "../icons/LevelIcon";
import SmileIcon from "../icons/SmileIcon";
import RadioButton from "../RadioButton";
import { useTranslation } from "react-i18next";

interface GoalRadioSelectProps {
  goal?: string;
  onChange?: (goal: string) => void;
}

const goals = [
  { icon: <FlameIcon />, key: "lose_weight" },
  { icon: <LevelIcon />, key: "build_muscle" },
  { icon: <SmileIcon />, key: "stay_healthy" },
];

const GoalRadioSelect: React.FC<GoalRadioSelectProps> = ({
  goal = "",
  onChange,
}) => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<string>(goal);

  const handleRadioChange = (selectedGoal: string) => {
    setSelected(selectedGoal);
    if (onChange) {
      onChange(selectedGoal);
    }
  };

  return (
    <div className="ratio-container">
      {goals.map((goal, index) => (
        <div
          key={index}
          className="ratio-item"
          onClick={() => handleRadioChange(goal.key)}
          style={{
            borderBottom:
              index !== goals.length - 1 ? "1px solid #9B9BEB" : "none",
          }}
        >
          <label className="ratio-label">
            {goal.icon}
            {t(`goals.${goal.key}`)}
          </label>
          <RadioButton checked={selected === goal.key} />
        </div>
      ))}
    </div>
  );
};

export default GoalRadioSelect;
