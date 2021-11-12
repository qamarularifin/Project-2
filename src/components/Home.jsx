import React from 'react'
import {useState} from 'react'
import SearchBox from './SearchBox'
import { BookContext } from '../contexts/dataContext'


const Home = () =>{

    
    return(
   
        <div className="home-overall">
            <h1 className="home-h1">Find Your Book</h1>
                <SearchBox />

            <div className="carousel">
                <h2>put carousel here</h2>
            </div>

                
        </div>
        
        
    )
}

export default Home;