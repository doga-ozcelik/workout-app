import { useNavigate } from "react-router-dom";
import "./StepFour.css";

const StepFour = () => {
  const navigate = useNavigate();

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
          <button
            className="button-back"
            onClick={() => navigate("/stepthree")}
          >
            Back
          </button>
          <button className="button-next">Save</button>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
