import React from 'react'
import {useState} from 'react'
import SearchBox from './SearchBox'
import { BookContext } from '../contexts/dataContext'


const Home = () =>{

    
    return(
        <div>
            <h1>Find Your Book</h1>
                <SearchBox />
        </div>
    )
}

export default Home;