// import logo from './logo.svg';
import './Appa.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

// import About from './components/About';
function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>
    {
      setAlert(null);
    },1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled", "success");
      setInterval(()=>{
        document.title='TextUtils- Bluish mode Enabled'
      },1500);
      setInterval(()=>{
        document.title='TextUtils- Home'
      },2000);
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success");
    }
   
  }
  const greenMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#174B45';
      showAlert("Green mode has been enabled", "success");
      setInterval(()=>{
        document.title='TextUtils- Greenish mode Enabled'
      },1500);
      setInterval(()=>{
        document.title='TextUtils- Home'
      },2000);
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success");
    }
    
  }
  return (
   <>
<Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} greenMode={greenMode}/>
<Alert alert={alert}/>
<TextForm heading="Enter Text here" showAlert={showAlert} mode={mode}/>
{/* <About/> */}
   </>
  );
}

export default App;
