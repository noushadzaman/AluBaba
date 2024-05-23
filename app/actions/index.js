"use server";

import { signIn } from "@/auth";
import {
  addToCart,
  addToWishList,
  placeOrder,
  updateUser,
} from "@/database/queries";

async function updateUserInDB(newUser) {
  try {
    await updateUser(newUser);
  } catch (error) {
    console.log(error);
  }
}

async function updateUserWishList({ userEmail, productId }) {
  try {
    await addToWishList(userEmail, productId);
  } catch (error) {
    console.log(error);
  }
}

async function updateUserCart({ userEmail, productId, items }) {
  try {
    await addToCart(userEmail, productId, items);
  } catch (error) {
    console.log(error);
  }
}

async function login(formData) {
  try {
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

async function orderProduct(orderData) {
  try {
    const response = await placeOrder(orderData);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export { updateUserInDB, login, updateUserWishList, updateUserCart, orderProduct };
