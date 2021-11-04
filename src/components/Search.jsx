import React from 'react'
import {Link} from "react-router-dom"


const Search = (props) =>{
    const {handleChange, handleSubmit} = props
    
 
    return(
        <div className="search">
            <form>
                <div>
                    <label>Search</label>
                    <input type="text" placeholder="Enter a book" onChange={handleChange}/>
                    <Link to="/results"> <button type="submit" onClick={handleSubmit}>Submit</button> </Link>
                </div>
         </form>
        </div>


      
    )
}

export default Search;

