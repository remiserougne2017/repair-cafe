import React from "react"
import "./css/header.css"

export default function Header() {
  return (
    <div>
        <div className='banner'>
            <p>Ce site est hébergé sur un serveur local alimenté par de l'énergie solaire</p>
        </div>
        <div className='menu'>
            <div className='logo'>Logo</div>
            <div className='menu nav'>
                <h3>A PROPOS</h3>
                <h3>CALENDRIER</h3>
                <h3>ADHESION & BENEVOLAT</h3>
                <h3>CHARTE</h3>
            </div>
        </div>
    </div>
  )
}

