import React from 'react'

export default function Footer() {
  return (
    <footer style={{padding:'1rem',borderTop:'1px solid #eee',marginTop:40}}>
      <div style={{maxWidth:960,margin:'0 auto',textAlign:'center'}}>
        <p style={{margin:0}}>© {new Date().getFullYear()} CareerExpo — Built with ❤️</p>
      </div>
    </footer>
  )
}
