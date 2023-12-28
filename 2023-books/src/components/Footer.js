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
    </div>
  )
}

export default Footer