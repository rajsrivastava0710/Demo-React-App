import React from 'react';

import './card.style.css';

export const Card = (props) => {
    return <div className='card-container'>
        <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2&size=175x175`}/>
        <h1>
            {props.monster.name}
        </h1>
        <h3>
            {props.monster.email}
        </h3>
        </div>
}