import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import WeekdaySelect from "../../components/WeekdaySelect";
import "./StepTwo.css";
import axiosInstance from "../../api/axiosInstance";

const StepTwo = () => {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const navigate = useNavigate();
  const location = useLocation();
  const { ratio } = location.state as { ratio: number };

  const handleSubmit = async () => {
    try {
      const response = await axiosInstance.post("/step2", { selectedDays });
      console.log(response.data.message);

      navigate("/stepthree");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <p className="text">Pick your workout days</p>
        <WeekdaySelect
          disabledDays={ratio > 0.5 ? ["Tuesday", "Thursday", "Friday"] : []}
          selectedDays={selectedDays}
          onChange={setSelectedDays}
        />
        <div className="button-container">
          <button className="button-back" onClick={() => navigate("/")}>
            Back
          </button>
          <button className="button-next" onClick={handleSubmit}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
