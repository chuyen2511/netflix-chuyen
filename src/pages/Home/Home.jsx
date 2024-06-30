import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className='hero'>
        <img src={hero_banner} className='banner-img'/>
        <div className='hero-caption'>
          <img src={hero_title} className='caption-img'/>
          <p>Hero is not merely a martial arts film but an artistic masterpiece with 
          multiple layers of meaning. 
          It deeply explores themes of loyalty, love, and sacrifice. </p>
          <div className='hero-btns'>
          <button className='btn'>
            <img src={play_icon}/>Play
          </button>
          <button className='btn dark-btn'>
            <img src={info_icon}/>More info
          </button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className='more-cards'>
      <TitleCards title="Movies" category="top_rated" />
      <TitleCards title="TV Series" category="popular" />
      <TitleCards title="Marriage Story" category="upcoming" />
      <TitleCards title="The Irishman" category="now_playing" />
      </div>
      <Footer/>
    </div>
  )
}

export default Home