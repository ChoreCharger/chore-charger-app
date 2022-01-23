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

const App = () => {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route 
          path="/select" 
          element={ <SelectChore chores={possibleChores} />}
        />
        <Route path="/complete" element={<ViewComplete/>} />
        <Route path="/pending" element={<ViewPending/>} />
        <Route path="/" exact element={<User/>}/>
      </Routes>
    </div>
  );
}

export default App;
