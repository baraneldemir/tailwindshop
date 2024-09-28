// PlantHoodiePage.js
import React from 'react';
import storeItems from '../data/data.json';
import StoreItem from '../components/StoreItem';

export default function PlantHoodiePage() {
  return (
    <div>
      <h1 className="ml-4 text-2xl text-black ">Our Products</h1>
    <div className="block mb-48">
      
      <div className="grid grid-cols-2 gap-4 mx-3 xl:grid-cols-4">
        {storeItems.map((item, index) => (
          <StoreItem key={index} {...item} />
        ))}
      </div>
    </div>
    </div>
  );
}
