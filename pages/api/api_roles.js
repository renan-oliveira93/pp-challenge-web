import axios from 'axios';

const apiRoles = axios.create({
    baseURL: "https://pp-api-desafio.herokuapp.com/roles",
});

export default apiRoles;