import logo from "./logo.svg";
import "./App.css";
import Topbar from "./Components/Topbar/Topbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserList from "./Pages/UserList/UserList";
import User from "./Pages/User/User";

function App() {
  return (
    <BrowserRouter>
      <div className="bodyParent">
        <Topbar />
        <div className="content">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/:id" element={<User />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
