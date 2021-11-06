import React, {useState, useReducer} from 'react'
import {Route, Routes, Navigate } from 'react-router-dom'
import BestSeller from './BestSeller'
import Home from './Home'
import About from './About'
import Favourite from './Favourite'
import Results from './Results'
import { BookContext } from '../contexts/dataContext'
import favReducer from '../reducers/favReducer'


const Main = (props) =>{

    const {searchTerm, setSearchTerm, 
           searchResults, setSearchResults, 
           disableSubmit, setDisableSubmit,
           queryGoogleAPIBook} = props

               

    // const [searchTerm, setSearchTerm] = useState("")
    // const [searchResults, setSearchResults] = useState([])
    const [searchBestResults, setSearchBestResults] = useState([])
    const [isOpen, setIsOpen] = useState(false)


    //reducer
    const [fav, dispatchFav] = useReducer(favReducer, [])
    console.log("fav", fav)

    return (
        <div className="main">
        <BookContext.Provider value={
            {searchTerm, setSearchTerm, 
            searchResults, setSearchResults, 
            searchBestResults, setSearchBestResults,
            isOpen, setIsOpen,
            fav, dispatchFav,
            disableSubmit, setDisableSubmit,
            queryGoogleAPIBook

            }
            
            }>

            <Routes>
                <Route  path="/" element={<Home/>} />  
                <Route  path="/bestseller" element={<BestSeller />}/>
                <Route  path="/favourite"   element={<Favourite />} />
                <Route  path="/about" element={<About />} />
                <Route  path="/results" element={ <Results/>} />
                <Route  path="*" element={<Navigate to="/"/>} />
                
             </Routes>
        </BookContext.Provider>
        </div>
    )
}

export default Main;