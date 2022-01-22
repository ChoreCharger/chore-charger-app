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

const App = () => {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/select" element={<SelectChore/>} />
        <Route path="/complete" element={<ViewComplete/>} />
        <Route path="/pending" element={<ViewPending/>} />
        <Route path="/" exact element={<User/>}/>
      </Routes>
    </div>
  );
}

export default App;
