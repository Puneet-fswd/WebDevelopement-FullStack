import './App.css'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, {useState} from 'react';
import Alerts from './components/Alerts';


function App() 
{
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>
  {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>
    {
      setAlert(null);
    }, 1500);
  } 
  let toggleMode = () =>
  {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert('Dark mode enabled', 'Success');
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enabled', 'Success');
    }
  }
  return ( 
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}></Navbar>
    <Alerts alert={alert}></Alerts>
      <div className="container my-3">
        <TextForm heading="Enter text to convert" mode={mode} showAlert={showAlert}></TextForm>
      </div>
      <About mode={mode}></About>
    </>
  );
}

export default App;
