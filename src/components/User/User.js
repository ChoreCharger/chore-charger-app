import React, {useState, useEffect} from 'react';
import Stack from '@mui/material/Stack';
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
      <Stack 
        spacing={2} 
        direction="column"
        justifyContent="center"
        alignItems="center">
        <Button variant="contained">Start New Chore</Button>
        <Button variant="contained">Completed Chores</Button>
        <Button variant="contained">Pending Chores</Button>
      </Stack>
    </div>
  );
}

export default User;