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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="form-container"
      >
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
          <button className="button-next" type="submit">
            {submitButtonLabel}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormShell;
