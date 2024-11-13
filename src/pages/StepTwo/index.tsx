import { useNavigate } from "react-router-dom";
import WeekdaySelect from "../../components/WeekdaySelect";
import "./StepTwo.css";

const StepTwo = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="form-container">
        <p className="text">Pick your workout days</p>
        <WeekdaySelect disabledDays={["Monday"]} />
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
