import React from "react"
import ReactDOM from "react-dom/client"
import '../style.css'
import ReactBg from "../images/reactjs-large.svg"


export default function Main() {
    return (
    <div className="Main">
        <h2>Fun facts about React</h2>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 200K stars on GitHub</li>
            <li>Is maintained by Meta</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
    )
}

