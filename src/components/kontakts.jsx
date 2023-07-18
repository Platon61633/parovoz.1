import insta from '../imagin/cib-instagram.svg'
import whats from '../imagin/cib-whatsapp.svg'
import React from 'react';

const Kontakts = () => {
    return(
        <div id='kontakts'>
        <div className='item'>
            <a className='sfaw' href="https://instagram.com/parovoz_tgn?igshid=NTc4MTIwNjQ2YQ==">
                <img src={insta} alt='insta' width={80}/>
                <span>parovoz_tgn</span>
            </a>
            </div>
            <div className='item'>
                <a  className='sfaw' href="https://wa.me/79897148911">
                <img src={whats} alt='WhatsApp'  width={80}/>
                <span>+7 989 714-89-11</span>
                </a>
            </div>
        </div>
    );
};

export default Kontakts