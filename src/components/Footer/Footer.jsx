import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import footerlogo from '../../assets/footerLogo.png'
import instagram from '../../assets/instagram.png'
import basketball from '../../assets/basketball.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png'
import send from '../../assets/send.png'

const Footer = () => {
  return (
    <div>
        <div className="footer-header">
            <h1>Let Nextcent do the work <br /> so you don't have to!</h1>
           <button>Get a Demo <FontAwesomeIcon icon={faArrowRightLong} size="xs" style={{color: "#ffffff",}} /> </button>
        </div>



        <div className="footer-tail">
            <div className='primary-grid'>
                <img src={footerlogo} alt="" />
                <p>Copyright © 2020 Nexcent ltd. <br/>All rights reserved </p> 
                <div className="social-logos">
                    <div className='logo-circle'><img src={instagram} alt="" /></div>
                    <div className='logo-circle'><img src={basketball} alt=""/></div>
                    <div className='logo-circle'><img src={twitter} alt=""/></div>
                    <div className='logo-circle'><img src={youtube} alt=""/></div>
                </div>
            </div>

            <div>
                <h4>Company</h4>
                <div className="footer-tags">
                <a href="">About us</a>
                <a href="">Blog</a>
                <a href="">Contact us</a>
                <a href="">Pricing</a>
                <a href="">Testimonials</a>
                </div>
            </div>

            <div>
                <h4>Support</h4>
                <div className="footer-tags">
                <a href="">Help Center</a>
                <a href="">Terms of service</a>
                <a href="">Legal</a>
                <a href="">Privacy Policy</a>
                <a href="">Status</a>
                </div>
            </div>

            <div>
                <h4>Stay up to date</h4>
                <div className='footer-input'><input type="email" placeholder='Your email address'/> <img src={send} alt="" /> </div>
            </div>




        </div>
    </div>
  )
}

export default Footer
