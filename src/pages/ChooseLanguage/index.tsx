import { changeLanguage } from "../../i18n";

const ChooseLanguage = () => {
  return (
    <div className="container">
      <div>
        <button className="button-next" onClick={() => changeLanguage("en")}>
          English
        </button>
        <button className="button-next" onClick={() => changeLanguage("ar")}>
          العربية
        </button>
      </div>
    </div>
  );
};

export default ChooseLanguage;
