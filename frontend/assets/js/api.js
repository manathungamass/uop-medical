const API_URL = 'https://musical-disco-696vx5pqpv4jfx47j-3000.app.github.dev'

export async function apiPost(endpoint, body) {
  const token = localStorage.getItem('token')
  const res = await fetch(`${API_URL}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    },
    body: JSON.stringify(body)
  })
  return res.json()
}

export async function apiGet(endpoint) {
  const token = localStorage.getItem('token')
  const res = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
  return res.json()
}
