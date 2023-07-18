import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom';
import News from './news';
import logo from '../imagin/icon-par-NsIKEuFGm-transformed (1).png';
import './CSSComponents/navbar.css';
import '../CSS/Wide_Latin/stylesheet.css'
import '../CSS/reset.css'
import Katalog from './katalog';
import Undefind from './undefind';
import { HashLink } from 'react-router-hash-link';

function NavBar() {

  
  return (
      <BrowserRouter>
        <div className='panel'>
        <div>
        <img src={logo} className='logo'/>
        <strong style={{fontFamily:"Wide Latin"}}>ParoVoz</strong>
        </div>
        <Link to='/news' className='sfab'>Новости</Link>
        <Link to='/katalog'className='sfab'>Каталог</Link>
        <span>
          <a className='sfab' href='#kontakts'>
            Контакты
            </a>
            </span>
        <span><a className='sfab' href='#shops'>
        Магазины
            </a></span>
        </div>
        <Routes>
          <Route path='/' element={<Navigate replace to='/news'/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/katalog' element={<Katalog/>}/>
          <Route path='/undefind' element={<Undefind/>}/>
          <Route path='/*' element={<Navigate replace to='/undefind'/>}/>
        </Routes>
        </BrowserRouter>
  );
}

export default NavBar;
