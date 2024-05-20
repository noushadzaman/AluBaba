"use server";

import { signIn } from "@/auth";
import { addToWishList, updateUser } from "@/database/queries";

async function updateUserInDB(newUser) {
  try {
    await updateUser(newUser);
  } catch (error) {
    console.log(error);
  }
}

async function updateUserWishList({ userEmail, productId }) {
  console.log(userEmail, productId);
  try {
    await addToWishList(userEmail, productId);
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

export { updateUserInDB, login, updateUserWishList };
