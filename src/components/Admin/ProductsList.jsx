import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MainContext } from '../../contexts/MainContext';
import Button from '@material-ui/core/Button';
import DeleteSweepTwoToneIcon from '@material-ui/icons/DeleteSweepTwoTone';
import EditTwoToneIcon from '@material-ui/icons/EditTwoTone';
import './ProductsList.css';

const ProductsList = () => {
    const { getProductsData, products, deleteProduct, editProduct } = useContext(MainContext);

    useEffect(() => {
        getProductsData()
    }, [])

    return (
        <div>
            {products.map(item => (
                <div className="admin-list col-lg-12 mb-5 mt-5">
                    <ul className="list-block col-lg-12" key={item.id}>
                        <img src={item.image}></img>
                        <li>Title: {item.title}</li>
                        <li>Price: ${item.price}</li>
                        <Button
                            variant="contained"
                            color="secondary"
                            className='delete mt-2'
                            startIcon={<DeleteSweepTwoToneIcon />}
                            onClick={() => deleteProduct(item.id)}
                        >
                            Delete
                        </Button>

                        <Link to="/edit" style={{ textDecoration: 'none' }}>
                            <Button
                                variant="contained"
                                color="primary"
                                className='edit mt-2'
                                startIcon={<EditTwoToneIcon  />}
                                onClick={() => editProduct(item.id)}
                            >
                                Edit
                        </Button>
                        </Link>
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default ProductsList;
