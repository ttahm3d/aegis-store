import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    name: "jersey",
    title: "Jersey",
    imageUrl:
      "https://res.cloudinary.com/dut75albw/image/upload/v1647532664/AegisStore/categories/Jersey_lhixyy.png",
  },
  {
    _id: uuid(),
    name: "hoodie",
    title: "Hoodies",
    imageUrl:
      "https://res.cloudinary.com/dut75albw/image/upload/v1647577675/AegisStore/categories/Hoodie.png",
  },
  {
    _id: uuid(),
    name: "keyboard",
    title: "Keyboards",
    imageUrl:
      "https://res.cloudinary.com/dut75albw/image/upload/v1647532664/AegisStore/categories/Keyboard_gylnbg.png",
  },
  {
    _id: uuid(),
    name: "chair",
    title: "Chairs",
    imageUrl:
      "https://res.cloudinary.com/dut75albw/image/upload/v1647532664/AegisStore/categories/Chair_zptitd.png",
  },
];
