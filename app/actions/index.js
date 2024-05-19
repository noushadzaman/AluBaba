"use server";

import { updateUser } from "@/database/queries";

async function updateUserInDB(newUser) {
  try {
    console.log(newUser);
    await updateUser(newUser);
  } catch (error) {
    console.log(error);
  }
}

export { updateUserInDB };
