import axios from 'axios'

// === Products Root Url ===//

export const customFetch = axios.create({
  baseURL: 'https://saniaopticalbyinam.herokuapp.com/api/v1',
})
// === Products Root Url ===//

export const customFetchProducts = axios.create({
  baseURL: 'https://saniaopticalbyinam.herokuapp.com/api/v1',
})

// User rootURL

export const customFetchUser = axios.create({
  baseURL: 'https://apiprojectinam.herokuapp.com/api/v1/auth',
})
