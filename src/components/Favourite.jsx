import React from 'react'
import { useContext } from 'react'
import { BookContext } from '../contexts/dataContext'

const Favourite = () =>{
    const {fav} = useContext(BookContext)
    const favItem = fav.map((ele,i)=>{
        return(
            <div className="favourite" key={i}>
                <img className="favbook-img" src={ele === undefined ? "" : ele.book_image}  alt="" />
                <div className="fav-book">
                    <h3 >{ele.title}</h3>

                    <div className="fav-over">  
                        {ele.description}</div>
                        
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

