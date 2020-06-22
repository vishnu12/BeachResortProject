import React from 'react'
import RoomsFilter from './RoomsFilter'
import RoomsList from './RoomsList'
import {RoomConsumer} from '../context'
import Loading from './Loading'
const RoomsContainer = () => {
  return (
      
      <RoomConsumer>
          {value=>{
              const {values}=value;
              const [tempValue]=values;
              const {loading,sortedRooms,rooms}=tempValue;
              if(loading){
                  return <Loading />
              }
              return (<>
              <RoomsFilter rooms={rooms}/>
              <RoomsList rooms={sortedRooms}/>
            </>)
          }}
      </RoomConsumer>
    

    
  )
}

export default RoomsContainer;