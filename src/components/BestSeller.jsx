import React, {useEffect} from 'react'
import { useContext } from 'react'
import { BookContext } from '../contexts/dataContext'
import {Link} from "react-router-dom"

const BestSeller = () =>{

    const {searchTerm, setSearchTerm, searchBestResults, setSearchBestResults, isOpen, setIsOpen, fav, dispatchFav} = useContext(BookContext)

    console.log("best-results: ", searchBestResults)
 
    useEffect(() => {
        queryAPIBookBest()
   
    }, [])

        // New York Bestsellers API call
        const queryAPIBookBest = async() =>{

            try{
            const apiKey2 = 'shSl6iPGIgUC7v5kkRnkPY2NbtpruQU8'  //newyork best sellers
            const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${apiKey2}`)
            const data = await response.json()
            //console.log(data.results.books)
            setSearchBestResults(data.results.books)
            }
            catch (error){
                console.log(error)
            }
           
        }

        const fallBack = 'https://cdn.browshot.com/static/images/not-found.png'

  
        // const toggleSynopsis = ()=>{
        //         setIsOpen(!isOpen)
        //     }
           
     

        const imagesBest = searchBestResults.map((ele, i)=>{
            return(
                <div className="bestseller" key={i}>
                    <img className="bestbook-img" src={ele === undefined ? fallBack : ele.book_image}  alt="" />
                    <div className="best-book">
                         <h3 >{ele.title}</h3>
                         <a target="_blank" href={ele.amazon_product_url}><button>More Info</button> </a>
                         <div className="best-over">  
                              {ele.description}
                        </div>
                              <button 
                                onClick={()=>{dispatchFav({type:"ADDTOFAV", 
                                
                                payload: {book_image: ele.book_image,
                                        title: ele.title,
                                        description: ele.description,
                                        link: ele.amazon_product_url,
                                        unique: i}
                   
                                           })}} >Add to Fav</button>

                              <Link to={"/bestseller/" + ele.title} ><button>Details</button></Link>
                    </div>
                   
                    
                </div>
            )
        })


    //     <div className="collapsible">
    //     <button className="toggle" onClick={()=>setIsOpen(!isOpen)}>Toggle</button>
    //    { isOpen && <div className="content">Some content</div>  }
    
    // </div>

    return (
        <div className="bestseller-overall">
            <h1>New York Best Seller</h1>
                 <div className="bestseller-image">
                         {imagesBest}
                        

                </div>
        </div>
    )
}

export default BestSeller;
