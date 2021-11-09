import React from 'react'
import { useContext } from 'react'
import { BookContext } from '../contexts/dataContext'
import {Link} from 'react-router-dom'

const Favourite = () =>{
    const {fav, dispatchFav} = useContext(BookContext)
    const favItem = fav.map((ele,i)=>{
        return(
            <div className="favourite" key={i}>
                <img className="favbook-img" src={ele === undefined ? "" : ele.book_image}  alt="" />
                <div className="fav-book">
                    <h3 >{ele.title}</h3>
                    
                    <div className="fav-over">  
                        {ele.description}</div>
                        <a target="_blank" href={ele.link}><button>More Info</button> </a>
                    <button onClick={()=>{dispatchFav({type: "REMOVEFROMFAV", payload: i})}}>Remove</button>

                    <Link to={"/favourite/" + ele.title} ><button>Details</button></Link>
                        
                </div>


            </div>
        )
    })


    


    return (
        <div className="favourite-overall">
            <h1>Favourite</h1>
                 <div className="favourite-image">
                         {favItem}
                        

                </div>
        </div>


    )
}

export default Favourite;

