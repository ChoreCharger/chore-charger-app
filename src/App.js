import './App.css';

import {
  Routes,
  Route,
} from "react-router-dom";

import Nav from './components/Nav/Nav'
import User from './components/User/User'
import SelectChore from './components/SelectChore/SelectChore'
import ViewComplete from './components/ViewComplete/ViewComplete';
import ViewPending from './components/ViewPending/ViewPending';
import { useState } from 'react';

const possibleChores = [
  {id: 1,
  title: "Collect Trash",
  price: 1.50},
  {id: 2,
  title: "Feed the Dogs",
  price: 1},
  {id: 3,
  title: "Walk the Dogs",
  price: 1},
  {id: 4,
  title: "Fold Laundry",
  price: 2},
  {id: 5,
  title: "Clean Bathroom",
  price: 2},
]

const pendingChores = []

const newUser = {
  name: "Dingus",
  completedChores: [
    {id: 1,
    title: "Collect Trash",
    price: 1.50},
    {id: 2,
    title: "Feed the Dogs",
    price: 1},
    {id: 3,
    title: "Walk the Dogs",
    price: 1},
    {id: 4,
    title: "Feed the Dogs",
    price: 1},
    {id: 5,
    title: "Walk the Dogs",
    price: 1},
  ],
}

const App = () => {
  const [pending, setPending] = useState([]);
  const [possible, setPossible] = useState(possibleChores)
  const [user, setUser] = useState(newUser)

  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route 
          path="/select" 
          element={<SelectChore chores={possible} />}
        />
        <Route 
          path="/complete" 
          element={<ViewComplete completed={user.completedChores}/>} 
        />
        <Route path="/pending" element={<ViewPending pendingChores={pending} />} />
        <Route 
          path="/" exact 
          element={<User info={user} />}
        />
      </Routes>
    </div>
  );
}

export default App;
