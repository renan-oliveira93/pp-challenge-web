import axios from 'axios';

const apiAgents = axios.create({
    baseURL: "https://pp-api-desafio.herokuapp.com/agents/",
});

export default apiAgents;