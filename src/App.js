import React, {useState} from 'react'
import Navigation from './components/Navigation'
import Main from './components/Main'
import Collapsible from './components/Collapsible'



export default function App() {
    const [searchTerm, setSearchTerm] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [hasSearched, setHasSearched] = useState(true)
    const [disableSubmit, setDisableSubmit] = useState(true)

    const queryGoogleAPIBook = async() =>{
        // Google Book apiKey
        const apiKey = 'AIzaSyDeqdtT7Yzm3EyJeWrqZfVoWcITn2Mohj8' 
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=${apiKey}&maxResults=20`)
        //const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${apiKey2}`) //newyork best sellers
        const data = await response.json()
        setSearchResults(data.items)
        console.log(data.items)
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
                        hasSearched={hasSearched}
                        setHasSearched={setHasSearched}
                        disableSubmit={disableSubmit}
                        setDisableSubmit={setDisableSubmit}
                        queryGoogleAPIBook={queryGoogleAPIBook}
                      
                        />
            {/* <Collapsible /> */}
        </div>
    )
}
