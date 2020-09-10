import Axios from 'axios'

const api = Axios.create({
  baseURL: 'localhost:3000'
})

export default api