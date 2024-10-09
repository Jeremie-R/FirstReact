import React from "react"
import ReactDOM from "react-dom/client"
import reactIcon from "../images/reactjs-icon.svg"
import '../style.css'

export default function Navbar() {
    return(
        <div className="Navbar" >
            <img src={reactIcon} alt="" />
            <h1>ReactFacts</h1>
        </div>
    )
}