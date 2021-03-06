const API = "http://cloud.ideoholics.com:8006/";

//create delivery request
export const createDelivery = (deliveryReq) => {
  return fetch(`${API}/parts-delivery/delivery-request/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(deliveryReq),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
