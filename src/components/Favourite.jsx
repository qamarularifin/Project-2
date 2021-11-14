import React from 'react'
import { useContext } from 'react'
import { BookContext } from '../contexts/dataContext'
import {Link} from 'react-router-dom'
import Button from '@mui/material/Button'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LinkIcon from '@mui/icons-material/Link';

const Favourite = () =>{
    const {fav, dispatchFav} = useContext(BookContext)
    const favItem = fav.map((ele,i)=>{
        return(
            <div className="favourite" key={i}>
                <img className="favbook-img" src={ele === undefined ? "" : ele.book_image}  alt="" />
                <div className="fav-book">
                    <h3 >{ele.title}</h3>
                    
                    <div className="fav-over"> {ele.description}</div>

                    <div className="button-container">
                        <a target="_blank" href={ele.link}>
                        <Button
                            variant="contained"
                            color="info"
                            size="small"
                            startIcon={<LinkIcon/>}
                        >Link</Button> </a>
                    <Button 
                        variant="contained"  
                        size="small"
                        color="error"
                        startIcon={<FavoriteIcon/>}
                    
                    onClick={()=>{dispatchFav({type: "REMOVEFROMFAV", payload: ele.id})}}>Del</Button>

                    <Link to={"/favourite/" + ele.title} >
                    
                    <Button
                         variant="contained"
                        size="small"
                        color="inherit"
                        style={{marginLeft: "0.3em"}}
                    >Info</Button></Link>
                        
                    </div>
                </div>

            </div>
        )
    })


    console.log("lllll", fav.length)


    return (
        <div className="favourite-overall">
            <h1>Favourite</h1>
             
                 <div className="favourite-image">
                         {/* {favItem} */}
                         {favItem.length < 1 ?  <h1 className="fav-empty">Favourite is Empty!</h1> : favItem}
                </div>
                
        </div>


    )
}

export default Favourite;

