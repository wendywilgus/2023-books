import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import sysk from "../assets/jan/nonfiction/SYSK.png";
import gentleman from "../assets/jan/fiction/Gentleman.png";

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these great reads!</h1>
        <div className='cards_container'>
            <div className='cards_wrapper'>
                <ul className='cards_items'>
                    <CardItem
                    src={gentleman}
                    text="A Gentleman in Moscow"
                    label="fiction"
                    path="/bookshelf" />
                    <CardItem
                    src={sysk}
                    text="Stuff You Should Know"
                    label="nonfiction"
                    path="/bookshelf" />
                </ul>
                <ul className='cards_items'>
                    <CardItem
                    src={gentleman}
                    text="A Gentleman in Moscow"
                    label="fiction"
                    path="/bookshelf" />
                    <CardItem
                    src={sysk}
                    text="Stuff You Should Know"
                    label="nonfiction"
                    path="/bookshelf" />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards