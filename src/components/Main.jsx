import React, {lazy, Suspense, useState, useReducer, useEffect} from 'react'
import {Route, Routes, Navigate } from 'react-router-dom'
import { BookContext } from '../contexts/dataContext'
import BestSeller from './BestSeller'
import Home from './Home'
import About from './About'
import Favourite from './Favourite'
import Results from './Results'

import favReducer from '../reducers/favReducer'
import DetailBest from './DetailBest'
import DetailResults from './DetailResults'
import DetailFavourite from './DetailFavourite'

const Main = (props) =>{


    const {searchTerm, setSearchTerm, 
           searchResults, setSearchResults, 
           disableSubmit, setDisableSubmit,
           queryGoogleAPIBook,
           countRef,
           resultsCount, setResultsCount,
           queryGoogleAPIBookOthers,
           buttons, filterTitle
          } = props

               


    const [searchBestResults, setSearchBestResults] = useState([])
    const [isOpen, setIsOpen] = useState(false)


    //reducer with local storage
    const [fav, dispatchFav] = useReducer(favReducer, [], ()=>{
        const localData = localStorage.getItem("book-finder-app-favourites");
        return localData ? JSON.parse(localData) : []
    });

    useEffect(() => {
        localStorage.setItem('book-finder-app-favourites', JSON.stringify(fav))
    }, [fav])


    return (
        <div className="main">
        <BookContext.Provider value={
            {searchTerm, setSearchTerm, 
            searchResults, setSearchResults, 
            searchBestResults, setSearchBestResults,
            isOpen, setIsOpen,
            fav, dispatchFav,
            disableSubmit, setDisableSubmit,
            queryGoogleAPIBook,
            countRef,
            resultsCount, setResultsCount,
            queryGoogleAPIBookOthers,
            buttons, filterTitle
            }
            
            }>

            <Routes>
                <Route  path="/" element={<Home/>} />  
                <Route  path="/bestseller" element={<BestSeller />}/>
                <Route  path="/favourite"   element={<Favourite />} />
                <Route  path="/about" element={<About />} />
                <Route  path="/results"  element={ <Results/> } />
                <Route path="/bestseller/:detail" element={<DetailBest/>} />
                <Route path="/results/:detail" element={<DetailResults/>} />
                <Route path="/favourite/:detail" element={<DetailFavourite/>} />
                <Route  path="*" element={<Navigate to="/"/>} />
             </Routes>
        </BookContext.Provider>
        </div>
    )
}

export default Main;