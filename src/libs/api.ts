import axios from 'axios';

export const api = axios.create({
  baseURL: "https://nlwimpulsereturnapi-production.up.railway.app"
})