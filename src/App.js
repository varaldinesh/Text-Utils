import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import About from "./component/About";
import React, { useState } from "react";
import BackgroundDark from "./images/dark.jpg"
import BackgroundLight from "./images/day.jpg"
import Alert from "./component/Alert";
import {
  BrowserRouter, Routes, Route,

} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    })

    setTimeout(() => {
      setAlert(null)

    }, 1500);

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundImage = `url(${BackgroundDark})`;
      showAlert("Dark Mode Enabled", 'success')
    }
    else {
      setMode('light');
      document.body.style.backgroundImage = `url(${BackgroundLight})`;
      showAlert("Light Mode Enabled", 'success')
    }
  }
  return (

    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<div className="container my-5">
            <TextForm showAlert={showAlert} heading="Enter Your Text Below" mode={mode} />
          </div>} />
          <Route path="about" element={<About mode={mode} />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
