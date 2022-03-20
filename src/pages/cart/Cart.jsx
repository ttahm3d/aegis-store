// import axios from "axios";
// import { useEffect } from "react";
// import { v4 as uuid } from "uuid";

// const product = {
//   _id: uuid(),
//   title: "og-jersey",
//   name: "OG Jersey",
//   price: "11499",
//   imageUrl:
//     "https://res.cloudinary.com/dut75albw/image/upload/v1647682043/AegisStore/products/jerseys/OGJersey_ac9bti.webp",
//   aegisAssured: true,
//   discount: "16",
//   count: 45,
//   categoryName: "jersey",
// };

// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiJlZWQxMDVmYy1mYmRhLTRmOGYtYjdiZS05NDFhN2U5NTAyZWUiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.ayNu_kHcBaThYjEhE5GKra5gJQtHXtBu-IhrwBh-G8M";

export default function () {
  // useEffect(() => {
  //   axios
  //     .post(
  //       "/api/user/cart",
  //       { product },
  //       {
  //         headers: {
  //           authorization: token,
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )
  //     .then((res) => console.log("success", res))
  //     .catch((e) => console.log(e));
  // }, []);

  // useEffect(() => {
  //   axios
  //     .post(
  //       "/api/user/cart/30c8edea-c7c4-42fe-8283-66fba2c5e322",
  //       {
  //         action: {
  //           type: "increment",
  //         },
  //       },
  //       {
  //         headers: {
  //           authorization: token,
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )
  //     .then((res) => console.log("success", res))
  //     .catch((e) => console.log(e));
  // }, []);

  // useEffect(() => {
  //   axios
  //     .get("/api/user/cart", {
  //       headers: {
  //         authorization: token,
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     .then((res) => console.log(res))
  //     .catch((e) => console.log(e));
  // }, []);

  return <div>Cart</div>;
}
