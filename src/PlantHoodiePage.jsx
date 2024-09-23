import React from 'react'
import storeItems from './data/data.json'
import StoreItem from './StoreItem'

export default function PlantHoodiePage() {
  return (
    <>
      
      <div class="mb-48 block">
        <div className='mx-3  grid grid-cols-2 xl:grid-cols-4 gap-4'>{storeItems.map(item => (
          <div>
            <StoreItem{...item} />
          </div>
        ))}
        </div>
      </div>
    </>
  )
}
