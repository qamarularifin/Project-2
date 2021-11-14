import React from 'react'
import {useParams} from 'react-router-dom'
import { useContext } from 'react'
import { BookContext } from '../contexts/dataContext'


const DetailResults = () =>{
    const {searchResults} = useContext(BookContext)
    const {detail} = useParams()
    console.log("detailresults", detail)
    
    console.log("searchresultsfromdetailresults", searchResults)
    const details = searchResults.filter(ele => {
        return (
            ele.id === detail
        )
    })
    
    console.log("detailllllresults", details[0])
   
   
    return(

        <div className="details">
                <div className="details-container">
                    <h1>{details[0].volumeInfo.title} </h1>
                    <h2>{details[0].volumeInfo.authors ? details[0].volumeInfo.authors[0] : ""}</h2>
                    <img className="details-img" src={details[0].volumeInfo.imageLinks === undefined ? "" : details[0].volumeInfo.imageLinks.thumbnail}  alt="" />
                        <div className="details-book">
                            
                            <a target="_blank" href={details[0].volumeInfo.canonicalVolumeLink}><button>More Info</button> </a>
                            <div className="details-description">  
                                {details[0].volumeInfo ? details[0].volumeInfo.description : ""}
                                </div>
                                
                        </div>
                </div>
        
    </div>
    )
}

export default DetailResults