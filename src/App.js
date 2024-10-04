import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import APITRY from './comb/apitry';
import LOgin from './comb/login';


function App() {
  return(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<LOgin/>}/>
    <Route path='/create' element={<APITRY/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App;
