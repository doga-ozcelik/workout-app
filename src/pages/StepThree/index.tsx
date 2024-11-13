import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoalRadioSelect from "../../components/GoalRadioSelect";
import "./StepThree.css";
import axiosInstance from "../../api/axiosInstance";

const StepThree = () => {
  const [goal, setGoal] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await axiosInstance.post("/step3", { goal });
      console.log(response.data.message);

      navigate("/stepfour");
    } catch (error) {
      console.error("Error in Step 3:", error);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <p className="text">What is your fitness goal?</p>
        <GoalRadioSelect goal={goal} onChange={setGoal} />
        <div className="button-container">
          <button className="button-back" onClick={() => navigate("/steptwo")}>
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

export default StepThree;
