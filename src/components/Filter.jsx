// import React, {useState, useEffect} from 'react'
// import { useContext } from 'react'
// import { BookContext } from '../contexts/dataContext'

// import Button from './Button'



// const Filter = (props) => {
//     const {searchResults, setSearchResults} = props

   
    
//     // const [resultsItem, setResultsItem] = useState(searchResults) 

//     const allCategories = ['All', ...new Set(searchResults.map(item => item.volumeInfo.categories ? item.volumeInfo.categories[0] : ""))]
//     const [buttons, setButtons] = useState(allCategories)
//     console.log("searchResults", searchResults)
//     // console.log("resultsItem", resultsItem)


//     console.log("allCategories", allCategories)
//     console.log("buttons", buttons)


//         const filter = (button) =>{

//             if (button === "All"){
//                 return searchResults
                
//             }
    
          
//             const filteredData = searchResults.filter(item => item.volumeInfo.categories ? item.volumeInfo.categories[0] === button : undefined)
//             console.log("filtereddata", filteredData)
//             setSearchResults(filteredData)
          
    
//         }
      

//     return (
   
//         <div>
            
//         <Button 
//             filter={filter}
//             buttons={buttons}
//             />
//           </div>

    
//     )
// }

// export default Filter
