import './App.css';
//configure the routes when given the path in browser which element will render will decide
import {Routes,Route} from 'react-router-dom';
import {Home} from './component/Home'
import {About} from './component/About'
import {NavBar} from './component/NavBar'

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/'element={<Home/>}></Route>
      <Route path='about'element={<About/>}></Route>
    </Routes>
    </>
  );
}

export default App;

//navigate to differnt routes using an element in ui