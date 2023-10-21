import "./App.css";
import { Routes, Route } from "react-router-dom";
import ListStudents from "./components/ListStudents";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
//import { Register } from './components/Register';

function App() {
  return (
    <div className="App">
      <>
         <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/listStudents" exact element={<ListStudents/>}/>
          <Route path="/register student" element={<Home/>}/>
          <Route path="/studentDetails" element={<ListStudents/>}/>
        </Routes> 
        

      </>
    </div>
  );
}
export default App;
