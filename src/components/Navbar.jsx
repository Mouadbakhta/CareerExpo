import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="logo-wrap">
          <img src="/cexpo.png" alt="cexpoN logo" className="logo" style={{height:44,marginRight:12}} />
          <Link to="/" style={{display:'flex',alignItems:'center',gap:10,textDecoration:'none',color:'inherit'}}>
            <strong style={{fontSize:'1.25em',color:'#fff',fontWeight:700,letterSpacing:'0.04em'}}>cexpoN</strong>
          </Link>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
      </div>
    </header>
  )
}
