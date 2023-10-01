import axios from "./customize-axios";


type login={
    email:string
    password:string
}
const loginApi = (User:login) => {
    return axios.post("/api/login", User);
}
export {loginApi};