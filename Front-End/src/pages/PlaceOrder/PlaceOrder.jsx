import React, { useContext, useEffect, useState } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
    const { getTotalCartAmount, token, food_list, cartItem, url } = useContext(StoreContext);

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: ""
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(prevData => ({ ...prevData, [name]: value }));
    };

    const placeOrder = async (event) => {
        event.preventDefault();

        // Create order items array safely
        const orderItems = food_list
            .filter(item => cartItem[item._id] > 0)
            .map(item => {
                return {
                    ...item, // Use the spread operator to avoid mutation
                    quantity: cartItem[item._id]
                };
            });

        const orderData = {
            address: data,
            items: orderItems,
            amount: getTotalCartAmount() + 20 // Assuming a flat $20 delivery fee
        };

        try {
            const response = await axios.post(`${url}/api/order/place`, orderData, { headers: { token } });
            if (response.data.success) {
                const { session_url } = response.data;
                window.location.replace(session_url);
            } else {
                alert("Error processing the order.");
            }
        } catch (error) {
            console.error("Error placing the order:", error);
            alert("There was an error placing your order. Please try again.");
        }
    };

    // Cache total amount calculation
    const totalAmount = getTotalCartAmount();
    const deliveryFee = totalAmount === 0 ? 0 : 20;

    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/cart')
        } else if (getTotalCartAmount() === 0) {
            navigate("/cart")
        }
    }, [token])

    return (
        <form className="place-order" onSubmit={placeOrder}>
            <div className="place-order-left">
                <p className="title">Delivery Information</p>
                <div className="multi-fields">
                    <input required type="text" name='firstName' onChange={onChangeHandler} value={data.firstName} placeholder='First Name' />
                    <input required type="text" name='lastName' onChange={onChangeHandler} value={data.lastName} placeholder='Last Name' />
                </div>
                <input required type="text" placeholder='Email Address' name='email' onChange={onChangeHandler} value={data.email} />
                <input required type="text" placeholder='Street' name='street' onChange={onChangeHandler} value={data.street} />
                <div className="multi-fields">
                    <input required type="text" placeholder='City' name='city' onChange={onChangeHandler} value={data.city} />
                    <input required type="text" placeholder='State' name='state' onChange={onChangeHandler} value={data.state} />
                </div>
                <div className="multi-fields">
                    <input required type="text" placeholder='Zip code' name='zipcode' onChange={onChangeHandler} value={data.zipcode} />
                    <input required type="text" placeholder='Country' name='country' onChange={onChangeHandler} value={data.country} />
                </div>
                <input required type="number" placeholder='Phone' name='phone' onChange={onChangeHandler} value={data.phone} />
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>{totalAmount}</p>
                        </div>
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>{deliveryFee}</p>
                        </div>
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>{totalAmount + deliveryFee}</b>
                        </div>
                    </div>
                    <button type='submit'>PROCEED TO Payment</button>
                </div>
            </div>
        </form>
    );
};

export default PlaceOrder;
