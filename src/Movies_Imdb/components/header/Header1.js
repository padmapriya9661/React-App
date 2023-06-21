import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header1 = () => {
    return (
        <>
        <div className="header">
            <div className="headerCenter">
                <h1><b>Movies</b></h1>
            <div className="headerLeft">
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span><b>Popular</b></span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span><b>Upcoming</b></span></Link>
            </div>
            </div>
        </div>
        </>
    )
}

export default Header1