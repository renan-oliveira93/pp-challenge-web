import axios from 'axios';

const apiAgents1 = axios.create({
    baseURL: "https://pp-api-desafio.herokuapp.com/agent/",
});

export default apiAgents1;