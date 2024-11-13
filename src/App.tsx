import { Route, Routes } from "react-router-dom";
import "./App.css";
import StepFour from "./pages/StepFour";
import StepOne from "./pages/StepOne";
import StepTwo from "./pages/StepTwo";
import StepThree from "./pages/StepThree";

function App() {
  return (
    <Routes>
      <Route path="/" element={<StepOne />} />
      <Route path="/steptwo" element={<StepTwo />} />
      <Route path="/stepthree" element={<StepThree />} />
      <Route path="/stepfour" element={<StepFour />} />
    </Routes>
  );
}

export default App;
