import React from 'react'
import {useParams} from 'react-router-dom'
import { useContext } from 'react'
import { BookContext } from '../contexts/dataContext'


const DetailBest = () =>{
    const {searchBestResults} = useContext(BookContext)
    const {detail} = useParams()
    console.log("dddd", detail)
    
    console.log("sssss", searchBestResults)
    const details = searchBestResults.filter(ele => {
        return (
            ele.title === detail
        )
    })
    
    console.log("detaillll", details[0].title)
   
   
    return(

        <div className="details">
        <div className="details-container">
                <h1>{details[0].title}</h1>
                <h2>{details[0].author}</h2>
                 <img  className="details-img" src={details[0] === undefined ? "" : details[0].book_image}  alt="" />
                    <div className="details-book">
                        
                        <a target="_blank" href={details[0].amazon_product_url}><button>More Info</button> </a>
                        <div className="details-description">  
                            {details[0].description}</div>
                            
                    </div>
        </div>
        
    </div>
    )
}

export default DetailBest