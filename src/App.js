// import logo from './logo.svg';
import './Appa.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

// import About from './components/About';
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
   <>
<Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
<TextForm heading="Enter Text here" mode={mode} toggleMode={toggleMode}/>
{/* <About/> */}
   </>
  );
}

export default App;
