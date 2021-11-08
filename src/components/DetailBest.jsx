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

        <div className="bestseller">
                 <img className="bestbook-img" src={details[0] === undefined ? "" : details[0].book_image}  alt="" />
                    <div className="best-book">
                        <h3 ></h3>
                        <a target="_blank" href={details[0].amazon_product_url}><button>More Info</button> </a>
                        <div className="best-over">  
                            {details[0].description}</div>
                            
                    </div>
       
        
    </div>
    )
}

export default DetailBest