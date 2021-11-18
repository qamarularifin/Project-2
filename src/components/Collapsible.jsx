import React, {useState} from 'react'
import {Link} from "react-router-dom"
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

const Collapsible = (props) =>{

    const [isOpen, setIsOpen] = useState(false)
    const {handleSubmitOthers, authorSearchRef} = props

    return(
        <div className="collapsible">
            <Button className="toggle" style={{backgroundColor: "white"}} startIcon={<SearchIcon/>}  onClick={()=>setIsOpen(!isOpen)}>Search by Author</Button>
           { isOpen && <div className="content">

           <input className="author"type="text" placeholder="Enter by Author" ref={authorSearchRef}/>
                <div>   
            <Link to="/results"> <Button variant="contained" color="primary" startIcon={<SearchIcon/>}  type="submit" onClick={handleSubmitOthers} >Search Author</Button> </Link>
                </div>   
               


           </div>  }
        
        </div>
    )
}

export default Collapsible;