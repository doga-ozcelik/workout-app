import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StepOne.css";
import axiosInstance from "../../api/axiosInstance";
import { UserDataContext } from "../../context/UserDataContext";
import { useTranslation } from "react-i18next";
import FormShell from "../../components/FormShell";
import { NavigationContext } from "../../context/NavigationContext";

const StepOne = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(UserDataContext);
  const { setDirection } = useContext(NavigationContext);
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

        setDirection("next");
        navigate("/steptwo");
      } catch (error) {
        console.error(error);
      }
    } else {
      alert(t("stepOneError"));
    }
  };

  return (
    <FormShell
      title={t("stepOneHeader")}
      handleSubmit={handleSubmit}
      isBackDisabled
    >
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
    </FormShell>
  );
};

export default StepOne;
