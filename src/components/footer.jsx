import React from 'react';
import '../CSSComponents/footer.css'
import Kontakts from './kontakts';
import Shops from './shops';

const Footer = () => {
    return(
        <footer>
            <Kontakts/>
            <Shops/>
        </footer>
    );
};

export default Footer