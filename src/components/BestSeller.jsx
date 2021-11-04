import React, {useEffect} from 'react'
import { useContext } from 'react'
import { BookContext } from '../contexts/dataContext'

const BestSeller = () =>{

    const {searchTerm, setSearchTerm, searchBestResults, setSearchBestResults} = useContext(BookContext)

 

    useEffect(() => {
        queryAPIBookBest()
   
    }, [])

        // New York Bestsellers API call
        const queryAPIBookBest = async() =>{

            try{
            const apiKey2 = 'shSl6iPGIgUC7v5kkRnkPY2NbtpruQU8'  //newyork best sellers
            const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${apiKey2}`)
            const data = await response.json()
            console.log(data.results.books)
            setSearchBestResults(data.results.books)
            }
            catch (error){
                console.log(error)
            }
           
        }

        const fallBack = 'https://cdn.browshot.com/static/images/not-found.png'
     

        const imagesBest = searchBestResults.map((ele, i)=>{
            return(
                <div key={i}>
                    <p>{ele.title}</p>
                    {/* <img className="bestbookimg" src={ele.book_image}  alt="" /> */}
                    <img className="bestbookimg" src={ele === undefined ? fallBack : ele.book_image}  alt="" />
                    
                </div>
            )
        })

    return (
        <div className="bestseller">
            <h1>Best Seller</h1>
                 <div className="bestseller-image">
                         {imagesBest}
                        

                </div>
        </div>
    )
}

export default BestSeller;
