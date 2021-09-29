// import logo from './logo.svg';
import './Appa.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import { Alert } from './components/Alert';

// import About from './components/About';
function App() {
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  }
  const [mode, setMode] = useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled", "success");
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
   <>
<Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<TextForm heading="Enter Text here" mode={mode} toggleMode={toggleMode}/>
{/* <About/> */}
   </>
  );
}

export default App;
