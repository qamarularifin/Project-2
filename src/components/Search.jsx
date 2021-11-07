import React, {useState} from 'react'
import {Link} from "react-router-dom"
import { useContext } from 'react'
import { BookContext } from '../contexts/dataContext'


const Search = (props) =>{
    const {handleChange, handleSubmit, disableSubmit} = props
    const {countRef, resultsCount, setResultsCount} = useContext(BookContext)
    console.log("resultsCount", resultsCount)

 
    return(
        <div className="search">
            <form>
                <div>
                    <label></label>
                    <input type="text" placeholder="Enter a book title" onChange={handleChange}/>
                    <Link to="/results"> <button type="submit" onClick={handleSubmit} disabled={disableSubmit}>Submit</button> </Link>
                    {/* <input type="text" placeholder="No. of books (max: 40)"
                    ref={countRef} onChange={()=>setResultsCount(countRef.current.value)} /> */}

                    <select name="option" onChange={(e) => setResultsCount(e.target.value)}>
                        <option value="10" >10</option>
                        <option value="20"  >20</option>
                        <option value="30"  >30</option>
                        <option value="40"  >40</option>
                    </select>
                </div>
         </form>
        </div>


      
    )
}

export default Search;

