import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "og-jersey",
    name: "OG Jersey",
    size: ["XS", "S", "M", "L", "XL", "XXL"],
    price: "8999",
    description:
      "Official Jersey of OG - The home of the Only Back to Back The International Champions.",
    imageUrl:
      "https://res.cloudinary.com/dut75albw/image/upload/v1647682043/AegisStore/products/jerseys/OGJersey_ac9bti.webp",
    aegisAssured: true,
    discount: "27",
    count: 45,
    categoryName: "jersey",
  },
  {
    _id: uuid(),
    title: "nigma-jersey",
    name: "Nigma Jersey",
    size: ["XS", "S", "M", "L", "XL", "XXL"],
    price: "8999",
    description: "Official Jersey of Nigma Galaxy - Stars Align",
    imageUrl:
      "https://res.cloudinary.com/dut75albw/image/upload/v1647682043/AegisStore/products/jerseys/NigmaJersey_frzs49.webp",
    aegisAssured: true,
    discount: "26",
    count: 39,
    categoryName: "jersey",
  },
];
