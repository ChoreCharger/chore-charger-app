import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


import './User.css';

const User = ({ info }) => {
  const [userName, setUserName] = useState(info.name);
  const [userCredit, setUserCredit] = useState("35.75");

  const findCreditTotal = (chores) => {
    let total = 0
    chores.forEach(chore => total += chore.price)
    setUserCredit(total.toFixed(2))
  }

  useEffect(() => {
    findCreditTotal(info.completedChores)
  })

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
          <Link 
            to="/select" 
            className="user-button"
            >Start New Chore
          </Link>
          <Link 
            to="/complete"
            className="user-button"
            >Completed Chores
          </Link>
          <Link 
            to="/pending"
            className="user-button"
            >Pending Chores
          </Link>
      </div>
    </div>
  );
}

export default User;