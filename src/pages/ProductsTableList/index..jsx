import React from 'react';
import ProductsList from '../../components/ProductsList';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../router/paths';

const ProductsTableList = () => {

    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate(PATHS.PRODUCT.CRAETE)
    }

    return (
        <div>
        <p>Products Table !!</p>    
        <button onClick={handleOnClick}>Create Product</button>
        <ProductsList />
        </div>
    );
}

export default ProductsTableList;
