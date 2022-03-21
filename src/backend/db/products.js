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
    price: "6499",
    imageUrl:
      "https://res.cloudinary.com/dut75albw/image/upload/v1647682043/AegisStore/products/jerseys/OGJersey_ac9bti.webp",
    aegisAssured: true,
    discount: "16",
    count: 45,
    categoryName: "jersey",
  },
  {
    _id: uuid(),
    title: "nigma-jersey",
    name: "Nigma Jersey",
    price: "5999",
    imageUrl:
      "https://res.cloudinary.com/dut75albw/image/upload/v1647682043/AegisStore/products/jerseys/NigmaJersey_frzs49.webp",
    aegisAssured: true,
    discount: "16",
    count: 24,
    categoryName: "jersey",
  },
  {
    _id: uuid(),
    title: "og-sweathsirt",
    name: "OG Sweatshirt",
    price: "9499",
    imageUrl:
      "https://res.cloudinary.com/dut75albw/image/upload/v1647682090/AegisStore/products/hoodies/OGJacket_m6aett.webp",
    aegisAssured: false,
    discount: "11",
    count: 8,
    categoryName: "hoodie",
  },
  {
    _id: uuid(),
    title: "razer-eyboard",
    name: "Razer Keyboard",
    price: "4999",
    imageUrl:
      "https://res.cloudinary.com/dut75albw/image/upload/v1647683341/AegisStore/products/keyboards/RazerKeyboard_kwqldy.webp",
    aegisAssured: false,
    discount: "20",
    count: 10,
    categoryName: "keyboard",
  },
  {
    _id: uuid(),
    title: "astralis-hoodie",
    name: "Astralis Hoodie",
    price: "9499",
    imageUrl:
      "https://res.cloudinary.com/dut75albw/image/upload/v1647682090/AegisStore/products/hoodies/Astralis_h9wuju.webp",
    aegisAssured: false,
    discount: "21",
    count: 4,
    categoryName: "hoodie",
  },
  {
    _id: uuid(),
    title: "eg-jersey",
    name: "EG Jersey",
    price: "5499",
    imageUrl:
      "https://res.cloudinary.com/dut75albw/image/upload/v1647682043/AegisStore/products/jerseys/EgJersey_fu5hq1.webp",
    aegisAssured: true,
    discount: "21",
    count: 20,
    categoryName: "jersey",
  },
  {
    _id: uuid(),
    title: "logitech-eyboard",
    name: "Logitech Keyboard",
    price: "2999",
    imageUrl:
      "https://res.cloudinary.com/dut75albw/image/upload/v1647683341/AegisStore/products/keyboards/LogitechKeyboard_jf946c.webp",
    aegisAssured: false,
    discount: "21",
    count: 50,
    categoryName: "keyboard",
  },
  {
    _id: uuid(),
    title: "team-liquid-hoodie",
    name: "Team Liquid Hoodie",
    price: "10999",
    imageUrl:
      "https://res.cloudinary.com/dut75albw/image/upload/v1647750565/AegisStore/products/hoodies/TeamLiquidHoodie_xf39pk.webp",
    aegisAssured: true,
    discount: "21",
    count: 31,
    categoryName: "hoodie",
  },
  {
    _id: uuid(),
    title: "hyper-x-keyboard",
    name: "HyperX Keyboard",
    price: "4499",
    imageUrl:
      "https://res.cloudinary.com/dut75albw/image/upload/v1647683341/AegisStore/products/keyboards/HyperXKeyboard_telwpp.webp",
    aegisAssured: TrustedTypePolicyFactory,
    discount: "11",
    count: 20,
    categoryName: "keyboard",
  },
  {
    _id: uuid(),
    title: "secret-lab-chair",
    name: "Secret Lab Chair",
    price: "15999",
    imageUrl:
      "https://res.cloudinary.com/dut75albw/image/upload/v1647682690/AegisStore/products/chairs/SecretLabChair_viuvv1.webp",
    aegisAssured: true,
    discount: "41",
    count: 11,
    categoryName: "chair",
  },
  {
    _id: uuid(),
    title: "virtus-pro-jersey",
    name: "Virtus Pro Jersey",
    price: "4699",
    imageUrl:
      "https://res.cloudinary.com/dut75albw/image/upload/v1647706874/AegisStore/products/jerseys/VirtusProJersey_qa2o1n.webp",
    aegisAssured: false,
    discount: "20",
    count: 20,
    categoryName: "jersey",
  },
  {
    _id: uuid(),
    title: "nigma-galaxy-hoodie",
    name: "Nigma Galaxy Hoodie",
    price: "9299",
    imageUrl:
      "https://res.cloudinary.com/dut75albw/image/upload/v1647682090/AegisStore/products/hoodies/NigmaHoodie_d26irz.webp",
    aegisAssured: false,
    discount: "10",
    count: 20,
    categoryName: "hoodie",
  },
  {
    _id: uuid(),
    title: "team-secret-jersey",
    name: "Secret Jersey",
    price: "5399",
    imageUrl:
      "https://res.cloudinary.com/dut75albw/image/upload/v1647682044/AegisStore/products/jerseys/SecretJersey_ohi8vy.webp",
    aegisAssured: true,
    discount: "20",
    count: 0,
    categoryName: "jersey",
  },
  {
    _id: uuid(),
    title: "team-secret-Hoodie",
    name: "Team Secret Hoodie",
    price: "10099",
    imageUrl:
      "https://res.cloudinary.com/dut75albw/image/upload/v1647753693/AegisStore/products/hoodies/TeamSecretHoodie_gif8bx.webp",
    aegisAssured: true,
    discount: "20",
    count: 20,
    categoryName: "hoodie",
  },
  {
    _id: uuid(),
    title: "corsair-chair",
    name: "Corsair Chair",
    price: "13999",
    imageUrl:
      "https://res.cloudinary.com/dut75albw/image/upload/v1647682197/AegisStore/products/chairs/CorsairChiar_wuevyg.webp",
    aegisAssured: true,
    discount: "20",
    count: 20,
    categoryName: "chair",
  },
  {
    _id: uuid(),
    title: "team-liquid-jersey",
    name: "Team Liquid Jersey",
    price: "5899",
    imageUrl:
      "https://res.cloudinary.com/dut75albw/image/upload/v1647750398/AegisStore/products/jerseys/TeamLiquidJersey_jrhswx.webp",
    aegisAssured: true,
    discount: "20",
    count: 20,
    categoryName: "jersey",
  },
  {
    _id: uuid(),
    title: "og-hoodie",
    name: "OG Hoodie",
    price: "8999",
    imageUrl:
      "https://res.cloudinary.com/dut75albw/image/upload/v1647682090/AegisStore/products/hoodies/OGHoodie_pw9jti.webp",
    aegisAssured: true,
    discount: "8",
    count: 20,
    categoryName: "hoodie",
  },
  {
    _id: uuid(),
    title: "fnatic-hoodie",
    name: "Fnatic Hoodie",
    price: "7299",
    imageUrl:
      "https://res.cloudinary.com/dut75albw/image/upload/v1647682090/AegisStore/products/hoodies/FnaticHoodie_xrkiuj.webp",
    aegisAssured: true,
    discount: "40",
    count: 0,
    categoryName: "hoodie",
  },
  {
    _id: uuid(),
    title: "corsair-keyboard",
    name: "Corsair Keyboard",
    price: "3999",
    imageUrl:
      "https://res.cloudinary.com/dut75albw/image/upload/v1647682170/AegisStore/products/keyboards/CorsairKeyboard_w6jgoo.webp",
    aegisAssured: false,
    discount: "5",
    count: 20,
    categoryName: "keyboard",
  },
  {
    _id: uuid(),
    title: "faze-Hoodie",
    name: "Faze Hoodie",
    price: "6999",
    imageUrl:
      "https://res.cloudinary.com/dut75albw/image/upload/v1647682090/AegisStore/products/hoodies/FazeHoodie_jlfohe.webp",
    aegisAssured: true,
    discount: "5",
    count: 0,
    categoryName: "hoodie",
  },
];
