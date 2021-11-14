import React, {useState, useEffect} from 'react'
import { useContext } from 'react'
import { BookContext } from '../contexts/dataContext'
import {Link} from 'react-router-dom'
import ButtonCat from './ButtonCat'
import Spinner from './Spinner/Spinner'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'


 
const Results = () =>{

const {searchTerm, searchResults, setSearchResults, fav, dispatchFav, filterTitle, buttons} = useContext(BookContext)
console.log("searchResults: ", searchResults)
const fallBack = 'https://cdn.browshot.com/static/images/not-found.png'

const [loaded, setLoaded] = useState(false)


useEffect(() => {
    setTimeout(setLoaded, 800, true)
    
}, [searchResults])

    
//Google books results
const images = searchResults.filter((ele)=>{

    
    if (searchTerm === ""){
        
        return ele
    } else if( ele.volumeInfo.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return ele
    }
       
    }).map((ele, i) =>{
        
        return (
        
          
            <div className="results" key={i}>
    
               <img className="book-img" src={ ele.volumeInfo.imageLinks === undefined ? fallBack : ele.volumeInfo.imageLinks.thumbnail}  alt="" />
                <div className="results-book">
                     <h3>{ele.volumeInfo ? ele.volumeInfo.title : ""}</h3>
                     
                     <div className="results-over">  {ele.volumeInfo ? ele.volumeInfo.description : ""}  </div>
                        <a target="_blank" href={ele.volumeInfo.canonicalVolumeLink}>
                    
                        <Button
                            variant="contained"
                            color="info"
                            size="small"
                        >More Info</Button> </a>




                    {
    
                        fav.some((p)=>p.id=== ele.id)?
                            <Button 
                                variant="contained"  
                                size="small"
                                color="error"
                            
                            onClick={()=>{dispatchFav({type: "REMOVEFROMFAV", payload: ele.id})}}>Remove</Button>
                            :
                            
                            <Button 
                                variant="contained"
                                size="small"
                                color="success"

                                onClick={()=>{
    
                                    dispatchFav({type:"ADDTOFAV", 
                                
                                payload: {
                                    book_image: ele.volumeInfo.imageLinks === undefined ? fallBack : ele.volumeInfo.imageLinks.thumbnail,
                                    title: ele.volumeInfo ? ele.volumeInfo.title : "",
                                    description: ele.volumeInfo ? ele.volumeInfo.description : "",
                                    link: ele.volumeInfo.canonicalVolumeLink,
                                    author: ele.volumeInfo.authors ? ele.volumeInfo.authors[0] : "",
                                    id: ele.id
                    
                                          }
    
                       })}} >Add to Fav</Button>
    
                    }
                     
                        <Link to={"/results/" + ele.id} >
                        
                        <Button
                          
                            variant="contained"
                            size="small"
                            color="inherit"

                        >Details</Button>  </Link> 
    
                </div>
               
            </div>
                 
            
            )
        
          
        
    })

   
   
    return(
        <div className="results-overall">
            <h1>Results </h1>
            {!loaded && <Spinner>Loading Results...</Spinner>}

            
            <ButtonCat 
                filterTitle={filterTitle}
                buttons={buttons}
                />
                
            
              
                 <div className="results-image">
                      {images.length < 1 ? <h1 className="results-empty">Results is Empty!</h1> : images} 
             </div>
            
        </div>
    )
}
 
export default Results;




// //     <div className="collapsible">
// //     <button className="toggle" onClick={()=>setIsOpen(!isOpen)}>Toggle</button>
// //    { isOpen && <div className="content">Some content</div>  }

// // </div>




// Backup

///////////////////////////////////////////////
    
 //Google books results
// const images = searchResults.map((ele, i)=>{
//     return(
        
//         <div className="results" key={i}>

      

//            <img className="book-img" src={ ele.volumeInfo.imageLinks === undefined ? fallBack : ele.volumeInfo.imageLinks.thumbnail}  alt="" />
//             <div className="results-book">
//                  <h3>{ele.volumeInfo ? ele.volumeInfo.title : ""}</h3>
//                  <a target="_blank" href={ele.volumeInfo.canonicalVolumeLink}><button>More Info</button> </a>
//                  <div className="results-over">  {ele.volumeInfo ? ele.volumeInfo.description : ""}  </div>
                
//                 {

//                     fav.some((p)=>p.title=== ele.volumeInfo.title)?
//                         <button style={{backgroundColor: "red"}} onClick={()=>{dispatchFav({type: "REMOVEFROMFAV", payload: ele.volumeInfo.title})}}>Remove</button>
//                         :
                        
//                         <button style={{backgroundColor: "green"}}
//                             onClick={()=>{

//                                 dispatchFav({type:"ADDTOFAV", 
                            
//                             payload: {
//                                 book_image: ele.volumeInfo.imageLinks === undefined ? fallBack : ele.volumeInfo.imageLinks.thumbnail,
//                                 title: ele.volumeInfo ? ele.volumeInfo.title : "",
//                                 description: ele.volumeInfo ? ele.volumeInfo.description : "",
//                                 link: ele.volumeInfo.canonicalVolumeLink,
//                                 author: ele.volumeInfo.authors ? ele.volumeInfo.authors[0] : ""
                
//                                       }

//                    })}} >Add to Fav</button>

//                 }
                 
//                     <Link to={"/results/" + ele.id} ><button>Details</button></Link>

//             </div>
           
//         </div>
//     )
// })

 

//     return(
//         <div className="results-overall">
//             <h1>Results </h1>
//                      {/* <Filter 
//                         searchResults={searchResults}
//                         setSearchResults={setSearchResults} /> */}
//                  <div className="results-image">
//                  {images}
//              </div>
//         </div>
//     )
// }

// export default Results;

/////////////////////////////////////////////////////////////


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


