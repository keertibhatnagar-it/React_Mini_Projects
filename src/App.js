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
      setMode('dark')
    }else{
      setMode('light')
    }
  }
  return (
   <>
<Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
<TextForm heading="Enter Text here"/>
{/* <About/> */}
   </>
  );
}

export default App;
