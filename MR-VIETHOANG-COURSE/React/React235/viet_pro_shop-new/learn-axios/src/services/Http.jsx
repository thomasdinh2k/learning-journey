import axios from "axios"
import { BASE_URL } from "../shared/components/constants/app";

const Http = axios.create({
    // baseUrl: BASE_URL
    baseURL: BASE_URL
})

export default Http;