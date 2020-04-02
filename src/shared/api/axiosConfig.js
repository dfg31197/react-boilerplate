import axios from 'axios';

const baseURL = 'http://api.moskenes.io';

const axiosClient = axios.create({
    baseURL,
});

axiosClient.interceptors.request.use((function(config) {
    const jwt = localStorage.getItem('jwt');
    if(jwt) {
        config.headers['access-token'] = jwt;
    }
    return config;
}));

axiosClient.interceptors.response.use(function(response){
    console.log("RESPONSE: ", response.config.url, response.data);
    return response;
})


export default axiosClient;