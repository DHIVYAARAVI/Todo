import React from 'react'
import { Link } from 'react-router-dom'
import './homepage.css'

export default function Homepage() {
    return (
        <div className="app">
            <h1 className="heading">Welcome to Todo App</h1>
            <Link to='/users' className="button">Click Here</Link>            
        </div>
    )
}
