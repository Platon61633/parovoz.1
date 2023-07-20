import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import logo from '../imagin/icon-par-NsIKEuFGm-transformed (1).png';
import '../CSSComponents/navbar.css';
import '../CSS/Wide_Latin/stylesheet.css';
import '../CSS/reset.css';
import OffCanzas from './offcanzas';
import News from './news';
import Katalog from './katalog';
import Undefind from './undefind';
import menu from '../imagin/cil-menu.svg';
import { useState } from 'react';
import OnCanzas from './oncanzas';

function NavBar() {

  const [VisibCanzas, SetVisibCanzas] = useState(true);

  const canzas = () => {
    if (VisibCanzas) {
      SetVisibCanzas(false)
    }
    else{
      SetVisibCanzas(true)
    }
  }
  
  return (
      <BrowserRouter>
      <div className='panel'>
      <div>
        <img src={logo} alt='LOGO' className='logo'/>
        <strong style={{fontFamily:"Wide Latin"}}>ParoVoz</strong>
        </div>
        <OffCanzas canzas={canzas}/>
        <button onClick={canzas} className='menu'><img alt='MENU' src={menu}/></button>
        </div>
        {VisibCanzas
        ?<span></span>
        :<OnCanzas canzas={canzas}/>
        }
        <Routes>
          <Route path='/' element={<Navigate replace to='/news'/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/katalog' element={<Katalog/>}/>
          <Route path='/undefind' element={<Undefind/>}/>
          <Route path='*' element={<Navigate replace to='/undefind'/>}/>
        </Routes>
        </BrowserRouter>
  );
}

export default NavBar;
