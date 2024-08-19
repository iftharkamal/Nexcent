import React from 'react'
import './Home.css'
import Navbar from '../Navbar/Navbar'
import home_illustration from '../../assets/Illustration.png'
import dot from '../../assets/Dot.png'

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <div className='container'>
        <div className="left-container">
            <h1>
                Lessons and insights <br /> <span>from 8 years</span>
            </h1>
            <p>Where to grow your business as a photographer: site or social media?</p>
            <button>Register</button>
        </div>

        <div className="right-container">
            <img src={home_illustration} alt="" />
        </div>
       
    </div>
        <img className='dot' src={dot} alt="" />
    </div>
  )
}

export default Home
