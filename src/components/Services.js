import React,{useState} from 'react'
import Title from '../components/Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
const Services = () => {
    const [services,setServices]=useState([{
        icon:<FaCocktail/>,
        title:"free-cocktiles",
        info:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it"
    },
    {
        
            icon:<FaHiking/>,
            title:"free-hikings",
            info:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it"
        
    },
    {
        icon:<FaShuttleVan/>,
        title:"free-shuttle",
        info:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it"
    },
    {
        icon:<FaBeer/>,
        title:"free-beer",
        info:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it"
    }
    
    ])
  return (
    <section className='services'>
  <Title title='services'/>
     <div className="services-center">
         {
     services.map((item,key)=>{
         return <article key={key} className="service">
<span>{item.icon}</span>
     <h6>{item.title}</h6>
     <p>{item.info}</p>
         </article>
     })
         }
     </div>
    </section>
  )
}

export default Services
