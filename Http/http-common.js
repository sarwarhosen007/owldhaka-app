import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.0.105:8000/api",
  headers: {
    'Accept': '*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
});