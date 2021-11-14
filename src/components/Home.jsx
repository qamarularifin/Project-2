import React, {useEffect} from 'react'
import {useState} from 'react'
import SearchBox from './SearchBox'
import { useContext } from 'react'
import { BookContext } from '../contexts/dataContext'

//Carousel
import ReactDom from "react-dom"
import Carousel from "react-elastic-carousel"
import Item from '../carouselStyle'


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];


const Home = (props) =>{

    const {searchBestResults, setSearchBestResults, queryAPIBookBest} = useContext(BookContext)
    
    console.log("xxxxx", searchBestResults)


    useEffect(() => {
        queryAPIBookBest()
       
   
    }, [])

        // New York Bestsellers API call
        // const queryAPIBookBest = async() =>{

        //     try{
        //     const apiKey2 = 'shSl6iPGIgUC7v5kkRnkPY2NbtpruQU8'  //newyork best sellers
        //     const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${apiKey2}`)
        //     const data = await response.json()
        //     //console.log(data.results.books)
        //     setSearchBestResults(data.results.books)
        //     }
        //     catch (error){
        //         console.log(error)
        //     }
           
        // }


    return(
   
        <div className="home-overall">
            <h1 className="home-h1">Find Your Book</h1>
                <SearchBox />

            <div className="carousel">
                <h2>Best Seller</h2>

                        <div className="App">
                            <Carousel breakPoints={breakPoints}>

                                {searchBestResults.map((item,i) =>
                                    <Item key={i}><img key={i} style={{width: "1.6em"}} src={item.book_image} alt="" /></Item> )} 
                            </Carousel>

                        </div>
        
            </div>

                
        </div>
        
        
    )
}

export default Home;