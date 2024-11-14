import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StepOne.css";
import axiosInstance from "../../api/axiosInstance";
import { UserDataContext } from "../../context/UserDataContext";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "../../i18n";

const StepOne = () => {
  const { t } = useTranslation();
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
      alert(t("stepOneError"));
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <p className="text">{t("stepOneHeader")}</p>
        <button onClick={() => changeLanguage("en")}>English</button>
        <button onClick={() => changeLanguage("ar")}>العربية</button>
        <div className="input-container">
          <input
            className="input"
            type="number"
            placeholder={t("height")}
            value={height || ""}
            onChange={(e) => setHeight(parseFloat(e.target.value))}
          />
          <input
            className="input"
            type="number"
            placeholder={t("weight")}
            value={weight || ""}
            onChange={(e) => setWeight(parseFloat(e.target.value))}
          />
        </div>
        <div className="button-container">
          <button className="button-back" disabled>
            {t("back")}
          </button>
          <button className="button-next" onClick={handleSubmit}>
            {t("next")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
