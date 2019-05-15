import axios from 'axios';


const http = axios.create({
  baseURL: "https://api-admin-staging.oyster.ai",
  auth: {
    username: "texts_tool",
    password: "V7y{PJiZ33P+wJ/"
  }
});


export default http;
