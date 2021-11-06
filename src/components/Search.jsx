import React from 'react'
import {Link} from "react-router-dom"


const Search = (props) =>{
    const {handleChange, handleSubmit, disableSubmit} = props
    
 
    return(
        <div className="search">
            <form>
                <div>
                    <label>Search</label>
                    <input type="text" placeholder="Enter a book" onChange={handleChange}/>
                    <Link to="/results"> <button type="submit" onClick={handleSubmit} disabled={disableSubmit}>Submit</button> </Link>
                </div>
         </form>
        </div>


      
    )
}

export default Search;

