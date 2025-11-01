import React from 'react'

export default function Button({ children, onClick, type = 'button', className = '' }) {
  return (
    <button type={type} onClick={onClick} className={`ce-btn ${className}`} style={{padding:'0.5rem 1rem',borderRadius:6}}>
      {children}
    </button>
  )
}
