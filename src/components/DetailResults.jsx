import React from 'react'
import {useParams} from 'react-router-dom'
import { useContext } from 'react'
import { BookContext } from '../contexts/dataContext'
import Button from '@mui/material/Button'
import ShopIcon from '@mui/icons-material/Shop';


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
                    
                    <img className="details-img" src={details[0].volumeInfo.imageLinks === undefined ? "" : details[0].volumeInfo.imageLinks.thumbnail}  alt="" />
                   
                        
                        <div className="details-book">
                         <h1>{details[0].volumeInfo.title} </h1>
                         <h2>{details[0].volumeInfo.authors ? details[0].volumeInfo.authors[0] : ""}</h2>
                            <a target="_blank" href={details[0].volumeInfo.canonicalVolumeLink}>
                            
                            <Button
                            variant="contained"
                            color="info"
                            size="small"
                            startIcon={<ShopIcon/>}
                                >Purchase</Button> </a>
                            
                                
                        </div>

                        <div className="details-description">  
                                 Sypnosis: <br/>
                               <p> {details[0].volumeInfo ? details[0].volumeInfo.description : ""} </p>
                                </div>
                </div>
        
    </div>
    )
}

export default DetailResults