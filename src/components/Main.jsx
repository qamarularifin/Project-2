import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import BestSeller from './BestSeller'
import Home from './Home'
import About from './About'
import Favourite from './Favourite'
import Results from './Results'
import { BookContext } from '../contexts/dataContext'
import {useState} from 'react'

const Main = () =>{

    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [searchBestResults, setSearchBestResults] = useState([])

    return (
        <div className="main">
        <BookContext.Provider value={{searchTerm, setSearchTerm, searchResults, setSearchResults, searchBestResults, setSearchBestResults}}>
            <Switch>

                <Route exact path="/">
                    <Home/>
                </Route>

                <Route  path="/bestseller">
                    <BestSeller />
                </Route>

                <Route  path="/favourite">
                    <Favourite />
                </Route>

                <Route  path="/about">
                    <About />
                </Route>

                <Route path="/results">
                    <Results/>
                </Route> 

                <Redirect to="/" />

             </Switch>
        </BookContext.Provider>
        </div>
    )
}

export default Main;