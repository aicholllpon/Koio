import React, { useContext, useEffect } from 'react';
import { MainContext } from '../../contexts/MainContext';
import Spinner from '../Spinner/Spinner';
import './Favorites.css';

const Favorites = () => {
    const { favoriteData, getFavorite, addAndDeleteProductInCart } = useContext(MainContext)

    useEffect(() => {
        getFavorite()
    }, [])


    return (
        <div className="favorite">
            {favoriteData.products ? (
                <div className='block col-sm-11 col-md-8 col-lg-8 col-xl-8'>
                    <h3>Favorites</h3>
                    {favoriteData.products.map(item => (
                        <div className="favorite-block">
                            <div key={item.product.id} className='blocks'>
                                <img src={item.product.image}></img>
                                <h5 className='product-title mt-3 mb-2'>{item.product.title}</h5>
                                <h6 className="price ml-3">{item.product.price} $</h6>
                            </div>
                                <button onClick={() => addAndDeleteProductInCart(item.product)}>ADD TO CART</button>
                        </div>

                    ))}
                </div>
            ) : (<Spinner />)}
        </div>
    );
};

export default Favorites;
