import React from 'react';
import popular_style from '../styles/useful.module.css';
import footer_style from '../styles/footer.module.css';

function Footer(params) {
    return (
        <footer className={params.fixed !== undefined ? footer_style.fixed : null}>
            <p className={popular_style.text_center} style={{ 'margin': '0' }}>&copy; Copyright by harudev.</p>
        </footer>
    );
}

export default Footer;