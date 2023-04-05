import React from 'react';
import './order.css'
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const carts = useLoaderData();

    return (
        <div className='shop-container'>
            <div className="products-container">
            <h1>Orders page {carts.length}</h1>
            </div>
            <div className="products-container">
                <Cart cart={carts}></Cart>
            </div>
        </div>
    );
};

export default Orders;