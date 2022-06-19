import axios from "axios";

const getUserAddressHandler = () =>
  axios.get("/api/user/addresses", {
    headers: {
      authorization: JSON.parse(localStorage.getItem("user-token")),
    },
  });

const addNewAddressHandler = (address) => {
  return axios.post(
    "/api/user/addresses",
    { address },
    {
      headers: {
        authorization: JSON.parse(localStorage.getItem("user-token")),
      },
    }
  );
};

export { getUserAddressHandler, addNewAddressHandler };
