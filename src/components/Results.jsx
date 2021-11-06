import React from 'react'
import { useContext } from 'react'
import { BookContext } from '../contexts/dataContext'

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
                 <div className="results-over">  
                {ele.searchInfo ? ele.searchInfo.textSnippet : ""}  </div>

            </div>
            <button style={{cursor: "pointer"}}
            onClick={()=>{dispatchFav({type:"ADDTOFAV",
            
            payload: {book_image: ele.volumeInfo.imageLinks.thumbnail,
                     title: ele.volumeInfo.title,
                     description: ele.searchInfo ? ele.searchInfo.textSnippet : ""}
            
            })}}>Add to Fav</button>
            

        </div>
    )
})
// {ele.searchInfo.textSnippet}
 

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



// const imagesBest = searchBestResults.map((ele, i)=>{
//     return(
//         <div className="bestseller" key={i}>
//             <img className="bestbookimg" src={ele === undefined ? fallBack : ele.book_image}  alt="" />
//             <div className="best-book" style={synopsisStyle}>
//                  <h3>{ele.title}</h3>

//                  <div className="best-over">  
//                       {ele.description}</div>

//             </div>
            
//         </div>
//     )
// })


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
