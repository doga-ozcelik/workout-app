import "./StepFour.css";

const StepFour = () => {
  return (
    <div className="container">
      <div className="form-container">
        <p className="text">Final step. Complete your registration</p>
        <div className="input-container">
          <input className="input" type="text" placeholder="Name" />
          <input className="input" type="text" placeholder="Surname" />
          <br />
          <input className="input" type="text" placeholder="E-mail" />
          <input className="input" type="password" placeholder="Password" />
        </div>
        <div className="button-container">
          <button className="button-back">Back</button>
          <button className="button-next">Next</button>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
