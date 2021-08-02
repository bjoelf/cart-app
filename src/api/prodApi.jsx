const apiAdress = "https://localhost:44349/api/";

export default function getProducts() {
  try {
    console.log("api getProducts");
    let response = fetch(apiAdress + "Products/").then((data) => data.json());
    console.log("api getProducts response", response);
    return response;

  } catch (e) {
    console.log("Error", e);
  }
}
