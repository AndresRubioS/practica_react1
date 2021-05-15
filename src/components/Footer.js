import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        
        </p>
        <p className='footer-subscription-text'>
          Suscribete y recibe las últimas novedades!
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribirse</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
      
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            Security Craft
              <i class="fas fa-key"></i>
            </Link>
          </div>
          <small class='website-rights'>Security Craft © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
             
           
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              
             
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
             
           
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              
            
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
          
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
