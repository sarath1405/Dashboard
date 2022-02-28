import Space from "./components/Space";
import Header from "./components/Header";
import New from "./components/New";
import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";
import Delete from "./components/Delete";
import Box1 from "./components/Box1";
import { Navigate } from "react-router-dom";
import { useState } from 'react';

import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';

function App() {
  const [data, setData] = useState('')
  return (
    <div className="App">
      <Router>
        <Sidebar/>
        <Header search={data => setData(data)}/>
        <div className="container">
        <Routes>
          <Route path="/" element={<Navigate from='/' to='/home' />}></Route>
          <Route path="/home" element={<Space searchData={data}/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/new" element={<New/>}></Route>
          <Route path="/delete" element={<Delete/>}></Route>
          <Route path="/item" element={<Box1/>}></Route>
        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
