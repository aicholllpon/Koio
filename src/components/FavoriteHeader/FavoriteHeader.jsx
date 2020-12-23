import React from 'react';
import Header from '../Header/Header';
import Favorites from '../Favorites/Favorites';
import Footer from '../Footer/Footer';

const FavoriteHeader = () => {
    return (
        <div>
            <Header />
            <Favorites />
            <Footer />
        </div>
    );
};

export default FavoriteHeader;