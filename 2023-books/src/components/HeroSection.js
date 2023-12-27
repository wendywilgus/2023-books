import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';


function HeroSection() {
  return (
    <div className='hero-container'>
        <h1>50+ Books in 2023</h1>
        <p>Read on to see all the titles I read this year!</p>
        <div className='hero-btns'>
            <Button className="btns" buttonStyle='btn--outline' buttonSize='btn--large' href='/bookshelf'>Read More</Button>
            <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large' href='/favorites'>Top Picks</Button>
        </div>
    </div>
  )
}

export default HeroSection;