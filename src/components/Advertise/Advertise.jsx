import React from 'react';
import { Carousel } from 'antd';

const Advertise = () => {
    const contentStyle = {
        fontFamily: '"MaisonNeue-Book",Helvetica,Arial,sans-serif',
        height: '35px',
        color: '#000000',
        textAlign: 'center',
        background: '#f6e5d1',
        fontSize: '.875rem',
        letterSpacing: '.2px',
        lineHeight: '20px',
        padding: '8px 60px',
        width: '100%',
        marginBottom: '0' 
    };

    return (
        <div>
            <Carousel dots={false} autoplay>
                <div>
                    <h3 style={contentStyle}>Enjoy up to $150 off with code HOLIDAY until 12/7</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>Shop with free shipping on orders over $500</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>Sell Watches and Jewelry For More | Earn up to $500</h3>
                </div>
            </Carousel>

        </div>
    );
};

export default Advertise;