import React from "react";
import "./User.css";
import Button from "@mui/material/Button";
const User = () => {
  return (
    <div className="user">
      <div className="editUserDiv">
        <h2>Edit User</h2>
        <Button variant="contained">Edit</Button>
      </div>
      <div className="userContentParent">
        <div className="userDetails">
          
        </div>
      </div>
    </div>
  );
};

export default User;
