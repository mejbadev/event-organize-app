import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Speaker.css';
import Rating from 'react-rating';
const Speaker = (props) => {
    console.log(props);
    // const {name, country, picture } = props.speaker;
    const { name, age, country, picture, date, rate, priceOfTicket, subject } = props.speaker;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>

    return (
        <div className='col'>
            <div className='speaker-card '>
                <img src={picture} alt="" />
                <h5 className='text-info'>{name}</h5>
                <p className='text-black'>Age: {age}</p>
                <p className='text-black'>Country: {country}</p>
                <p className='text-black'>Topics: {subject}</p>
                <p className='text-black'>Date: {date}</p>
                <p className='text-black'>Ticket-Price: {priceOfTicket}</p>
                
                <button onClick={() => props.handleAddTicket(props.speaker)} className='btn btn-info'>{cartIcon} Buy Ticket</button>
                <Rating
                initialRating={rate}
                className='icon-color'
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                ></Rating>
               
            </div>


        </div>
    );
};

export default Speaker;