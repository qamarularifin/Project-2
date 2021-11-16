import React from 'react'
import {useParams} from 'react-router-dom'
import { useContext } from 'react'
import { BookContext } from '../contexts/dataContext'
import Button from '@mui/material/Button'
import ShopIcon from '@mui/icons-material/Shop';


const DetailFavourite = () =>{
    const {fav} = useContext(BookContext)
    const {detail} = useParams()
    console.log("detailparamsfav", detail)
    
    console.log("fav", fav)
    const details = fav.filter(ele => {
        return (
            ele.title === detail
        )
    })
    
    console.log("detailllllresults", details[0])
   
   
    return(

        <div className="details">
        <div className="details-container">

        <div className="details-img-book">
        <img className="details-img" src={details[0] === undefined ? "" : details[0].book_image}  alt="" />
                
                <div className="details-book">
                <h2>Title: {details[0].title}</h2>
                <h3>Author: {details[0].author}</h3>
                <h3>Publisher: {details[0].publisher}</h3>
                <h3>Rank: {details[0].rank}</h3>
                <a target="_blank" href={details[0].link}>
                
                <Button
                    variant="contained"
                    color="info"
                    size="small"
                    startIcon={<ShopIcon/>}
                >Purchase</Button> </a>
                   </div>
                       
                   </div>
                <div className="details-description">  
                    Sypnosis: <br/>
                   <p> {details[0] ? details[0].description : ""} </p>
                   </div>
                    
                  
            </div>
        
    </div>
    )
}

export default DetailFavourite