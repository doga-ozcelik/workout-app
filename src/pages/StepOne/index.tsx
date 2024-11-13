import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StepOne.css";
import axiosInstance from "../../api/axiosInstance";
import { UserDataContext } from "../../context/UserDataContext";

const StepOne = () => {
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(UserDataContext);
  const [height, setHeight] = useState<number | "">(userData.height || "");
  const [weight, setWeight] = useState<number | "">(userData.weight || "");

  const handleSubmit = async () => {
    if (weight && height) {
      try {
        const ratio = weight / height;
        setUserData((prevData) => ({
          ...prevData,
          weight,
          height,
          ratio,
          selectedWeekdays: [],
        }));

        const response = await axiosInstance.post("/step1", { weight, height });
        console.log(response.data.message);

        navigate("/steptwo");
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Please enter weight and height.");
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <p className="text">
          Let’s hear more about you to prepare your personal workout plan
        </p>
        <div className="input-container">
          <input
            className="input"
            type="number"
            placeholder="Your height"
            value={height || ""}
            onChange={(e) => setHeight(parseFloat(e.target.value))}
          />
          <input
            className="input"
            type="number"
            placeholder="Your weight"
            value={weight || ""}
            onChange={(e) => setWeight(parseFloat(e.target.value))}
          />
        </div>
        <div className="button-container">
          <button className="button-back" disabled>
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

export default StepOne;
