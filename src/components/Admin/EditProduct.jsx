import React, { useContext, useEffect, useState } from 'react';
import { MainContext } from '../../contexts/MainContext';
import TextField from '@material-ui/core/TextField';
import './EditProduct.css'
import SaveIcon from '@material-ui/icons/Save';

const EditProduct = (props) => {
    const { productToEdit, saveProduct } = useContext(MainContext)
    const [newEditProduct, setNewEditProduct] = useState(productToEdit)

    useEffect(() => {
        setNewEditProduct(productToEdit)
    }, [productToEdit])


    function handleInputsValue(e) {
        let newObj = {
            ...newEditProduct,
            [e.target.name]: e.target.value
        }
        setNewEditProduct(newObj)
    }

    return (
        <>
            {newEditProduct ? (
                <div className='inputs_edit mt-5 mb-2'>
                    <h5 className='mt-5 mb-3 d-flex justify-content-center'>EDIT YOUR PRODUCT</h5>
                    <TextField
                        value={newEditProduct.image}
                        onChange={handleInputsValue}
                        label="Image"
                        type="text"
                        name="image"
                    />
                    <TextField
                        value={newEditProduct.title}
                        onChange={handleInputsValue}
                        type="text"
                        name="title"
                        label="Title"
                    />
                    <TextField
                        value={newEditProduct.description}
                        onChange={handleInputsValue}
                        type="text"
                        name="description"
                        label="Description"
                    />
                    <TextField
                        value={newEditProduct.price}
                        onChange={handleInputsValue}
                        type="text"
                        name="price"
                        label="Price"
                    />
                    <TextField
                        value={newEditProduct.category}
                        onChange={handleInputsValue}
                        type="text"
                        name="category"
                        label="Category"
                    />
                    <button onClick={() => saveProduct(newEditProduct, props.history)} className='btn-save mt-3'>
                        < SaveIcon /> Save
                    </button>
                </div>
            ) : <h1>Loading</h1>}
        </>
    );
};

export default EditProduct; 