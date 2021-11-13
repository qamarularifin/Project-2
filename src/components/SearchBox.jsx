import React, { useContext, useState, useEffect, useRef } from 'react'
import Search from './Search'
import Results from './Results'
import { BookContext } from '../contexts/dataContext'
import {useNavigate} from 'react-router-dom'


const SearchBox = () =>{

    const navigate = useNavigate()
    const {searchTerm, setSearchTerm, 
        searchResults, setSearchResults, 
        disableSubmit, setDisableSubmit,
        queryGoogleAPIBook, queryGoogleAPIBookOthers} = useContext(BookContext)
        
     const [hasSearched, setHasSearched] = useState(true)
    // const [disableSubmit, setDisableSubmit] = useState(true)

    
            
    

    const handleChange = (e) =>{
        const searchTerm = e.target.value
        console.log("handleChange: ", searchTerm)
        setSearchTerm(searchTerm)
        !searchTerm ? setDisableSubmit(true) : setDisableSubmit(false)

    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("handleSubmit: clicked" )
        setHasSearched(false)
        navigate("/results")  
        queryGoogleAPIBook()
        
        
    }

    const handleSubmitOthers = (e) =>{
        e.preventDefault()
        console.log("handleSubmit: clicked" )
        setHasSearched(false)
        navigate("/results")  
        
        queryGoogleAPIBookOthers()
        
    }


    // const handleSubmit =() => {
    //     const search = titleSearch.current.value.replace(/\s/, "+")
    //     callApi(search)
    // }


    return(
        <div className="search-box">
            
      
            { hasSearched ? 
                <Search searchTerm={searchTerm} 
                    setSearchTerm={setSearchTerm} 
                    handleSubmit={handleSubmit} 
                    handleChange={handleChange}
                    disableSubmit={disableSubmit}
                    handleSubmitOthers={handleSubmitOthers}
                    />
                :
                
                <Results 
                    
                    searchTerm={searchTerm}
                    searchResults={searchResults}
                />  
            }
            
            
        </div>
    )
}

export default SearchBox