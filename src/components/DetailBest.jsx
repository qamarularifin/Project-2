import React from 'react'
import {useParams} from 'react-router-dom'
import { useContext } from 'react'
import { BookContext } from '../contexts/dataContext'
import Button from '@mui/material/Button'
import ShopIcon from '@mui/icons-material/Shop';


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
            <img  className="details-img" src={details[0] === undefined ? "" : details[0].book_image}  alt="" />
            
                
                    <div className="details-book">
                        <h1 className="details-title">{details[0].title}</h1>
                        <h2 className="details-author">{details[0].author}</h2>
                        
                        <a  target="_blank" href={details[0].amazon_product_url}>
                        <Button
                            variant="contained"
                            color="info"
                            size="small"
                            startIcon={<ShopIcon/>}
                        >Purchase</Button> </a>
                        
                            
                    </div>

                    <div className="details-description">  
                            Sypnosis: <br/>
                            <p>{details[0].description}</p>
                    </div>
        </div>
        
    </div>
    )
}

export default DetailBest