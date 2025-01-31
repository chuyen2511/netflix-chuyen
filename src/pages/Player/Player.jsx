import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { NavLink, useParams } from 'react-router-dom'

const Player=()=>{
  const {id} =useParams()
  const [apiData, setApiData] = useState({
    name: "",
    key:"",
    published_at:"",
    typeof:""
  })
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMWIzMmM2MTY3MWQ0YjExYTg3OTJlYTkyMWU5NWM4YyIsIm5iZiI6MTcxOTczOTg1OS4wODA5MTUsInN1YiI6IjY2ODEyNDNhZDYwYzJlODQwOTlkYjI1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dONeWNtTTUf7GIkqgJKDreT-DWqFZAcAdGcJivghN8Q'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
  },[])


  return (
    <div className='player'> 
    <NavLink to={'/'}>
      <img src={back_arrow_icon}/></NavLink>
      <iframe 
      width="90%" 
      height="90%" 
      src={`https://www.youtube.com/embed/${apiData.key}`} 
      title='trailer' 
      frameBorder='0' 
      allowfullscreen
      ></iframe>
      <div className='player-info'>
        <p>{apiData.published_at.slice(0,12)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player