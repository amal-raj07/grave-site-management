import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/landing-page/home";
import SectionForm from "./components/landing-page/form";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="form" element={<SectionForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
