import React from 'react';
import Header from '../Header/Header';
import Advertise from '../Advertise/Advertise';
import MainCarousel from '../MainCarousel/MainCarousel';
import Products from '../Products/Products';
import Footer from '../Footer/Footer';
import ImageBlocks from '../ImageBlocks/ImageBlocks';
import Sidebar from '../Sidebar/Sidebar';
import NewArrivals from '../NewArrivals/NewArrivals';

const Home = (props) => {
    return (
        <div>
            <Advertise />
            <Header />
            <MainCarousel />
            <ImageBlocks />
            <NewArrivals />
            <div style={{ maxWidth: '1500px' }}>
                <div style={{ display: "flex" }}>
                    <Sidebar {...props} />
                    <Products />
                </div>
                
            </div>
            <Footer />
        </div>
    );
};

export default Home;