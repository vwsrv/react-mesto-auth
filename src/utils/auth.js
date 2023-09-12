const BASE_URL = 'https://auth.nomoreparties.co'
  
export function register(email, password) {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email, password})
  })
  .then((res) => {
    return res.json()
  })
}

export function authorize(email, password) {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then((res) => {
    return res.json()
  })
};

export function getContent(jwt) {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${jwt}`
    },
  })
  .then((res) => {
    return res.json()
  })
}