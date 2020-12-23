import React, { useContext, useState } from 'react';
import { MainContext } from '../../contexts/MainContext';
import './Admin.css';
import PlusOutlined from '@ant-design/icons';
import AddCircleTwoToneIcon from '@material-ui/icons/AddCircleTwoTone';
import Button from '@material-ui/core/Button';

const Admin = () => {
    const { addNewProduct } = useContext(MainContext);
    const [product, setProduct] = useState({
        image: "",
        title: "",
        description: "",
        price: "",
        category: "",
    })

    function handleInputsValue(e) {
        let obj = {
            ...product,
            [e.target.name]: e.target.value
        }
        setProduct(obj)
    }

    function handleClick() {
        if (
            !product.image.trim() ||
            !product.title.trim() ||
            !product.description.trim() ||
            !product.price.trim() ||
            !product.category.trim()){
            alert('Заполните поля')
            return
        }
        addNewProduct(product)
        const newObj = {
            image: '',
            title: '',
            description: '',
            price: '',
            category: '',
        }
        setProduct(newObj)
    }

    return (
        <div className="background">
            <div className="addProduct col-lg-4 mt-5">
                <div className="inputs">
                    <PlusOutlined />
                    <h3>Add product</h3>
                    <input
                        name="image"
                        onChange={handleInputsValue}
                        placeholder="Image"
                        value={product.image}
                    />
                    <input
                        name="title"
                        onChange={handleInputsValue}
                        type="text"
                        placeholder="Title"
                        value={product.title}
                    />
                    <input
                        name="description"
                        onChange={handleInputsValue}
                        type="text"
                        placeholder="Description"
                        value={product.description}
                    />
                    <input
                        name="price"
                        onChange={handleInputsValue}
                        type="text"
                        placeholder="Price"
                        value={product.price}
                    />

                    <select onChange={handleInputsValue} name="category" className="mt-3" value={product.category}>
                        <option selected></option>
                        <option>Man</option>
                        <option>Woman</option>
                    </select>

                    <Button
                                variant="contained"
                                color="primary"
                                className='btn-admin mb-3'
                                startIcon={<AddCircleTwoToneIcon />}
                                onClick={handleClick}
                            >
                                Add
                        </Button>
                </div>
            </div>
        </div>
    );
};

export default Admin;