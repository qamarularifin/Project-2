import React from 'react'

const Button = (props) => {
    const {buttons, filterTitle} = props
    
    return (
        <div>
            {
                buttons.map((cat, i) =>{
                    return (
                        <button key={i} type="button" onClick={()=>filterTitle(cat)}>{cat}</button>
                    )
                })
            }
        </div>
    )
}

export default Button
