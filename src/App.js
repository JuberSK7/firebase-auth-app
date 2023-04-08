import React from "react";
import SignIn from "./component/auth/SignIn";
import SignUp from "./component/auth/SignUp";
import UserTable from "./component/table/Table";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/table" element={<UserTable />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
