import axios from 'axios'

// === Products Root Url ===//

export const customFetch = axios.create({
  baseURL: 'https://saniaopticalbyinam.herokuapp.com/api/v1',
})
// === Products Root Url ===//

export const customFetchProducts = axios.create({
  baseURL: 'https://saniaopticalbyinam.herokuapp.com/api/v1',
})
