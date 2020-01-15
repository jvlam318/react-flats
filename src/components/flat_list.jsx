import React, { Component } from 'react';
import Flat from './flat.jsx';

const FlatList = (props) => {
  return (
    <div className="flat-list">
      {props.flats.map(flat => <Flat name={flat.name} price={flat.price} currency={flat.priceCurrency} key={flat.name} imageUrl={flat.imageUrl} />)}
    </div>
  );
};

export default FlatList;
// id = { gif.id } key = { gif.id } selectGif = { props.selectGif }
