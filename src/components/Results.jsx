import React from 'react'
import { useContext } from 'react'
import { BookContext } from '../contexts/dataContext'

const Results = () =>{

const {searchTerm, searchResults} = useContext(BookContext)
console.log("searchResults: ", searchResults)
const fallBack = 'https://cdn.browshot.com/static/images/not-found.png'
    
//Google books results
const images = searchResults.map((ele, i)=>{
    return(
        <div key={i}>
            <p>{ele.volumeInfo.title}</p>
            <img className="bookimg" src={ ele.volumeInfo.imageLinks === undefined ? fallBack : ele.volumeInfo.imageLinks.thumbnail}  alt="" />

        </div>
    )
})


    return(
        <div className="results">
            <h1>Results </h1>
                 <div className="results-image">
                 {images}
             </div>
        </div>
    )
}

export default Results;