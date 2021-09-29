// import logo from './logo.svg';
import './Appa.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
function App() {
  return (
   <>
<Navbar title="TextUtils" aboutText="About Us" />
<TextForm heading="Enter Text here"/>
{/* <About/> */}
   </>
  );
}

export default App;
