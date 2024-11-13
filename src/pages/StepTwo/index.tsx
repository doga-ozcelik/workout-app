import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import WeekdaySelect from "../../components/WeekdaySelect";
import "./StepTwo.css";

const StepTwo = () => {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { ratio } = location.state as { ratio: number };
  const disabledDays = ratio > 0.5 ? ["Tuesday", "Thursday", "Friday"] : [];

  return (
    <div className="container">
      <div className="form-container">
        <p className="text">Pick your workout days</p>
        <WeekdaySelect
          disabledDays={disabledDays}
          selectedDays={selectedDays}
          onChange={setSelectedDays}
        />
        <div className="button-container">
          <button className="button-back" onClick={() => navigate("/")}>
            Back
          </button>
          <button
            className="button-next"
            onClick={() => navigate("/stepthree")}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
