import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: '80%', padding: `0 1rem` }}>
        <div className='banner'>
            <p>Ce site est hébergé sur un serveur local alimenté par de l'énergie solaire</p>
        </div>
      <header style={{ marginBottom: `3.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
            <h3 style={{ display: `inline` }}>MySweetSite</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/about">A PROPOS</ListLink>
          <ListLink>CALENDRIER</ListLink>
          <ListLink to="/contact/">ADHESION & BENEVOLAT</ListLink>
          <ListLink to="/charte/">CHARTE</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}