import WeekdaySelect from "../../components/WeekdaySelect";
import "./StepTwo.css";

const StepTwo = () => {
  return (
    <div className="container">
      <div className="form-container">
        <p className="text">Pick your workout days</p>
        <WeekdaySelect disabledDays={["Monday"]} />
        <div className="button-container">
          <button className="button-back">Back</button>
          <button className="button-next">Next</button>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
