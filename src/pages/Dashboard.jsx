import React, { useState } from 'react'
import { post } from '../api/api'

export default function Dashboard() {
  const [form, setForm] = useState({ name: '', email: '', university: '' })
  const [status, setStatus] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    try {
      await post('/students', form)
      setStatus('success')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section>
      <div className="form-card">
        <h2 style={{textAlign:'center',marginBottom:16}}>Student Registration</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />
          <input type="email" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required />
          <input type="text" placeholder="University" value={form.university} onChange={e=>setForm({...form,university:e.target.value})} required />
          <button className="ce-btn" type="submit">Submit</button>
        </form>
        <div style={{marginTop:12,textAlign:'center'}}>
          {status === 'loading' && <p style={{color:'#ff2d2d'}}>Sending...</p>}
          {status === 'success' && <p style={{color:'#fff'}}>Submitted — we will contact you.</p>}
          {status === 'error' && <p style={{color:'#ff2d2d'}}>Submission failed. Try again later.</p>}
        </div>
      </div>
    </section>
  )
}
