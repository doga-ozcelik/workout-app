import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import GoalRadioSelect from "../../components/GoalRadioSelect";
import axiosInstance from "../../api/axiosInstance";
import { UserDataContext } from "../../context/UserDataContext";
import { useTranslation } from "react-i18next";
import FormShell from "../../components/FormShell";

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
    <FormShell
      title={t("stepThreeHeader")}
      handleSubmit={handleSubmit}
      handleBackNav={() => navigate("/steptwo")}
    >
      <GoalRadioSelect goal={goal} onChange={setGoal} />
    </FormShell>
  );
};

export default StepThree;
