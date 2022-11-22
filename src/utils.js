import axios from 'axios';

const contestapi = axios.create({
    baseURL:"https://kontests.net/api/v1",
    timeout:15000
});

export default contestapi;