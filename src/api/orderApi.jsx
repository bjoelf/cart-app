import axios from "axios";

const apiAdress = "https://localhost:44349/api/";

//Properties must match view model, createorder
export default async function createOrder(token, orderList) {
  try {
    //console.log("token:", token);
    console.log("order: ", orderList);

    let response = await axios.post(
      apiAdress + "Order/",
      {
        Items: orderList,
      },
      { headers: { Authorization: `Bearer ${token}` } }
    );
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
