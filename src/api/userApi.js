import axios from "axios";

const apiUrl = "https://localhost:44386/api/Jwt";

var userToken = null;
export function getUserToken() {
    return userToken;
}

export async function loginUser(login) {
    try {
        let response = await axios.post(apiUrl + "/login", {
            UserName: login.userName,
            Password: login.password
        });
        console.log("loginResponse", response);
        let json = await response.data;
        console.log("loginResponsJson", json);
        userToken = json.userToken;
        return "Ok";
    } catch (e) {
        console.log('Error!', e);
        return "Bad"
    }
}