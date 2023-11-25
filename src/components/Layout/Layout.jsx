import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, classes }) => {
    return (
        <div>
            <Header />
            <main className={`mx-auto bg-slate-500 max-w-6xl p-2 pt-28 ${classes}`} style={{ minHeight: 'calc(100vh - 96px)' }}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
