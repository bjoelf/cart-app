import axios from "axios";

const apiAdress = "https://localhost:44349/api/";

//Properties must match view model, createorder
export default async function createOrder(user, order) {
  try {
    console.log("api createOrder");
    console.log("user:", user);
    console.log("order: ", order);

    let response = await axios.post(apiAdress + "Order/", {

      //order items array... ??

    });
    console.log("createOrder Respons:", response);
    let json = await response.data;

    return json;
  } catch (e) {
    console.log("Error", e);
  }
  return "Bad";
}

export async function getOrdersByUser(user) {
  try {
    console.log("api myOrders", user);

    let response = fetch(apiAdress + "orders/").then((data) => data.json());

    console.log("myOrders Respons:", response);

    let json = await response.data;
    return json;
  } catch (e) {
    console.log("Error", e);
  }
}