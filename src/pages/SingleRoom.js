import React,{useContext,useState,useEffect} from 'react'
import defImg from '../images/room-1.jpeg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link, useParams} from 'react-router-dom'
import {RoomContext} from '../context'
import StyledHero from '../components/StyledHero'
const SingleRoom = (props) => {
const[param,setParam]=useState(props.match.params.slug)
const {values}=useContext(RoomContext);
const [tempValue]=values;
const { rooms }=tempValue;

let tempRoom=rooms.find(room=>room.slug===param)

 if(!tempRoom){
   return (

  <div className="error">
    <h3>no such room exist</h3>
    <Link to='/rooms' className="btn-primary">
       Back to rooms
    </Link>
  </div>


   )
 }
const {name,description,capacity,size,price,extras,breakfast,pets,images}=tempRoom;
const [mainImg,...defaultImg]=images;
console.log(defaultImg)
 return(
   <React.Fragment>
  <StyledHero img={mainImg || defImg}>
    <Banner title={`${name} room`}>
      <Link to='/rooms' className='btn-primary'>
        back to rooms
      </Link>
    </Banner>
  </StyledHero>
 <section className="single-room">
<div className='single-room-images'>
  {
    defaultImg.map((itm,k)=>{
      return  <img src={itm} alt={itm.name} key={k}/>
    })
  }
</div>
<div className="single-room-info">
  <article className='desc'>
<h3>Details</h3>
<p>{description}</p>
  </article>
  <article className='info'>
    <h3>info</h3>
<h6>price : ${price}</h6>
<h6>size : {size} SQFT</h6>
<h6>
  max capacity :{
    capacity>1?`${capacity} people` :`${capacity} person`
  }
</h6>
<h6>{
  pets?"pets are allowed":"pets not allowed"
  }
  </h6>
<h6>{breakfast && "free breakfast included"}</h6>
  </article>
</div>
 </section>
 <section className='room-extras'>
   <h6>extras</h6>
   <ul className='extras'>
     {
       extras.map((item,k)=>{
       return <li>- {item}</li>
       })
     }
   </ul>
 </section>

  </React.Fragment>
 )
 
}

export default SingleRoom
