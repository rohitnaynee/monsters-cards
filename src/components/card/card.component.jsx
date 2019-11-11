import React from 'react';

import './card.styles.css'; 

export const Card = props => (
    <div className = 'card-container'>
    <img
     alt= 'monster'  
     src = {`https://robohash.org/${props.monster.id}?set=set3?size= 50*50.png`} />
      <h2> {props.monster.name} </h2>
    </div>
);

