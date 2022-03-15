import axios from "axios";

const api = axios.create({
  baseURL: process.env.MARVEL_API_URL,
  params: {
    apiKey: process.env.MARVEL_API_KEY,
    ts: process.env.MARVEL_TS,
    hash: process.env.MARVEL_HASH
  }
})

export { api }