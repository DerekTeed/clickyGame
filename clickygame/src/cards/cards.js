import React from 'react';
import './cards.css';
import Characters from '../characters';

// main cards for each Character component
// loops through each index in props.characters, which contains an array of character images
// to create a new Character component for each image
// attaches the passed down clickEvent function to each Character component
const Cards = props => (
  // looping through
  <div
    className={
      props.shake
        ? 'cards d-flex flex-wrap justify-content-center shake'
        : 'cards d-flex flex-wrap justify-content-center'
    }
  >
    {props.characters.map((a, i) => <Characters name={a} key={i} clickEvent={props.clickEvent} />)}
  </div>
);

export default Cards;