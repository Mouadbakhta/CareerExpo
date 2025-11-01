const API_BASE = import.meta.env.VITE_API_BASE || 'http://localhost:8080'

async function request(path, opts = {}) {
  const url = `${API_BASE}${path}`
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...opts,
  })
  if (!res.ok) throw new Error(`API error: ${res.status}`)
  // try parse json, but some endpoints may return empty
  const text = await res.text()
  try { return text ? JSON.parse(text) : null } catch { return text }
}

export const get = (path) => request(path, { method: 'GET' })
export const post = (path, body) => request(path, { method: 'POST', body: JSON.stringify(body) })

export default { get, post }
