import http from "./http";
const apiEndpoint = `${http.baseURL}/api/book/checkout/`;



export async function checkout(id, reqobj) {
    try {
        const ret = await http.put(`${apiEndpoint}${id}`, reqobj);
        return ret;
    } catch (error) {
        console.log(error);
    }
}