import { useContext, useEffect, useReducer, createContext } from "react";
import { addressReducer } from "./Reducer";
import { getUserAddressHandler, addNewAddressHandler } from "./services/utils";

const AddressContext = createContext();

const AddressProvider = ({ children }) => {
  const [addressState, addressDispatch] = useReducer(addressReducer, {
    address: [],
  });

  useEffect(() => {
    (async () => {
      try {
        const response = await getUserAddressHandler();
        if (response.status === 200) {
          addressDispatch({
            type: "GET_ADDRESS",
            payload: response?.data?.addresses,
          });
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const addNewAddress = async (address) => {
    try {
      const response = await addNewAddressHandler(address);
      if (response.status === 201) {
        addressDispatch({
          type: "ADD_ADDRESS",
          payload: response?.data?.addresses,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AddressContext.Provider
      value={{
        addresses: addressState?.address,
        addNewAddress,
      }}>
      {children}
    </AddressContext.Provider>
  );
};

const useAddress = () => useContext(AddressContext);

export { AddressProvider, useAddress };
