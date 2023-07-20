import React from 'react';
import {  Link } from 'react-router-dom';
import '../CSSComponents/canzas.css';

const OffCanzas = () => {
    return(
        <div className='canzas'>
        <Link to='/news' className='sfab'>Новости</Link>
        <Link to='/katalog'className='sfab'>Каталог</Link>
          <a className='sfab' href='#kontakts'>
            Контакты
            </a>
            <a className='sfab' href='#shops'>
        Магазины
            </a>
        </div>
        
    );
};

export default OffCanzas