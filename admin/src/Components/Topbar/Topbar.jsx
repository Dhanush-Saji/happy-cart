import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import SettingsIcon from "@mui/icons-material/Settings";
import "./Topbar.css";
import logo from '../../Assets/logo.png'
import { useSelector } from 'react-redux';
const Topbar = () => {
  const data = useSelector((store)=>store.authReducer.userData) || []
  return (
    <div className="topbar">
      <div className="topbarLeft">
        <img src={logo} alt="logo" className="logo" />
        {/* <p>Hello, Dhanush</p> */}
      </div>
      <div className="topbarRight">
        <div className="notificationIcon topbarIcon">
          <NotificationsIcon />
          <span className="notificationBadge">2</span>
        </div>
        <div className="languageIcon topbarIcon">
          <GTranslateIcon />
        </div>
        <div className="settingsIcon topbarIcon">
          <SettingsIcon />
        </div>
      <img className="profilePhoto" src={data.length>0 && data[0].avatar?data[0].avatar.url:"https://cdn.pixabay.com/photo/2017/02/04/12/25/man-2037255_960_720.jpg"} alt="profile photo" />
      </div>
    </div>
  );
};

export default Topbar;
