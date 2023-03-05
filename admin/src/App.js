import logo from "./logo.svg";
import "./App.css";
import Topbar from "./Components/Topbar/Topbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Route, Routes,useLocation  } from "react-router-dom";
import UserList from "./Pages/UserList/UserList";
import User from "./Pages/User/User";
import ProductList from "./Pages/ProductList/ProductList";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import PrivateRoute from "./Pages/Private/PrivateRoute";
import Category from "./Pages/Category/Category";

function App() {
  const location = useLocation();
  const shouldShowTopbarAndSidebar = location.pathname !== '/login' && location.pathname !== '/signup';
  return (
      <div className="bodyParent">
      {shouldShowTopbarAndSidebar && <Topbar />}
        <div className="content">
        {shouldShowTopbarAndSidebar && <Sidebar />}
          <Routes>
            <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/users" element={<PrivateRoute><UserList /></PrivateRoute>} />
            <Route path="/users/:id" element={<PrivateRoute><User /></PrivateRoute>} />
            <Route path="/products" element={<PrivateRoute><ProductList /></PrivateRoute>} />
            <Route path="/category" element={<PrivateRoute><Category /></PrivateRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
