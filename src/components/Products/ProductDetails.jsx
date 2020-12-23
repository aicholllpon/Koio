import React, { useContext, useEffect, useState } from 'react';
import { MainContext } from '../../contexts/MainContext';
import './ProductDetails.css';
import Spinner from '../Spinner/Spinner';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import FaceTwoToneIcon from '@material-ui/icons/FaceTwoTone';

const ProductDetails = (props) => {
    const {
        getProductsDetails,
        productDetails,
        addComments,
        addAndDeleteProductInCart
    } = useContext(MainContext)

    const [comment, setComment] = useState({
        nickname: "",
        text: "",
    })

    function handleInputsValue(e) {
        let obj = {
            ...comment,
            [e.target.name]: e.target.value,

        }
        setComment(obj)
    }

    function handleClick() {
        let obj = { ...productDetails }
        obj.comments.push(comment)
        addComments(obj)
        const newObj = {
            nickname: "",
            text: "",
        }
        setComment(newObj)
    }



    useEffect(() => {
        getProductsDetails(props.match.params.id)
    }, [])

    return (
        <div>
            <Header />
            <div className="container details-block">
                {productDetails ? (
                    <div>
                        <div className="single-item col-lg-6">
                            <div className="left-set">
                                <img className="image" src={productDetails.image} />
                            </div>
                            <div className="right-set ml-5">
                                <div className="title">{productDetails.title}</div>
                                <div className="brand">{productDetails.brand}</div>
                                <div className="price">${productDetails.price}</div>
                                <div className="cart-block">
                                    <button onClick={() => addAndDeleteProductInCart(productDetails)}>ADD TO CART</button>
                                </div>
                            </div>
                        </div>
                        <div className="description-block">
                            <h5>Description</h5>
                            <div className="description">
                                <p>{productDetails.description}</p>
                            </div>
                            <div className="comments-block">
                                <h5>Give feedback</h5>
                                <input
                                    name="nickname"
                                    onChange={handleInputsValue}
                                    type="text"
                                    placeholder="Name"
                                    value={comment.nickname}

                                />
                                <textarea
                                    className="area"
                                    name="text"
                                    onChange={handleInputsValue}
                                    type="text"
                                    placeholder="Comment"
                                    value={comment.text}
                                >
                                </textarea>

                                <button className='btn-comment' onClick={handleClick}>Send</button>
                                <div className="comments__list">
                                    {productDetails.comments.map(item => (
                                        <div key={item.id} className="comments-list-block col-10">
                                            <div className="user__icon">
                                                <FaceTwoToneIcon style={{fontSize: "40px"}}/>
                                            </div>
                                            <div className="comment__item">
                                                <li>{item.nickname}</li>
                                                <li>{item.text}</li>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (<Spinner />
                    )}
            </div>
            <Footer />
        </div>
    );
};

export default ProductDetails;