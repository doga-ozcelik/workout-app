import "./StepOne.css";

const StepOne = () => {
  return (
    <div className="container">
      <div className="form-container">
        <p className="text">
          Let’s hear more about you to prepare your personal workout plan
        </p>
        <input type="number" placeholder="Your height" />
        <input type="number" placeholder="Your weight" />
        <div className="button-container">
          <button className="button-back">Back</button>
          <button className="button-next">Next</button>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
