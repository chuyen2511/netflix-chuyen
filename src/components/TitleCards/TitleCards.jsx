import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link, NavLink } from 'react-router-dom'
const TitleCards = ({title, category}) => {

  const cardsRef = useRef();
  const [apiData, setApiData] = useState([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMWIzMmM2MTY3MWQ0YjExYTg3OTJlYTkyMWU5NWM4YyIsIm5iZiI6MTcxOTczOTg1OS4wODA5MTUsInN1YiI6IjY2ODEyNDNhZDYwYzJlODQwOTlkYjI1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dONeWNtTTUf7GIkqgJKDreT-DWqFZAcAdGcJivghN8Q'
    }
  };
  


  const handleWheel = (event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }
  useEffect(()=>{

      fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel',handleWheel)
  },[])
  
  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"} </h2>
      {/* ref={cardsRef} để trong div cho ta tham chiếu đến phần tử đó 
      giúp ta tương tác với nó  */}
      <div className='card-list' ref={cardsRef}>
        {apiData.map((card,index)=>{
          return(
            <NavLink to={`/player/${card.id}`} className='card' key={index}>
              <img src={ `https://image.tmdb.org/t/p/w500/` + card.backdrop_path} />
              <p>{card.original_title}</p>
            </NavLink>
          )
        })}
      </div>
    </div>
  )
}

export default TitleCards