import React from 'react'
import Navigation from './components/Navigation'
import Main from './components/Main'
import Collapsible from './components/Collapsible'


export default function App() {
    return (
        <div className="App">
            <Navigation />
            <Main />
            <Collapsible />
        </div>
    )
}
