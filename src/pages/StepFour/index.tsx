import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StepFour.css";
import axiosInstance from "../../api/axiosInstance";
import { UserDataContext } from "../../context/UserDataContext";
import { useTranslation } from "react-i18next";
import FormShell from "../../components/FormShell";
import { NavigationContext } from "../../context/NavigationContext";

const StepFour = () => {
  const { t } = useTranslation();
  const { setUserData } = useContext(UserDataContext);
  const { setDirection } = useContext(NavigationContext);
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

        alert(t("stepFourSuccess"));
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
      alert(t("stepFourError"));
    }
  };

  const handleBack = () => {
    setDirection("back");
    navigate("/stepthree");
  };

  return (
    <FormShell
      title={t("stepFourHeader")}
      handleSubmit={handleSubmit}
      submitButtonLabel={t("save")}
      handleBackNav={handleBack}
    >
      <div className="input-container">
        <input
          className="input"
          type="text"
          placeholder={t("name")}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="input"
          type="text"
          placeholder={t("surname")}
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        <br />
        <input
          className="input"
          type="text"
          placeholder={t("email")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="input"
          type="password"
          placeholder={t("password")}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </FormShell>
  );
};

export default StepFour;
