import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StepFour.css";
import axiosInstance from "../../api/axiosInstance";
import { UserDataContext } from "../../context/UserDataContext";

const StepFour = () => {
  const { setUserData } = useContext(UserDataContext);
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (name && surname && email && password) {
      try {
        const response = await axiosInstance.post("/step4", {
          name,
          surname,
          email,
          password,
        });
        console.log(response.data.message);

        alert("User registered successfully");
        setTimeout(() => {
          setUserData({
            weight: 0,
            height: 0,
            ratio: 0,
            selectedWeekdays: [],
            goal: "",
          });
          navigate("/");
        }, 2000);
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Please enter name, surname, email and password.");
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <p className="text">Final step. Complete your registration</p>
        <div className="input-container">
          <input
            className="input"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="input"
            type="text"
            placeholder="Surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          <br />
          <input
            className="input"
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="button-container">
          <button
            className="button-back"
            onClick={() => navigate("/stepthree")}
          >
            Back
          </button>
          <button className="button-next" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
