import React from 'react'
import '../Carousel/Carousel.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {FaInstagram , FaFacebook , FaLinkedinIn} from 'react-icons/fa' 

const Carousel = () => {
 
  return (
    <>
      <div className="carousel">
        <div className='list'>
          <div class='item'>
            <img src='rotaract_page.jpg' alt='Notes_img' />
              <div class='content'>
              <div class='title'>ROTARACT</div>
              <div class='topic'>PCE</div>
              
            <Link to='/Notes'>
              <div class='buttons'>
                <button>GET STARTED </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="main_hack">
      <section className=' section2'>
          <div className='container '>
            <div className='items_hack'>
              <div className='img_hack'>
                <img alt='Project'  src='Aboutus.jpg' height='300' width='600' />
              </div>
              <div className='box'>
                <div className='box1'>
                  <h2>About Us</h2>
                
                </div>

                <div className='box2'>
                  <div className='cards'>
                    <div className=' card'>
                      <div className=' text'>
                        <h3>What is Rotaract?</h3>
                        <p>
                        Rotaract clubs bring together people ages 18 and older to exchange ideas with leaders in the community, develop leadership and professional skills, and have fun through service. In communities worldwide, Rotary and Rotaract members work side by side to take action through service.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='cards'>
                    <div className=' card'>
                      <div className='text'>
                        <h3>Mission Statement</h3>
                        <p>
                        We wish to serve a platform that calls together the members of the community to promote peace, infuse integrity, boost goodwill and work towards creating a better and sustainable world.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='cards'>
                    <div className='card'>
                      <div className='text'>
                        <h3>District 3030</h3>
                        <p>
                        Rotaract 3030 is the District Rotaract Organization of Rotary International District 3030 which comprises revenue districts of Nashik, Jalgaon, Akola, Amravati, Wardha, Buldhana, Washim, Yavatmal, Nagpur, Chandrapur, Gondia, Bhandara, and Gadchiroli in the state of Maharashtra, India.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
        <div className="home_events">
          <ul>
            <li><div className="event_card"><img src="rotaract_banner.jpg" alt="image1" /><div className='event_text'><h2>topic</h2><h3>date|plcae</h3><p>details...</p><button>Details</button></div></div></li>
            <li><div className="event_card"><img src="rotaract_banner.jpg" alt="image2" /><div className='event_text'><h2>topic</h2><h3>date|plcae</h3><p>details...</p><button>Details</button></div></div></li>
            <li><div className="event_card"><img src="rotaract_banner.jpg" alt="image3" /><div className='event_text'><h2>topic</h2><h3>date|plcae</h3><p>details...</p><button>Details</button></div></div></li>
          </ul>
        </div>

        <footer>
          <h1>Rotaract PCE</h1>
        
          <p>&copy; 2024 Rotaract PCE. All rights reserved</p>
         <FaFacebook className='icons facebook'/>
         <a href="https://www.linkedin.com/in/rotaract-club-of-pce-2b4164215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank' title='Go to linkeddin'><FaLinkedinIn className='icons linkedin'/></a><FaInstagram className='icons instagram'/>
         
        </footer>
      </div>
    </>
  )
}

export default Carousel
