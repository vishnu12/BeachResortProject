import React,{createContext,useState,useEffect} from 'react'
import items from './data'
const RoomContext=createContext();

const RoomProvider = (props) => {

    const[values,setValues]=useState({
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true,
        type:'all',
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false
        
    })

    useEffect(()=>{
        let rooms=formatData(items);
        console.log(rooms);
        let featuredRooms=rooms.filter(room=>room.featured===true);
        let maxPrice=Math.max(...rooms.map(item=>item.price))
        let maxSize=Math.max(...rooms.map(item=>item.size))
        setValues({
            ...values,
            rooms:rooms,
            featuredRooms:featuredRooms,
            sortedRooms:rooms,
            loading:false,
            maxPrice:maxPrice,
            maxSize:maxSize

            
        })

    },[])

    const normData=()=>{
      let rooms=formatData(items);
        console.log(rooms);
        let featuredRooms=rooms.filter(room=>room.featured===true);
        let maxPrice=Math.max(...rooms.map(item=>item.price))
        let maxSize=Math.max(...rooms.map(item=>item.size))
        setValues({
            ...values,
            rooms:rooms,
            featuredRooms:featuredRooms,
            sortedRooms:rooms,
            loading:false,
            maxPrice:maxPrice,
            maxSize:maxSize

            
        })
    }

  const formatData=(item)=>{
      let tempItems=item.map(itm=>{
          let id=itm.sys.id;
          let images=itm.fields.images.map(img=>{
             return img.fields.file.url
          });
          let room={...itm.fields,images,id};

         return room;

      })
      return tempItems;
  }  

const handleChange=e=>{
  const target=e.target;
  const value=target.type==='checkbox'?target.checked:target.value;
  const name=target.name;
  setValues(
    {
      ...values,
      [name]:value
      
    }
  )
  
}

useEffect(()=>{
  roomsFilter();
  
},[values.type,values.capacity,values.price,values.minSize,values.maxSize,values.breakfast,values.pets])

const roomsFilter=()=>{
  let {rooms,type,capacity,price,minSize,maxSize,breakfast,pets}=values;
  //all thr rooms
  let tempRooms=[...rooms];

  //transform values
  capacity=parseInt(capacity);
  price=parseInt(price);
  
  //filter by type
  if(type !=='all'){
    tempRooms=tempRooms.filter(room=>room.type===type)
    setValues({
      ...values,
      sortedRooms:tempRooms
    })
  }    
    //filter by capacity
  if(capacity !==1){
      tempRooms=tempRooms.filter(room=>room.capacity>=capacity)
      setValues({
        ...values,
        sortedRooms:tempRooms
      })
    }
    //filter by price
    if(price !==0){
      tempRooms=tempRooms.filter(room=>room.price<=price)
      setValues({
        ...values,
        sortedRooms:tempRooms
      })
    }

    //filter by size
    if(minSize ===0 && maxSize ===1000){
      tempRooms=tempRooms.filter(room=>room.size>=minSize
      && room.size<=maxSize)

      setValues({
       ...values,
       sortedRooms:tempRooms
     })
   }
   /*if(breakfast){
   tempRooms=tempRooms.filter(room=>room.breakfast===true)
   }
   if(pets){
    tempRooms=tempRooms.filter(room=>room.pets===true)
    }*/
   else{
    
      normData();
    }
    
  }
  

   
  return (
    <RoomContext.Provider value={
      
    {values:[values],
    handleChange
    
    }
     
    }
        
    >
        {props.children}
    </RoomContext.Provider>
  )
}

const RoomConsumer=RoomContext.Consumer;
export {RoomProvider,RoomConsumer,RoomContext}
