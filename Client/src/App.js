import React, { createContext, useReducer} from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Formbuilder from "./components/Formbuilder/Formbuilder";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Logout from "./components/Logout/Logout";
import Errorpage from "./components/Errorpage/Errorpage";
import {initialState, reducer } from "../src/reducer/UseReducer";

export const UserContext = createContext();

const Routing = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/formbuilder" element={<Formbuilder />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<Errorpage />} />
    </Routes>
  )
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value = {{state, dispatch}}>
        <Navbar />
        <Routing />
      </UserContext.Provider>
    </>
  )
}
export default App
