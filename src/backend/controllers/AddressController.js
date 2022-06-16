import { Response } from "miragejs";
import { requiresAuth, formatDate } from "../utils/authUtils";

/**
 * All the routes related to Wishlist are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles getting items to user's addresses.
 * send GET Request at /api/user/addresses
 * */

export const getAddressesOfUser = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  if (!userId) {
    new Response(
      404,
      {},
      {
        errors: ["The email you entered is not Registered. Not Found error"],
      }
    );
  }
  const userAddresses = schema.users.findBy({ _id: userId }).addresses;
  return new Response(200, {}, { addresses: userAddresses });
};

/**
 * This handler handles adding items to user's addresses.
 * send POST Request at /api/user/addresses
 * body contains {product}
 * */

export const addNewAddress = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const userAddresses = schema.users.findBy({ _id: userId }).addresses;
    const { address } = JSON.parse(request.requestBody);
    userAddresses.push({
      ...address,
      createdAt: formatDate(),
      updatedAt: formatDate(),
    });
    this.db.users.update({ _id: userId }, { addresses: userAddresses });
    return new Response(201, {}, { addresses: userAddresses });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles removing items to user's wishlist.
 * send DELETE Request at /api/user/addresses
 * body contains {product}
 * */

// export const removeAddress = function (schema, request) {
//   const userId = requiresAuth.call(this, request);
//   try {
//     if (!userId) {
//       new Response(
//         404,
//         {},
//         {
//           errors: ["The email you entered is not Registered. Not Found error"],
//         }
//       );
//     }
//     let userWishlist = schema.users.findBy({ _id: userId }).wishlist;
//     const productId = request.params.productId;
//     userWishlist = userWishlist.filter((item) => item._id !== productId);
//     this.db.users.update({ _id: userId }, { wishlist: userWishlist });
//     return new Response(200, {}, { wishlist: userWishlist });
//   } catch (error) {
//     return new Response(
//       500,
//       {},
//       {
//         error,
//       }
//     );
//   }
// };
