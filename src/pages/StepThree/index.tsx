import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import GoalRadioSelect from "../../components/GoalRadioSelect";
import "./StepThree.css";
import axiosInstance from "../../api/axiosInstance";
import { UserDataContext } from "../../context/UserDataContext";
import { useTranslation } from "react-i18next";

const StepThree = () => {
  const { t } = useTranslation();
  const { userData, setUserData } = useContext(UserDataContext);
  const [goal, setGoal] = useState<string>(userData.goal || "");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      setUserData((prevData) => ({
        ...prevData,
        goal,
      }));

      const response = await axiosInstance.post("/step3", { goal });
      console.log(response.data.message);

      navigate("/stepfour");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <p className="text">{t("stepThreeHeader")}</p>
        <GoalRadioSelect goal={goal} onChange={setGoal} />
        <div className="button-container">
          <button className="button-back" onClick={() => navigate("/steptwo")}>
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

export default StepThree;
