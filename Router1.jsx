
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Menu from './Menu';
import Women from './Women';
// import Courosel1 from './Courosel1';
import Main1 from './Main1';


const Router1 = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/main1" element={<Main1/>}/>
       <Route path="/home" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/Menu" element={<Menu/>}/>
       <Route path="/Women" element={<Women/>}/>
       
      </Routes>
      </BrowserRouter>
     
    </div>
  )
}

export default Router1;