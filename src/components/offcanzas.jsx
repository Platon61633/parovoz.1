import React from 'react';
import {  Link } from 'react-router-dom';
import './CSSComponents/navbar.css';

const OffCanzas = () => {
    return(
        <div className='canzas'>
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
        
    );
};

export default OffCanzas