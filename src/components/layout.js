import React from "react"
import { Link } from "gatsby"
import logo from "../assets/logo.png" 
import { AnchorLink } from "gatsby-plugin-anchor-links";


const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div style={{ padding:"0" }}>
 
      <header id="header">
      <div className='banner'>
            <p>Ce site est hébergé sur un serveur local alimenté par de l'énergie solaire</p>
          
        </div>
        <div className='menu'>
            <Link className='nav-home' to="/">
                <img id='logo' src={logo} alt="Logo" />
            </Link>
            <div className='nav-word'>
            <AnchorLink to="/#news" title="Notre actualité"></AnchorLink>
            <AnchorLink to="/#news" title="Les dates"></AnchorLink>
            <AnchorLink to="/#about" title="à propos"></AnchorLink>
            <AnchorLink to="/#team" title="Notre équipe">
            </AnchorLink>
                    {/* <ListLink>CALENDRIER</ListLink> */}
            <AnchorLink to="/#adhesion" title='Adhésion/Bénévolat'></AnchorLink>
            <AnchorLink to="/#charte" title='Charte'></AnchorLink>
            </div>
        </div>
        
      </header>
      <div id="fixedbutton"> <AnchorLink to="/#header" title='Charte'>T</AnchorLink></div>
      {children}
    </div>
  )
}