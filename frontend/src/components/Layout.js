
import React from 'react';
import Header from './Header';
import Aside from './Aside';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div>
            
            <Aside />
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    );
}

export default Layout;
