import GoalRadioSelect from "../../components/GoalRadioSelect";
import "./StepThree.css";

const StepThree = () => {
  return (
    <div className="container">
      <div className="form-container">
        <p className="text">What is your fitness goal?</p>
        <GoalRadioSelect />
        <div className="button-container">
          <button className="button-back">Back</button>
          <button className="button-next">Next</button>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
