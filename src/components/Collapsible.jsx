import React, {useState} from 'react'

const Collapsible = () =>{

    const [isOpen, setIsOpen] = useState(false)

    return(
        <div className="collapsible">
            <button className="toggle" onClick={()=>setIsOpen(!isOpen)}>Toggle</button>
           { isOpen && <div className="content">Some content</div>  }
        
        </div>
    )
}

export default Collapsible;