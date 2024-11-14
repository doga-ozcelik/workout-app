import React from "react";
import "./FormShell.css";
import { useTranslation } from "react-i18next";

interface FormShellProps {
  title: string;
  handleSubmit: () => void;
  children: React.ReactNode;
  isBackDisabled?: boolean;
  submitButtonLabel?: string;
  handleBackNav?: () => void;
}

const FormShell: React.FC<FormShellProps> = ({
  title,
  handleSubmit,
  children,
  isBackDisabled = false,
  submitButtonLabel = "Next",
  handleBackNav,
}) => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="form-container">
        <p className="text">{title}</p>
        {children}
        <div className="button-container">
          <button
            className="button-back"
            disabled={isBackDisabled}
            onClick={handleBackNav}
          >
            {t("back")}
          </button>
          <button className="button-next" onClick={handleSubmit}>
            {submitButtonLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormShell;
