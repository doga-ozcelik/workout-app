import { useNavigate } from "react-router-dom";
import GoalRadioSelect from "../../components/GoalRadioSelect";
import "./StepThree.css";

const StepThree = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="form-container">
        <p className="text">What is your fitness goal?</p>
        <GoalRadioSelect />
        <div className="button-container">
          <button className="button-back" onClick={() => navigate("/steptwo")}>
            Back
          </button>
          <button className="button-next" onClick={() => navigate("/stepfour")}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
