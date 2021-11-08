import React from 'react'
import {useParams} from 'react-router-dom'
import { useContext } from 'react'
import { BookContext } from '../contexts/dataContext'


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
                 <img className="details-img" src={details[0] === undefined ? "" : details[0].book_image}  alt="" />
                    <div className="best-book">
                        <h3 ></h3>
                        <a target="_blank" href={details[0].link}><button>More Info</button> </a>
                        <div className="fav-over">  
                            {details[0] ? details[0].description : ""}</div>
                            
                    </div>
       
        
    </div>
    )
}

export default DetailFavourite