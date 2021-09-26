import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Speaker from '../Speaker/Speaker';
import './EventM.css';

const EventM = () => {

    const [speakers, setSpeakers] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('./eventData.JSON')
        .then(response=>response.json())
        .then(data=>setSpeakers(data));
    },[]);
    const handleAddTicket = (e) =>{
        const newCart = [...cart, e];
        setCart(newCart);
        //console.log(newCart);


    }
    return (
        <div className='container'>
            <div className='event-container'>
                <div className='speaker-container row'>
                    {
                        speakers.map(speaker => <Speaker key={speaker.id} speaker={speaker} handleAddTicket ={handleAddTicket}></Speaker>)
                        
                    }

                </div>
                <div className='ticket-information'>
                    <Cart cart={cart}></Cart>
                </div>

            </div>
        </div>
    );
};

export default EventM; 