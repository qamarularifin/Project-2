import React from 'react'
import { useContext } from 'react'
import { BookContext } from '../contexts/dataContext'
import {Link} from 'react-router-dom'
 
const Results = () =>{

const {searchTerm, searchResults, fav, dispatchFav} = useContext(BookContext)
console.log("searchResults: ", searchResults)
const fallBack = 'https://cdn.browshot.com/static/images/not-found.png'


    
//Google books results
const images = searchResults.map((ele, i)=>{
    return(
        <div className="results" key={i}>
           <img className="book-img" src={ ele.volumeInfo.imageLinks === undefined ? fallBack : ele.volumeInfo.imageLinks.thumbnail}  alt="" />
            <div className="results-book">
                 <h3>{ele.volumeInfo.title}</h3>
                <a target="_blank" href={ele.volumeInfo.canonicalVolumeLink}><button>More Info</button> </a>
                 <div className="results-over">  
                {ele.searchInfo ? ele.searchInfo.textSnippet : ""}  </div>
                <button 
                    onClick={()=>{dispatchFav({type:"ADDTOFAV",
                    
                    payload: {book_image: ele.volumeInfo.imageLinks === undefined ? fallBack : ele.volumeInfo.imageLinks.thumbnail,
                            title: ele.volumeInfo.title,
                            description: ele.searchInfo ? ele.searchInfo.textSnippet : "",
                            link: ele.volumeInfo.canonicalVolumeLink}
                    
                    })}}>Add to Fav</button>
            </div>
           
            

        </div>
    )
})

 

    return(
        <div className="results-overall">
            <h1>Results </h1>
                 <div className="results-image">
                 {images}
             </div>
        </div>
    )
}

export default Results;




// //     <div className="collapsible">
// //     <button className="toggle" onClick={()=>setIsOpen(!isOpen)}>Toggle</button>
// //    { isOpen && <div className="content">Some content</div>  }

// // </div>

// return (
// <div className="bestseller-overall">
//     <h1>Best Seller</h1>
//          <div className="bestseller-image">
//                  {imagesBest}
                

//         </div>
// </div>
// )
// }
