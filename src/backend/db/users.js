import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
    addresses: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Tahir",
    lastName: "Ahmed",
    email: "tahirahmedt97@gmail.com",
    password: "kolaveridha",
    addresses: [
      {
        name: "Tahir Ahmed T",
        type: "work",
        addressLine1: "6879 RMZ Ecospace",
        addressLine2: "Kadubessanahalli",
        addressLine3: "",
        city: "Bengaluru",
        pincode: "560064",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
