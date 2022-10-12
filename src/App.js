
import './App.css';
import User from './Components/user'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Next from './Components/nxt';
import Userservice from './Components/userservice';
import Contact from './Components/contact';
import Section1 from './Components/Section1';
// import About from './Components/about';
function App() {
  return (
    <>
    <div className="App">
<Router>
    <Routes>
      <Route path="/" element={<User/>} />

      <Route path="/nxt" element={<Next/>} />
      <Route path="/userservice" element={<Userservice/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/Section1" element={<Section1/>} />
      {/* <Route path="/about" element={<About/>} /> */}
    </Routes>
</Router>   
{/* <div id="loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle className="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="5" stroke="#51be78"/></svg></div> */}
   

    </div>
 
    </>
  );
}

export default App;
