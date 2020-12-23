import React from 'react';
import { Carousel } from 'antd';
import './MainCarousel.css';

const MainCarousel = () => {
    const contentStyle = {


    };

    return (
        <div className="carousel" >
            <Carousel dots={false} autoplay>
                <div className="carousel__image1">
                    <img style={contentStyle} src="https://cdn.shopify.com/s/files/1/0646/1285/files/Holiday_Campaign-Desktop_HP_Banner--Womens_169e8d62-f9e7-4e26-bb4e-11193413a3b7_1600x.jpg?v=1607102832" alt="" />
                </div>
                <div className="carousel__image2">
                    <img style={contentStyle} src="https://cdn.shopify.com/s/files/1/0646/1285/files/Holiday_Campaign-Desktop_HP_Banner--Mens_2ef51038-2417-45c1-9f14-791477b884d9_1600x.jpg?v=1607106905" alt="" />
                </div>
                <div className="carousel__image3">
                    <img style={contentStyle} src="https://i.insider.com/5c747dd8598e23691965f992?width=1100&format=jpeg&auto=webp" alt="" />
                </div>
            </Carousel>,

        </div>
    );
};

export default MainCarousel;