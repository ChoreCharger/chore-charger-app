import React, {useState, useEffect} from 'react';
import Button from '@mui/material/Button';


import './User.css';

const User = () => {
  const [userName, setUserName] = useState("User");
  const [userCredit, setUserCredit] = useState("35.75");

  return (
    <div className="User">
      <div className="welcome">
        <h1 className="welcome-text">Welcome, {userName}!</h1>
      </div>
      <div className="welcome">
        <h3>You have earned</h3>
        <h1>${userCredit}</h1>
      </div>
      <div 
        className="button-container">
        <button className="user-button">Start New Chore</button>
        <button className="user-button">Completed Chores</button>
        <button className="user-button">Pending Chores</button>
      </div>
    </div>
  );
}

export default User;