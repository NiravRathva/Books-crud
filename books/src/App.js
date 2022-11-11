import './App.css';
import '../src/style.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import Add from "./Pages/Add"
import Update from "./Pages/Update"

function App() {
  return (
    <>
      <div className='container'>

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/update/:id" element={<Update />} />
          </Routes>
        </Router>

      </div>

    </>
  );
}

export default App;
