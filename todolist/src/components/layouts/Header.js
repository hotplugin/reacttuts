import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link  style={linkStyle} to="/">Home</Link> |  
      <Link to="/about" style={linkStyle}> About</Link>
      </header>
  )
}

const linkStyle={
  textDecoration: 'none',
  color: '#fff'
}

const headerStyle = {
  color : '#fff',
  background : '#333',
  textAlign: 'center',
  padding : '10px'
}
export default Header;
