import React, { useContext, useState, useEffect, useRef } from 'react'
import Search from './Search'
import Results from './Results'
import { BookContext } from '../contexts/dataContext'
import {useHistory} from 'react-router-dom'


const SearchBox = () =>{

    const history = useHistory()
    const {searchTerm, setSearchTerm, searchResults, setSearchResults} = useContext(BookContext)
    const titleRef = useRef()
    const [hasSearched, setHasSearched] = useState(true)
    

    const handleChange = (e) =>{
        const searchTerm = e.target.value
        console.log("handleChange: ", searchTerm)
        setSearchTerm(searchTerm)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("handleSubmit: clicked" )
        setHasSearched(false)
        history.push("/results")
        
         queryGoogleAPIBook()
        
    }

    // useEffect(()=>{
    //      queryGoogleAPIBook()
     
    // }, [searchTerm])

    // const handleSubmit =() => {
    //     const search = titleSearch.current.value.replace(/\s/, "+")
    //     callApi(search)
    // }

    // Google Books API Call
    const queryGoogleAPIBook = async() =>{
        // Google Book apiKey
        const apiKey = 'AIzaSyDeqdtT7Yzm3EyJeWrqZfVoWcITn2Mohj8' 
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}&maxResults=20`)
        //const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${apiKey2}`) //newyork best sellers
        const data = await response.json()
        setSearchResults(data.items)
        console.log(data.items)
    }



    return(
        <div className="search-box">
            {/* <h1>SearchBox</h1> */}
            { hasSearched ? 
                <Search searchTerm={searchTerm} 
                    setSearchTerm={setSearchTerm} 
                    titleRef={titleRef} 
                    handleSubmit={handleSubmit} 
                    handleChange={handleChange}/>
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