import axios from "axios";

let apiUrl = "https://localhost:44349/api/";
/*
export function setApiUrl(url) {
    apiUrl = url;
}
*/

var userToken = null;
export function getUserToken() {
  return userToken;
}

//Metod för att nolla usertoken

var username = null;
export function getUserName() {
  return username;
}

export default async function logInUser(login) {
  console.log("login called", login);
  username = login.userName;
  console.log("login username", getUserName);
  try {
    let response = await axios.post(apiUrl + "Jwt/login/", {
      UserName: login.userName,
      Password: login.password,
    });
    console.log("loginResponse", response);

    //Respons:
    let json = await response.data;
    console.log("loginResponsJson", json);
    userToken = json.token;
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

