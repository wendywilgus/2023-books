import React from 'react';
import'./Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Want to talk more about books?
            </p>
            <p className='footer-subscription-text'>
                Email me to share your book recommendations or to talk more about reading! 
            </p>
            <div className='input-areas'>
                <form>
                    <input type='email' name='email' placeholder='Your Email' className='footer-input' />
                    <Button buttonStyle='btn--outline'>Share My Address</Button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <Link to='/'>
                        Home
                    </Link>
                    <Link to='/bookshelf'>
                        Monthly Bookshelf
                    </Link>
                    <Link to='/favorites'>
                        My Favorites
                    </Link>
                    <Link to='/full-list'>
                        Full List
                    </Link>
                </div>
            </div>
            <div className='footer-link-items'>
                <small class='website-rights'>Wendy Wilgus © 2024</small>
                <small >
                    <Link
                        to='https://wendywilgus.github.io/Portfolio_in_React/'
                        target='_blank'
                        aria-label='Portfolio'
                        class='website-rights'
                        >View My Portfolio
                        </Link>
                </small>
            </div>
            <section class='social-media'>
        <div class='social-media-wrap'>
          
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/wendy.a.wilgus'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='https://www.instagram.com/bear__and__bee/?hl=en'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link linkedin'
              to='https://www.linkedin.com/in/wendy-wilgus-750b00a1/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fa-brands fa-linkedin' />
            </Link>
            <Link
              class='social-icon-link github'
              to='https://github.com/wendywilgus'
              target='_blank'
              aria-label='Github'
            >
              <i class="fa-brands fa-square-github"></i>
            </Link>
            
          </div>
        </div>
      </section>
        </div>
        
    </div>
  )
}

export default Footer