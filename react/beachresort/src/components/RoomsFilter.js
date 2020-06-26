import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../Context'

import Title from '../components/Title'

const getUnique = (items, value) => {
  return [...new Set(items.map(items => items[value]))]
}

export default function RoomsFilter() {

  const context = useContext(RoomContext)
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    rooms,
    breakfast,
    pets
  } = context

  // get unique type
  let types = getUnique(rooms, 'type')

  // add all
  types = ['all', ...types]

  // map to jsx
  types = types.map((type, idx) => (
    <option key={idx} value={type}>{type}</option>
  ))

  // get unique guests capacity
  let guests = getUnique(rooms, 'capacity')
  guests = guests.map((item, idx) => (
    <option key={idx} value={item}>{item}</option>
  ))

  return (
    <section className='filter-container'>
      <Title title='searcg rooms'/>
      <form className='filter-form'>
        {/* select type */}
          <div className='form-group'>
            <label htmlFor='type'>room type</label>
            <select 
              name='type' 
              id='type' 
              value={type}
              className='form-control'
              onChange={handleChange}
              >
              {types}
            </select>
          </div>
        {/* end select type */}
        {/* select guests */}
          <div className='form-group'>
            <label htmlFor='capacity'>guests</label>
            <select 
              name='capacity' 
              id='capacity' 
              value={capacity}
              className='form-control'
              onChange={handleChange}
              >
              {guests}
            </select>
          </div>
        {/* end select guests */}
        {/* room price */}
          <div className='form-group'>
            <label htmlFor='price'>room price ${price}</label>
            <input 
              type='range' 
              name='price'
              min={minPrice}
              max={maxPrice}
              onChange={handleChange}
              className='form-control'
            />
          </div>
        {/* end room price */}
        {/* size */}
        <div className='form-group'>
          <label htmlFor='size'>room size</label>
          <div className='size-inputs'>
            <input 
            type='number' 
            name='minSize' 
            id='size' 
            onChange={handleChange}
            className='size-input'
            value={minSize}/>
            <input 
              type='number'
              name='maxSize'
              id='size'
              value={maxSize}
              onChange={handleChange}
              className='size-input'
            />
          </div>
        </div>
        {/* end size */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input 
            type="checkbox" 
            name="breakfast"
            id="breakfast"
            checked={breakfast}
            onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input 
            type="checkbox" 
            name="pets"
            id="pets"
            checked={pets}
            onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/* end extras */}
      </form>
    </section>
  )
}
