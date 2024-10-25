import axios from "axios";


// Set config defaults when creating the instance
const nodeServer = axios.create({
    baseURL: 'https://kiarabackend.onrender.com'
  });

  export default nodeServer