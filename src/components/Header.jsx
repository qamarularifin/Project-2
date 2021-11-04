import React from 'react'
import {Link} from 'react-router-dom'

const Header = () =>{
    return (
     <div className="nav">
        <div className="nav-item"><Link to="/">Book Finder</Link></div>
         <div className="nav-item"><Link to="/bestseller">Best Seller</Link></div>
         <div className="nav-item"><Link to="/favourite">Favourite</Link></div>
         <div className="nav-item"><Link to="/about">About</Link></div>
         <form>
             <div className="nav-search">
                 <label></label>
                 <input type="text" placeholder="search" />
                 <button type="submit">Enter</button>
             </div>
         </form>
    </div>
    )
}

export default Header;

