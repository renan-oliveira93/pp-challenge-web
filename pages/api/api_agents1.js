import axios from 'axios';

const apiAgents1 = axios.create({
    baseURL: "https://pp-api-desafio.herokuapp.com/agent/1",
});

export default apiAgents1;