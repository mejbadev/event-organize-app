import React from 'react';
import Name from '../Name/Name';
import './Cart.css';

const Cart = (props) => {
    let total =0;
    let count=0;
    let names=[];
    for(const c of props.cart){
        total = total+c.priceOfTicket;
        count=count+1;
        names.push(c.name);
    }
    
    return (
        <div className='cart-design'>
            <h4>Place Your Order</h4>
            <hr />
            <p>Total Ticket: {count}</p>
            <p>Total Price: {total}</p>
            <p>Your selected speaker</p>
            <hr />
            {
               names.map(name=><Name key={props.cart.id} name={name}></Name>)
            }
        </div>
    );
};

export default Cart;