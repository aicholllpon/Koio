import React, { useContext, useEffect } from 'react';
import LocalMallTwoToneIcon from '@material-ui/icons/LocalMallTwoTone';
import './Products.css';
import { Grid, IconButton, TextField } from '@material-ui/core';
import GradeTwoToneIcon from '@material-ui/icons/GradeTwoTone';
import { Link } from 'react-router-dom';
import { MainContext } from '../../contexts/MainContext';
import PaginationProducts from '../PaginationProducts/PaginationProducts';

const Products = () => {
    const { products, getProductsData, addAndDeleteProductInCart, checkProductInCart, addAndDeleteProductInFavorite, checkProductInFavorite } = useContext(MainContext);

    useEffect(() => {
        getProductsData()
    }, [])


    return (
        <>
            <div className="container">
                <Grid container spacing={1} alignItems="flex-end">
                    <Grid item>
                    </Grid>

                </Grid>

                <div className="allItems">

                    {products.map(item => (
                        <div className='item-block col-lg-5' key={item.id}>
                            <Link to={`details/${item.id}`}>
                                <img className="image" src={item.image}></img>
                            </Link>

                            <h4 className="title mt-3">{item.title}</h4>
                            <div className="d-flex">
                                <IconButton className='cart mt-4 '>
                                    <LocalMallTwoToneIcon onClick={() => addAndDeleteProductInCart(item)} variant="contained" color={checkProductInCart(item.id) ? "primary" : "default"} />
                                </IconButton>
                                <p className="price">${item.price}</p>
                                <IconButton className='heart mt-4 ' >
                                    <GradeTwoToneIcon style={{ fontSize: '25px' }} onClick={() => addAndDeleteProductInFavorite(item)} variant="contained" color={checkProductInFavorite(item.id) ? "secondary" : "default"} />
                                </IconButton>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <PaginationProducts />
        </>
    );
};

export default Products;