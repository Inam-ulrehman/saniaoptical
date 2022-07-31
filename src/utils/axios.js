import axios from 'axios'

// === Products Root Url ===//

const customFetchProducts = axios.create({
  baseURL: 'https://saniaopticalbyinam.herokuapp.com/api/v1/products/static',
})

// User rootURL

export const customFetchUser = axios.create({
  baseURL: 'https://apiprojectinam.herokuapp.com/api/v1/auth',
})

//  default //

export default customFetchProducts
