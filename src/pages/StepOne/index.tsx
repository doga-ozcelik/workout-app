import { useNavigate } from "react-router-dom";
import "./StepOne.css";

const StepOne = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="form-container">
        <p className="text">
          Let’s hear more about you to prepare your personal workout plan
        </p>
        <div className="input-container">
          <input className="input" type="number" placeholder="Your height" />
          <input className="input" type="number" placeholder="Your weight" />
        </div>
        <div className="button-container">
          <button className="button-back" disabled>
            Back
          </button>
          <button className="button-next" onClick={() => navigate("/steptwo")}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
