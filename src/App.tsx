import { Route, Routes } from "react-router-dom";
import "./App.css";
import StepFour from "./pages/StepFour";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";
import { UserDataProvider } from "./context/UserDataContext";
import ChooseLanguage from "./pages/ChooseLanguage";
import { NavigationProvider } from "./context/NavigationContext";
import TransitionWrapper from "./components/TransitionWrapper";

function App() {
  return (
    <UserDataProvider>
      <NavigationProvider>
        <TransitionWrapper>
          <Routes>
            <Route path="/" element={<StepOne />} />
            <Route path="/steptwo" element={<StepTwo />} />
            <Route path="/stepthree" element={<StepThree />} />
            <Route path="/stepfour" element={<StepFour />} />
            <Route path="/chooselanguage" element={<ChooseLanguage />} />
          </Routes>
        </TransitionWrapper>
      </NavigationProvider>
    </UserDataProvider>
  );
}

export default App;
