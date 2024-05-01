import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Sidebar from "./components/SideBar/Sidebar";
// import Sidemenu from "./components/Sidemenu";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sidebar />} />
      </Routes>
    </Router>
  );
}

export default App;
