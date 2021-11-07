import React, {useState} from 'react'
import {Link} from "react-router-dom"
import { useContext } from 'react'
import { BookContext } from '../contexts/dataContext'


const Search = (props) =>{
    const {handleChange, handleSubmit, disableSubmit} = props
    const {countRef, resultsCount, setResultsCount} = useContext(BookContext)
    const [disableCount, setDisableCount] = useState(false)
    console.log("resultsCount", resultsCount)

    // const countDisabled = () =>{
    //     resultsCount > 41 ? prompt("Must be less than 40!") : ""
    // }
 
    return(
        <div className="search">
            <form>
                <div>
                    <label></label>
                    <input type="text" placeholder="Enter a book title" onChange={handleChange}/>
                    <Link to="/results"> <button type="submit" onClick={handleSubmit} disabled={disableSubmit}>Submit</button> </Link>
                    <input type="text" placeholder="No. of books (max: 40)"
                    ref={countRef} onChange={()=>setResultsCount(countRef.current.value)} />

                    {/* <select>
                        <option value={resultsCount} onChange={(e)=>setResultsCount(e.target.value)}>10</option>
                        <option value={resultsCount}  onChange={(e)=>setResultsCount(e.target.value)}>20</option>
                        <option value={resultsCount}  onChange={(e)=>setResultsCount(e.target.value)}>30</option>
                        <option value={resultsCount}  onChange={(e)=>setResultsCount(e.target.value)}>40</option>
                    </select> */}
                </div>
         </form>
        </div>


      
    )
}

export default Search;

