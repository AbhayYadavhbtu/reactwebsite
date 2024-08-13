import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Alert from './components/Alert';
import React, { useState } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes,Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) => {
    setAlert({
        msg :message,
        type :type
      }
    );
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggle = ()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor='grey';
      showAlert("Dark Mode Activated","dark");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Activated","primary");
    }
  }
  return (
    
     <>
      <BrowserRouter>
        <Navbar title="Abhay" mode={mode} toggle={toggle}/>
        <Alert alert={alert} />
       
          <Routes>
            <Route exact path="/about" element={<Form mode={mode}/>}></Route>
            <Route exact path="/"
              element={
                <div className="container "><h1>Hello World</h1> </div>
              }
            ></Route>
            <Route exact path="/title"
              element={
                <div className="container "><h1>Hello Abhay</h1> </div>
              }
            ></Route>
          </Routes>
        
      </BrowserRouter>
     
     
      
      
     </>
    
  );
}

export default App;
