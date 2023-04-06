import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart , faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import './reviewitem.css'

const ReviewItem = ({product, handleRemoveFromCart}) => {
    const {id , img, price, name, quantity} = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <h5>{name}</h5>
                <p>price: <span className='orange-text'>${price}</span></p>
                <p>Order Quantity: <span className='orange-text'>${quantity}</span></p>
                
            </div>
            <button onClick={()=>handleRemoveFromCart(id)} className='btn-delete'>
                <FontAwesomeIcon className='font-icon' icon={faTrashAlt} />
            </button>
        </div>
    );
};

export default ReviewItem;