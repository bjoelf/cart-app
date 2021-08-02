import axios from "axios";

const apiAdress = "https://localhost:44386/api/";


//Properties must match view model, createorder
export async function createOrder(order) {
    try {
      console.log("api createOrder");
      let response = await axios.post(apiAdress + "Api/", {
        //Name: person.Name,
        //Phone: person.Phone,
        //CityId: person.CityId, //ändrade från City
        //Country: person.Country,
        //Language: person.Language,
      });
      console.log("createOrder Respons:", response);
      let json = await response.data;
  
      return json;
    } catch (e) {
      console.log("Error", e);
    }
  }

  