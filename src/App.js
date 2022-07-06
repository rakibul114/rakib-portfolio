import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import SideNav from './components/SideNav/SideNav';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className='flex bg-black'>
      <SideNav/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='skills' element={<Skills/>} />
      </Routes>
    </div>
  );
}

export default App;
