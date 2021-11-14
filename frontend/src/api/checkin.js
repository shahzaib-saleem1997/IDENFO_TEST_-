import http from "./http";
const apiEndpoint = `${http.baseURL}/api/book/checkin/`;



export async function checkin(id) {
    try {
        const ret = await http.put(`${apiEndpoint}${id}`);
        return ret;
    } catch (error) {
        console.log(error);
    }
}