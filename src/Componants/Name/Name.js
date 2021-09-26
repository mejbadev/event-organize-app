import React from 'react';
import './Name.css';
const Name = (props) => {
    
    const {name}=props;
    return (
        <div className='name-show'>
            <p>{name}</p>
        </div>
    );
};

export default Name;