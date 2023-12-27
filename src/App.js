import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import ListStudents from "./components/ListStudents";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listStudents" element={<ListStudents />} />
        <Route path="/listOfStudents" element={<ListStudents />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
