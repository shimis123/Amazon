import React from 'react'
import { useStateValue } from './StateProvider';
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct"
import SubCountTotal from './SubCountTotal';



function Checkout() {

    const [{ basket }, dispatch] = useStateValue()

    return (
        <div className='checkout'>
            <div className="checkout_left">

                <img className='checkout_ad' src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/GiftCards/LPAIndia/Header/170_AP_1500x300.jpg" alt="checkout-image" />


                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket is empty</h2>
                        <p>You have no items in your basket. To buy one or more items, click "Add to basket" below the item. </p>
                    </div>
                ) : (
                    <div>
                        <h2 className='checkout_title'>Your Shopping List</h2>

                        {/* list of all checkout components */}

                        {
                            basket?.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))
                        }
                    </div>
                )}
            </div>

            {
                basket.length > 0 && (
                    <div className="checkout_right">
                        <SubCountTotal />
                    </div>
                )
            }

        </div>
    )
}

export default Checkout
