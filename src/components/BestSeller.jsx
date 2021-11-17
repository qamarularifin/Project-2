import React, {useEffect, useState} from 'react'
import { useContext } from 'react'
import { BookContext } from '../contexts/dataContext'
import {Link} from "react-router-dom"
import Spinner from './Spinner/Spinner'
import Button from '@mui/material/Button'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LinkIcon from '@mui/icons-material/Link';

const BestSeller = (props) =>{

    const {searchTerm, setSearchTerm, searchBestResults, setSearchBestResults, isOpen, setIsOpen, fav, dispatchFav, queryAPIBookBest} = useContext(BookContext)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setTimeout(setLoaded, 800, true)
    }, [searchBestResults])


     console.log("best-results: ", searchBestResults)
 
    useEffect(() => {
        queryAPIBookBest()
        return ()=>{
            console.log("clean up")
        }
   
    }, [])

  

        const fallBack = 'https://cdn.browshot.com/static/images/not-found.png'

  
  
        const imagesBest = searchBestResults.map((ele, i)=>{
            return(
                <div className="bestseller" key={i}>
                    <img className="bestbook-img" src={ele === undefined ? fallBack : ele.book_image}  alt="" />
                    <div className="best-book">
                         <h3 >{ele.title}</h3>
                         <div className="best-over">  {ele.description}</div>

                         <div className="button-container">
                         <a target="_blank" href={ele.amazon_product_url}>
                         <Button
                            variant="contained"
                            color="info"
                            size="small"
                            startIcon={<LinkIcon/>}
                         >Link</Button> </a>
                         
                        {
                            fav.some((p)=>p.id===ele.rank)?
                            <Button 
                                variant="contained"  
                                size="small"
                                color="error"
                                startIcon={<FavoriteIcon/>}
                            
                            
                             onClick={()=>{dispatchFav({type: "REMOVEFROMFAV", payload: ele.rank})}}>DEL</Button>
                            :
                            
                            <Button 
                                variant="contained"
                                size="small"
                                color="success"
                                startIcon={<FavoriteBorderIcon/>}
                           
                                onClick={()=>{
       
                                    dispatchFav({type:"ADDTOFAV", 
                                
                                payload: {book_image: ele.book_image,
                                        title: ele.title,
                                        description: ele.description,
                                        link: ele.amazon_product_url,
                                        author: ele.author,
                                        id: ele.rank,
                                        rank: ele.rank,
                                        publisher: ele.publisher
                                        
                                        }
                   
                                           })}} >FAV</Button>
                        }
                             

                              <Link to={"/bestseller/" + ele.title} >
                              
                              <Button
                                variant="contained"
                                size="small"
                                color="inherit"
                                style={{marginLeft: "0.3em"}}
                                
                              >INFO</Button></Link>
                    </div>
                   
                    </div>
                </div>
            )
        })


 

    return (
        <div className="bestseller-overall">
            <h1>New York Best Seller</h1>
            {!loaded && <Spinner>Loading Best Seller...</Spinner>}
                 <div className="bestseller-image">
                         {imagesBest}
                        

                </div>
        </div>
    )
}

export default BestSeller;
