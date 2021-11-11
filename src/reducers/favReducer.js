

const favReducer = (state, action) =>{
    switch(action.type){
        case "ADDTOFAV":
            return [action.payload,
                    ...state]
        case "REMOVEFROMFAV":
            const filtered = state.filter((ele,i)=> ele.title !== action.payload)
            return filtered
        default:
            return state
    }
}

export default favReducer;