import axios from "axios";
import { getToken } from "./utils/utils";

const http = axios.create({
    baseURL: "https://api.spotify.com/v1/browse/"
})

http.interceptors.request.use(config => {
   const authToken = localStorage.getItem("token");
   if(authToken) {
    config.headers.Authorization = `Bearer ${authToken}`
   } else {
    getToken();
   }
   return config;
});

export default http;