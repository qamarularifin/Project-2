import React, {useState, useRef, useEffect} from 'react'
import Navigation from './components/Navigation'
import Main from './components/Main'
import Collapsible from './components/Collapsible'






export default function App() {
    const [searchTerm, setSearchTerm] = useState("")
    const [masterResult, setMasterResult] = useState([]) // master copy
    const [searchResults, setSearchResults] = useState([])
    const [disableSubmit, setDisableSubmit] = useState(true)
    const [resultsCount, setResultsCount] = useState(10)

    
    //filter
  
    // const allCategories = ["All", ...new Set(searchResults.map(item => item.volumeInfo.categories ? item.volumeInfo.categories[0] : ""))]
    // const allCategories = ["All", ...searchResults.map(item => item.volumeInfo.categories ? item.volumeInfo.categories[0] : "No category")]
  

    const[buttons, setButtons] = useState([])
   

    // useEffect(() => {
    //     setButtons(allCategories)
    // }, [])
    
    console.log("searchResults", searchResults)
    // console.log("allcategories", allCategories)
    console.log("buttons", buttons)
    
   

    //search by author
    const [searchOthers, setSearchOthers] = useState([])

   

    const countRef = useRef()

    const queryGoogleAPIBook = async() =>{
        console.log("triggered button")

        try{
        // Google Book apiKey
        const apiKey = 'AIzaSyDeqdtT7Yzm3EyJeWrqZfVoWcITn2Mohj8' 
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=${resultsCount}`)
        //const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${apiKey2}`) //newyork best sellers
        const data = await response.json()
        setMasterResult(data.items)
        setSearchResults(data.items)

        const allCategories = ["All", ...new Set (data.items.map(item => item.volumeInfo.categories ? item.volumeInfo.categories[0] : "No category"))]
        setButtons(allCategories)
        console.log("allcategories", allCategories)


        // console.log(data.items)
        }  
        catch (error){
            console.log(error)
        }
    }


    const filterTitle = (button) =>{
        
        if(button === "All"){
            console.log("all", searchResults)
            setSearchResults(masterResult)
            return
        }

       
            const filteredData = masterResult.filter(item => item.volumeInfo.categories ? item.volumeInfo.categories[0] === button : undefined )
            console.log("filtered", searchResults)
            setSearchResults(filteredData)

     
        

        // 1st time search for cars
        // searchResult -> ALL RESULT
        // .... STORE ALL RESULT SOMEWHERE ELSE SUCH THAT THE CATEGORY WILL ALWAYS SEARCH WITHIN THIS VARIABLE 
        // user click onc atergory sports car
        //searchResult -> SPROTS CAR
        // user click on Computer category
        //......................
        // tries to search in searchResultArry that contains [sprotscar]
    }




    const queryGoogleAPIBookOthers = async() =>{
        

        try{
        // Google Book apiKey
        const apiKey = 'AIzaSyDeqdtT7Yzm3EyJeWrqZfVoWcITn2Mohj8' 
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${searchTerm}&maxResults=${resultsCount}`)
        const data = await response.json()
        setSearchResults(data.items)

        console.log(data.items)
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
                        setSearchResults={setSearchResults}

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

                        queryGoogleAPIBookOthers={queryGoogleAPIBookOthers}

                        buttons={buttons}
                        filterTitle={filterTitle}

                        />

            
            {/* <Collapsible /> */}
        </div>
    )
}
