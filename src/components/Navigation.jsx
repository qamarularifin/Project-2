import React, {useRef} from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search';



const Navigation = (props) =>{
    const {searchTerm, setSearchTerm, 
           disableSubmit, setDisableSubmit,
           queryGoogleAPIBook} = props
    
   

    const titleRef = useRef()
    const navigate = useNavigate()

    const navHandleChange = () =>{
        const searchTerm = titleRef.current.value

        // searchTerm ? setSearchTerm(searchTerm) : setSearchResults([])
        setSearchTerm(searchTerm)
        !searchTerm ? setDisableSubmit(true) : setDisableSubmit(false)
    }

    const navHandleSubmit = (e) =>{
        if (searchTerm === ""){
            return 
        } else{
                e.preventDefault()
                navigate("/results")
                queryGoogleAPIBook()

        }

 
    }

    return (
        
     <div className="nav">
        <div className="nav-item"><Link to="/">Google Book Finder</Link></div>
         <div className="nav-item"><Link to="/bestseller">New York Best Seller</Link></div>
         <div className="nav-item"><Link to="/results">Results</Link></div>
         <div className="nav-item"><Link to="/favourite">Favourite</Link></div>
         {/* <div className="nav-item" ><Link to="/about" >About </Link> </div> */}

      
         
         <form>
             <div className="nav-search">
                 
                 <input style={{borderRadius: "10px"}} type="text" placeholder="search" ref={titleRef} onChange={navHandleChange}/>
                 <Link to="/results"> <Button size="small" sx={{width:"1em"}} variant="outlined" color="error" startIcon={<SearchIcon/>}  type="submit" onClick={navHandleSubmit} ></Button> </Link>
                 
             </div>
         </form>

        
         
    </div>


    
    )
}

export default Navigation;

