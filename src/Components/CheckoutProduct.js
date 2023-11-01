import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue()

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }

    return (
        <div className='checkoutProduct'>

            <img src={image} alt="image-checkout" className='checkoutProduct_image' />

            <div className="checkoutProduct_info">
                <p className='checkoutProduct_title'>{title}</p>

                <p className='checkoutProduct_price'>
                    <small>₹ </small>
                    <strong>{price}</strong>
                </p>


                <div className="checkoutProduct_rating">
                    {
                        // just trick to show rating
                        Array(rating)
                            .fill()
                            .map((i) => (
                                <p>⭐</p>
                            ))
                    }
                </div>

                <button
                    className=''
                    onClick={removeFromBasket}
                >
                    Remove from basket
                </button>

            </div>

        </div>
    )
}

export default CheckoutProduct
