import React, { useContext, useEffect } from 'react';
import { MainContext } from '../../contexts/MainContext';
import { calcSubPrice, calcTotalPrice } from '../../helpers/CalcPrice';
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartData, getCart, changeCountProducts, deleteFromCart, makeOrder } = useContext(MainContext)

    useEffect(() => {
        getCart()
    }, [])
    console.log(cartData)

    function handleChangeCount(e, id) {
        changeCountProducts(e.target.value, id)
    }

    return (
        <div className="cart">
            {cartData  ? (
                <div className="col-sm-11 col-md-8 col-lg-8 col-xl-8">
                    <h3>Your Cart</h3>
                    {cartData.products.map(item => (
                        <div key={item.product.id} className="product-block">
                            <img src={item.product.image}></img>
                            <h5>{item.product.title}</h5>
                            <div className="product__count">
                                <p>Quantity</p>
                                <input onChange={(e) => handleChangeCount(e, item.product.id)} type="number" min = "0" value={item.count} />
                            </div>
                            <div className="product__cost">
                                <p>Subtotal</p>
                                <p className="cost">${calcSubPrice(item)}</p>
                            </div>
                            <button className="ml-5" onClick={() => deleteFromCart(item.product.id)}>Delete</button>
                        </div>
                    ))}
                    <h4>Total: ${calcTotalPrice(cartData.products)}</h4>
                    <Link to="/payment" style={{ color: 'black' }}>
                        <button onClick={makeOrder}>Check out</button>
                    </Link>

                </div>
            ) : (<h1>Loading</h1>)}
        </div>
    );
};

export default Cart;