import http from "./http";
const apiEndpoint = `${http.baseURL}/api/auth`;



export async function signin(reqobj) {

    const ret = await http.post(apiEndpoint, reqobj);
    return ret;


}