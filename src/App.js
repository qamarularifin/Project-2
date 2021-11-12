import React, {useState, useRef} from 'react'
import Navigation from './components/Navigation'
import Main from './components/Main'
import Collapsible from './components/Collapsible'



export default function App() {
    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [disableSubmit, setDisableSubmit] = useState(true)
    const [resultsCount, setResultsCount] = useState(10)

    const countRef = useRef()

    const queryGoogleAPIBook = async() =>{

        try{
        // Google Book apiKey
        const apiKey = 'AIzaSyDeqdtT7Yzm3EyJeWrqZfVoWcITn2Mohj8' 
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=${resultsCount}`)
        //const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${apiKey2}`) //newyork best sellers
        const data = await response.json()
        setSearchResults(data.items)

        // console.log(data.items)
        }  
        catch (error){
            console.log(error)
        }
    }

    return (
        <div className="App">
            <Navigation searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        disableSubmit={disableSubmit}
                        setDisableSubmit={setDisableSubmit}
                        queryGoogleAPIBook={queryGoogleAPIBook}

            />
  
            <Main       searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        searchResults={searchResults}
                        setSearchResults={setSearchResults}
                        disableSubmit={disableSubmit}
                        setDisableSubmit={setDisableSubmit}
                        queryGoogleAPIBook={queryGoogleAPIBook}
                        countRef={countRef}
                        resultsCount={resultsCount}
                        setResultsCount={setResultsCount}

                     
                      
                      
                        />
            {/* <Collapsible /> */}
        </div>
    )
}
