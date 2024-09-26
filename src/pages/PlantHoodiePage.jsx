import React from 'react'
import storeItems from '../data/data.json'
import StoreItem from '../components/StoreItem'

export default function PlantHoodiePage() {
  return (
    <>
      
      <div className="block mb-48">
        <div className='grid grid-cols-2 gap-4 mx-3 xl:grid-cols-4'>{storeItems.map(item => (
          <div>
            <StoreItem{...item} />
          </div>
        ))}
        </div>
      </div>
    </>
  )
}
