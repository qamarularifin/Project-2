import React from 'react'
import {useState} from 'react'
import SearchBox from './SearchBox'
import { BookContext } from '../contexts/dataContext'

//Carousel
import ReactDom from "react-dom"
import Carousel from "react-elastic-carousel"
import Item from '../carouselStyle'


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];


const Home = () =>{

    
    return(
   
        <div className="home-overall">
            <h1 className="home-h1">Find Your Book</h1>
                <SearchBox />

            <div className="carousel">
                <h2>Best Seller</h2>
          
                            <div className="App">
                                <Carousel breakPoints={breakPoints}>
                                <Item>One</Item>
                                <Item>Two</Item>
                                <Item>Three</Item>
                                <Item>Four</Item>
                                <Item>Five</Item>
                                <Item>Six</Item>
                                <Item>Seven</Item>
                                <Item>Eight</Item>
                                </Carousel>
                            </div>
            </div>

                
        </div>
        
        
    )
}

export default Home;