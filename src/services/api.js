import axios from "axios";

const api = axios.create({
    // baseURL:'http://10.0.2.2:8080/' //-> android emulator para localhost
    baseURL: 'https://d1niwswfj4.execute-api.sa-east-1.amazonaws.com/production'  //-> AWS gateway
});

export default api;