import React,{useContext} from 'react'
import {RoomConsumer,RoomContext} from '../context'
import Loading from './Loading'
import RoomsRender from './RoomsRender'
import Title from './Title'
 const FeaturedRooms = () => {
 const {values}=useContext(RoomContext);
 const [value]=values;
 let {loading,featuredRooms:rooms}=value;
 let roomsTemp=rooms.map(room=>{
     return <RoomsRender key={room.id} room={room} />
 })
 
  return (
     <section className="featured-rooms">
      <Title title="featured rooms"/>
      <div className="featured-rooms-center">
          {loading?<Loading />:roomsTemp}
      </div>

     </section>
  )
}
export default FeaturedRooms
