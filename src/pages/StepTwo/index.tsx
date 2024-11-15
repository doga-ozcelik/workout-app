import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import WeekdaySelect from "../../components/WeekdaySelect";
import axiosInstance from "../../api/axiosInstance";
import { UserDataContext } from "../../context/UserDataContext";
import { useTranslation } from "react-i18next";
import FormShell from "../../components/FormShell";
import { NavigationContext } from "../../context/NavigationContext";

const StepTwo = () => {
  const { t } = useTranslation();
  const { userData, setUserData } = useContext(UserDataContext);
  const { setDirection } = useContext(NavigationContext);
  const [selectedDays, setSelectedDays] = useState<string[]>(
    userData.selectedWeekdays || []
  );
  const navigate = useNavigate();
  console.log("userData", userData);

  const handleSubmit = async () => {
    try {
      setUserData((prevData) => ({
        ...prevData,
        selectedWeekdays: selectedDays,
      }));

      const response = await axiosInstance.post("/step2", { selectedDays });
      console.log(response.data.message);

      setDirection("next");
      navigate("/stepthree");
    } catch (error) {
      console.error(error);
    }
  };

  const handleBack = () => {
    setDirection("back");
    navigate("/");
  };

  return (
    <FormShell
      title={t("stepTwoHeader")}
      handleSubmit={handleSubmit}
      handleBackNav={handleBack}
    >
      <WeekdaySelect
        disabledDays={
          (userData.ratio ?? 0) > 0.5 ? ["Tuesday", "Thursday", "Friday"] : []
        }
        selectedDays={selectedDays}
        onChange={setSelectedDays}
      />
    </FormShell>
  );
};

export default StepTwo;
