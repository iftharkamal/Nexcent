import React from 'react'
import './Clients.css'
import logo1 from '../../assets/Logo (1).png'
import logo2 from '../../assets/Logo (2).png'
import logo3 from '../../assets/Logo (3).png'
import logo4 from '../../assets/Logo (4).png'
import logo5 from '../../assets/Logo (5).png'
import logo6 from '../../assets/Logo (6).png'
import logo7 from '../../assets/Logo (7).png'
import icon1 from '../../assets/Icon.png'
import icon2 from '../../assets/Icon (1).png'
import icon3 from '../../assets/Icon (2).png'
import learnmore from '../../assets/Frame 35.png'
import members from '../../assets/members.png'
import clubs from '../../assets/Clubs.png'
import eventBookings from '../../assets/eventBookings.png'
import payments from '../../assets/payments.png'
import frame from '../../assets/pana.png'
import tesla from '../../assets/tesla.png'
import rightarrow from '../../assets/right-arrow.png'
import marketing1 from '../../assets/marketing1.png'
import marketing2 from '../../assets/marketing2.png'
import marketing3 from '../../assets/marketing3.png'

const Clients = () => {
  return (
    <div className='clients-container'>
      <h3 className='header-tag'>Our Clients</h3>
      <p className='p-tag'>We have been working withsome Fortune 500+ clients</p>
      <div className="logos">
        <img src={logo1} alt="" />
        <img src={logo2} alt="" />
        <img src={logo3} alt="" />
        <img src={logo4} alt="" />
        <img src={logo5} alt="" />
        <img src={logo6} alt="" />
        <img src={logo7} alt="" />
      </div>

      <h3  className='header-tag'>Manage your entire community <br /> in a single system</h3>
      <p className='p-tag'>Who is Nexcent suitable for?</p>
      <div className="boxes">
        <div className="box">
            <img src={icon1} alt="" />
            <h4 className='box-head'>Membership Organisation</h4>
            <p className='box-text'>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        <div className="box">
            <img src={icon2} alt="" />
            <h4 className='box-head'>National Associations</h4>
            <p className='box-text'>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        <div className="box">
            <img src={icon3} alt="" />
            <h4 className='box-head'>Clubs and Groups</h4>
            <p className='box-text'>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
      </div>
        <div className="learnmore-field">
            <img src={learnmore} alt="" />
            <div className="learnmore-field-text">
            <h4 className='box-head'>The unseen of spending three <br /> years at Pixelgrade</h4>
            <p className='box-text'>When joining the JustGo Community, your success becomes our success. In other words, our Customer Success team will be on hand from day one to ensure we understand your requirements, share your goals and work with you for a smooth adoption of our software.</p>
            <button className='button'>Learn More</button>
            </div>
        </div>

        <div className="analytics-container">
            <div className="analytics-text">
            <h4>Helping a local <br /><span>business reinvent itself</span></h4>
            <p>We reached here with our hard work and dedication</p>
            </div>
            <div className="analytic-boxes">
                <div className="analytic-box">
                    <img src={members} alt="" />
                    <div>
                        <p className='numbers'>2,245,341</p>
                        <p className='number-text'>Members</p>
                    </div>
                </div>

                <div className="analytic-box">
                    <img src={clubs} alt="" />
                    <div>
                        <p className='numbers'>46,328</p>
                        <p className='number-text'>Clubs</p>
                    </div>
                </div>

                <div className="analytic-box">
                    <img src={eventBookings} alt="" />
                    <div>
                        <p className='numbers'>828,867</p>
                        <p className='number-text'>Event Bookings</p>
                    </div>
                </div>

                <div className="analytic-box">
                    <img src={payments} alt="" />
                    <div>
                        <p className='numbers'>1,926,436</p>
                        <p className='number-text'>Payments</p>
                    </div>
                </div>
                
                </div>
            </div>


            <div className="design-info-container">
                <img src={frame} alt="" />
                <div className="info-text-field">
                    <h4 className='box-head'>How to design your site footer like <br /> we did</h4>
                    <p className='box-text'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                    <button className='button'>Learn More</button>
                </div>
            </div>



            <div className="customer-info-container">
                <img src={tesla} alt="" />
                <div className="customer-info-text-field">
                    <p className='text'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                    <p className='customer-name'>Tim Smith</p>
                    <p className='customer-info-p'>British Dragon Boat Racing Association</p>
                    <div className="customer-logos">
                        <img src={logo1} alt="" />
                        <img src={logo2} alt="" />
                        <img src={logo3} alt="" />
                        <img src={logo4} alt="" />
                        <img src={logo5} alt="" />
                        <img src={logo6} alt="" />
                        <div className='customers-click'><p>Meet all customers </p><img src={rightarrow} alt="" /></div>
                    </div>
                </div>
            </div>




            <div className="marketing-container">
                <h4 className='box-head'>Caring is the new marketing</h4>
                <p className='box-text'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
                <div className="box-containers">
                <div className="box-container">
                    <div className="image-box">
                        <img src={marketing1} alt="" />
                    </div>
                    <div className="text-box">
                        <p>Creating Streamlined Safeguarding Processes with OneRen</p>
                        <div className="readmore-click"><p>Readmore</p><img src={rightarrow} alt="" /></div>
                    </div>
                </div>

                <div className="box-container">
                    <div className="image-box">
                        <img src={marketing2} alt="" />
                    </div>
                    <div className="text-box">
                        <p>What are your safeguarding responsibilities and how can you manage them?</p>
                        <div className="readmore-click"><p>Readmore</p><img src={rightarrow} alt="" /></div>
                    </div>
                </div>

                <div className="box-container">
                    <div className="image-box">
                        <img src={marketing3} alt="" />
                    </div>
                    <div className="text-box">
                        <p>Revamping the Membership Model with Triathlon Australia</p>
                        <div className="readmore-click"><p>Readmore</p><img src={rightarrow} alt="" /></div>
                    </div>
                </div>
        
                </div>
            </div>










        </div>
  )
}

export default Clients
