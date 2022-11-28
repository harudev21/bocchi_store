import React, { Component } from 'react';
import Header from './aside/Header';
import Footer from './aside/Footer';
import popular_style from './styles/useful.module.css';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
            
                <main>
                    <h1 className={popular_style.text_center} style={{ 'marginTop': '100px', 'fontSize': '70px' }}>404</h1>
                    <p className={popular_style.text_center} style={{ 'fontSize': '20px' }}>Can't find your searching page !</p>
                </main>

                <Footer />
            </React.Fragment>
        );
    }
}

export default Home;