import React, {useState} from 'react'
import {Link} from "react-router-dom"
import { useContext } from 'react'
import { BookContext } from '../contexts/dataContext'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search';



const Search = (props) =>{
    const {handleChange, handleSubmit} = props
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
                    
                    <TextField variant="filled" style={{backgroundColor: "white"}}  fullWidth label="Title" id="fullWidth"  type="text" placeholder="Enter by title" onChange={handleChange}/>
                    {/* <input type="text" placeholder="Enter by author" onChange={handleChange}/> */}
                    <Link to="/results"> <Button variant="contained" color="error" startIcon={<SearchIcon/>}  type="submit" onClick={handleSubmit} >Search</Button> </Link>
                    {/* <Link to="/results"> <button type="submit" onClick={handleSubmitOthers} disabled={disableSubmit}>Submit Others</button> </Link> */}
               
                   
            
                <div className="select">
                    <select name="dropdown-categories" id="dropdown-categories" onChange={(e) => setResultsCount(e.target.value)}>
                        <option value="10" >Mini</option>
                        <option value="40"  >Large</option>
                      
                    </select>
                    </div>
            
                </div>
         </Box>
        </div>


      
    )
}

export default Search;




// //     <div className="collapsible">
// //     <button className="toggle" onClick={()=>setIsOpen(!isOpen)}>Toggle</button>
// //    { isOpen && <div className="content">Some content</div>  }

// // </div>