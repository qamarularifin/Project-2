import React, {useRef} from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'


const Navigation = (props) =>{
    const {searchTerm, setSearchTerm, 
           disableSubmit, setDisableSubmit,
           queryGoogleAPIBook, setSearchResults} = props
    
    const titleRef = useRef()
    const navigate = useNavigate()

    const navHandleChange = () =>{
        const searchTerm = titleRef.current.value

        searchTerm ? setSearchTerm(searchTerm) : setSearchResults([])
        // setSearchTerm(searchTerm)
        !searchTerm ? setDisableSubmit(true) : setDisableSubmit(false)
    }

    const navHandleSubmit = (e) =>{
        e.preventDefault()
        navigate("/results")
        queryGoogleAPIBook()
 
    }

    return (
     <div className="nav">
        <div className="nav-item"><Link to="/">Google Book Finder</Link></div>
         <div className="nav-item"><Link to="/bestseller">New York Best Seller</Link></div>
         <div className="nav-item"><Link to="/results">Results</Link></div>
         <div className="nav-item"><Link to="/favourite">Favourite</Link></div>
         <div className="nav-item" ><Link to="/about" >About </Link> </div>
         
         
         <form>
             <div className="nav-search">
                 <label></label>
                 <input type="text" placeholder="search" ref={titleRef} onChange={navHandleChange}/>
                 <Link to="/results"> <button type="submit" onClick={navHandleSubmit} disabled={disableSubmit}>Enter</button> </Link>
                 
             </div>
         </form>
    </div>
    )
}

export default Navigation;

