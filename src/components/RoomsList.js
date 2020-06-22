import React from 'react'
import RoomsRender from './RoomsRender'
const RoomsList = ({rooms}) => {
    if(rooms.length===0){
        return  (
            <div className='empty-search'>
                <h3>unfortunately no rooms matched your search criteria</h3>
            </div>
        )
    }
  return (
    <section className='rooms-list'>
<div className='roomslist-center'>
    {
      rooms.map((item,k)=>{
            return <RoomsRender key={k} room={item}/>
        })
    }
</div>
    </section>
  )

}

export default RoomsList
