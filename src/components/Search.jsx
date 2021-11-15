import React, {useState} from 'react'
import {Link} from "react-router-dom"
import { useContext } from 'react'
import { BookContext } from '../contexts/dataContext'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search';



const Search = (props) =>{
    const {handleChange, handleSubmit, disableSubmit, handleSubmitOthers} = props
    const {countRef, resultsCount, setResultsCount} = useContext(BookContext)
    console.log("resultsCount", resultsCount)

 
    return(
        <div className="search">
            <Box
                component="form"
                sx={{
                    width: 500, 
                    maxWidth: "100%",
                    margin: "0 auto",
                    }} 
                    autoComplete="off">
                    

                <div>
                    {/* <label></label> */}
                    <TextField variant="filled" style={{backgroundColor: "white"}}  fullWidth label="Title" id="fullWidth"  type="text" placeholder="Enter by title" onChange={handleChange}/>
                    {/* <input type="text" placeholder="Enter by author" onChange={handleChange}/> */}
                    <Link to="/results"> <Button variant="contained" color="error" startIcon={<SearchIcon/>}  type="submit" onClick={handleSubmit} >Search</Button> </Link>
                    {/* <Link to="/results"> <button type="submit" onClick={handleSubmitOthers} disabled={disableSubmit}>Submit Others</button> </Link> */}
                    {/* <input type="text" placeholder="No. of books (max: 40)"
                    ref={countRef} onChange={()=>setResultsCount(countRef.current.value)} /> */}
                    <div>
                    <select name="option" onChange={(e) => setResultsCount(e.target.value)}>
                        <option value="10" >10</option>
                        <option value="20"  >20</option>
                        <option value="30"  >30</option>
                        <option value="40"  >40</option>
                    </select>
                    </div>
                </div>
         </Box>
        </div>


      
    )
}

export default Search;

