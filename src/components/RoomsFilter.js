import React,{useContext} from 'react'
import {RoomContext} from '../context'
import Title from '../components/Title'

//get unique values
const getUnique=(items,value)=>{
  return [...new Set(items.map(item=>item[value]))]
}

const RoomsFilter = ({rooms}) => {
const value=useContext(RoomContext);
const [tempVal]=value.values;
const {handleChange}=value;
const {type,capacity,price,minPrice,maxPrice,minSize,maxSize,maxPrize,breakfast,pets}=tempVal;
console.log(breakfast)
 let types=getUnique(rooms,'type');
 types=['all',...types]; 
 const typesOption=types.map((item,k)=>{
 return <option value={item} key={k}>{item}</option>
 }) 
 
 let people=getUnique(rooms,'capacity');
 people=people.map((item,k)=>{
   return <option key={k} value={item}>{item}</option>
 })

  return (
   <section className='filter-container'>
   <Title title='search rooms'/>
   <form className='filter-form'>
       {/*select type*/}
    <div className='form-group'>
        <label htmlFor='type'>
            room type
        </label>
        <select name='type' id='type' value={type}
        className='form-control' onChange={handleChange}>
       {typesOption}
        </select>
    </div>



       {/*end of select type*/}
       {/*guest */}
       <div className='form-group'>
        <label htmlFor='capacity'>
            guests
        </label>
        <select name='capacity' id='capacity' value={capacity}
        className='form-control' onChange={handleChange}>
       {people}
        </select>
    </div>
     {/*guest end*/}
     {/*room price */}
     <div className='form-group'>
        <label htmlFor='price'>
            room price ${price}
        </label>
        <input type='range' name='price' min={minPrice}
         max={maxPrice} id='price' value={price} onChange={handleChange} className="form-control"/>
    </div>
     {/*room price end */}

     {/*room size */}
     <div className='form-group'>
        <label htmlFor='size'>
            room size
        </label>
        <div className="size-inputs">
          <input type='number' name='minSize' id='size' value={minSize} 
          onChange={handleChange} className="size-input"/>
        
          <input type='number' name='maxSize' id='size' value={maxSize} 
          onChange={handleChange} className="size-input"/>
        </div>
        
    </div>
     {/*room size end */}

  

   </form>
   </section>
  )
}

export default RoomsFilter
