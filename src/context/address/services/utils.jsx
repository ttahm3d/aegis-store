import axios from "axios";

const getUserAddressHandler = async () =>
  await axios.get("/api/user/addresses", {
    headers: {
      authorization: JSON.parse(localStorage.getItem("user-token")),
    },
  });

const addNewAddressHandler = async (address) =>
  await axios.get(
    "/api/user/addresses",
    { address },
    {
      headers: {
        authorization: JSON.parse(localStorage.getItem("user-token")),
      },
    }
  );

export { getUserAddressHandler, addNewAddressHandler };
