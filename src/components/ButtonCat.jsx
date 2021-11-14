import React from 'react'
import Button from '@mui/material/Button'

const ButtonCat = (props) => {
    const {buttons, filterTitle} = props
    
    return (
        <div>
            {
                buttons.map((cat, i) =>{
                    return (
                        <Button 
                            variant="outlined" 
                            size="small"
                            color="inherit"
                        
                        
                        key={i} type="button" onClick={()=>filterTitle(cat)}>{cat}</Button>
                    )
                })
            }
        </div>
    )
}

export default ButtonCat
