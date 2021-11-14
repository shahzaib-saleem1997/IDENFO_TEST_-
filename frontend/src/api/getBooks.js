import http from "./http";
import axios from 'axios';
const apiEndpoint = `${http.baseURL}/api/book/getBooks`;



export async function getBooks() {
    try {
        const ret = await http.get(apiEndpoint);
        return ret;
    } catch (error) {
        console.log(error);
    }
}