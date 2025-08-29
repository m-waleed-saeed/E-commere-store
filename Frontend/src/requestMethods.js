import axios from "axios";

const BASE_URL = 'http://localhost:8000/api/v1';

const userRequest = axios.create({
    baseURL: BASE_URL
})

export default userRequest;