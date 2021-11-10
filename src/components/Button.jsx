import React from 'react'

const Button = (props) => {
    const {buttons, filter} = props
    
    return (
        <div>
            {
                buttons.map((cat, i) =>{
                    return (
                        <button key={i} type="button" onClick={()=>filter(cat)}>{cat}</button>
                    )
                })
            }
        </div>
    )
}

export default Button
