import axios from "axios";

let apiUrl = "http://192.168.1.207:44349/api/";
/*
export function setApiUrl(url) {
    apiUrl = url;
}
*/

var userToken = null;
export function getUserToken() {
  return userToken;
}

var userId = null;
export function getUserId() {
  return userId;
}

export default async function logInUser(login) {
  try {
    let response = await axios.post(apiUrl + "Jwt/login/", {
      UserName: login.userName,
      Password: login.password,
    });
    console.log("loginResponse", response);
    let json = await response.data;
    console.log("loginResponsJson", json);
    userToken = json.token;
    userId = json.userId;
    return "Ok";
  } catch (e) {
    console.log("Error!", e);
    return "Bad";
  }
}

export async function applyRegistration(newuser) {
  //Denna metod är anropet till
  // public async Task<IActionResult> Register(RegisterUser userReg)
  // i backend.

  try {
    console.log("api ApplyRegistration");
    let response = await axios.post(apiUrl + "RegUser/", {
        FirstName: newuser.Firstname,
        LastName: newuser.LastName,
        StreetAdress: newuser.StreetAdress,
        StreetNumber: newuser.StreetNumber,
        PostalCode: newuser.PostalCode,
        City: newuser.City,
        Email: newuser.Email,
        Phone: newuser.PhoneNumber,
        Password: newuser.password,
    });
    console.log("ApplyRegistration Respons:", response);
    let json = await response.data;

    return json;
  } catch (e) {
    console.log("Error", e);
  }
}

