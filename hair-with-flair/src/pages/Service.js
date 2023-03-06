import React from 'react';
import { Link } from "react-router-dom"
import carousel from '../images/carousel.jpg';
import carousel1 from '../images/carousel1.jpg';
import carousel2 from '../images/carousel2.jpg';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader  
import { Carousel } from 'react-responsive-carousel';
export default function Service() {
  return (
    <div id="container">
      <h2 className="headColor sidepadding">Our hair care services</h2>
      <p  className="aboutText sidepadding serviceDiv">The <b>'Hair with Flair'</b> unisex salon  aims to provide hair grooming services to customers. We offer haircuts, hair coloring, styling, and other hair treatments. Our salon have multiple hairstyling stations as well as a separate area for hair washing. Hair stylists, hair washers, and front desk personnel may be on the salon staff. Hair care products may also be sold at the salon. The salon's mission is to provide a welcoming and professional environment in which customers can receive hair services and improve their overall appearance.</p>
      
      <div className="divCarousel">
        <Carousel showThumbs={false}>
          <div>
            <img src={carousel} style={{ width: "60%", height: "50%" }} />
          </div>
          <div>
            <img src={carousel1} style={{ width: "60%", height: "50%" }} />
          </div>
          <div>
            <img src={carousel2} style={{ width: "60%", height: "50%" }} />
          </div>
        </Carousel>
      </div>
     
 <div className="service-container sidepadding">
 <div class="service-section">
         <h3 className="headColor">Hair Examination and Remedies</h3>
          <p title="Book our service for detailed examination">This service include importance of determining hair type and maintaining hair health, common hair problems and their treatments, product selection tips, and the benefits of consulting a professional. It emphasizes the need for personalized care and attention to maintain healthy, beautiful hair.</p>
          <p><b>Hourly Rate:</b> $75 (+ plus product fee)</p>
          <Link type="button" id="buttons" className="btnService" style={{textDecoration: "none" }} to="/Appointments" >Book an appointment</Link>
          </div>
          <div class="service-section">
          <h3 className="headColor">Gender-free haircuts</h3>
          <p  title="Book our service for detailed examination">Our hair stylists  also offer consultations to help clients choose a gender-free haircut that best suits their needs and preferences.  Our environment welcome individuals to express themselves through their hair.</p>
          <p><b>Hourly Rate:</b> $100 (+ plus product fee)</p>
          <Link type="button" id="buttons" className="btnService" style={{textDecoration: "none" }} to="/Appointments" >Book an appointment</Link>
          </div>
          <div class="service-section">
          <h3 className="headColor">Hair Treatments</h3>
          <p  title="Book our service for detailed examination">The hair treatments are based on deep conditioning and scalp treatments. Deep conditioning treatments aim to nourish and hydrate damaged hair, using a mask or conditioning treatment left on for a period before washing out. Scalp treatments, on the other hand, target the scalp to promote healthy hair growth, using techniques such as a scalp massage or application of a scalp treatment product.</p>
          <p><b>Hourly Rate:</b> $125 (+ plus product fee)</p>
          <Link type="button" id="buttons" className="btnService" style={{textDecoration: "none" }} to="/Appointments" >Book an appointment</Link>
          </div>
          <div class="service-section">
          <h3 className="headColor">Transform my feel</h3>
          <p  title="Book our service for detailed examination">We offer a variety of services to help clients achieve their desired hair look. Keratin treatments can smooth and straighten hair while reducing frizz and increasing shine, while hair extensions can add length or volume. Hair coloring services range from basic highlights and lowlights to more complex techniques like balayage or ombre. Perms use chemicals to create curls or waves in naturally straight or fine hair. Hair smoothing treatments can reduce frizz and manageability without fully straightening the hair.</p>
          <p><b>Hourly Rate:</b> $80 (+ plus product fee)</p>
          <Link type="button" id="buttons" className="btnService" style={{textDecoration: "none" }} to="/Appointments" >Book an appointment</Link>
      </div>
      </div> 
    </div>
  );
};