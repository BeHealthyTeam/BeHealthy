import axios from "axios";

const api = axios.create({
    baseURL:'http://ec2-54-232-150-4.sa-east-1.compute.amazonaws.com:8080/' //10.0.2.2 -> android emulator para localhost
});

export default api;