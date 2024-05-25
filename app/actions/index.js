"use server";

import { signIn } from "@/auth";
import EmailTemplate from "@/components/checkout/EmailTemplate";
import {
  addToCart,
  addToWishList,
  clickCount,
  placeOrder,
  updateUser,
} from "@/database/queries";
import { createPdf } from "@/utils/pdf-utils";
import { Resend } from "resend";

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

async function increaseClickCount(productId) {
  console.log(productId);
  try {
    await clickCount(productId);
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

async function orderProduct(orderData, email) {
  try {
    const response = await placeOrder(orderData, email);
    const emailRes = await sendEmail(orderData);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

async function sendEmail(orderData) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { pdfBytes } = await createPdf(orderData);
    const sent = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: orderData?.email,
      subject: "Purchased from LwsKart successfully",
      react: EmailTemplate({ orderData }),
      attachments: [
        {
          filename: "Invoice.pdf",
          content: pdfBytes.toString("base64"),
          contentType: "application/pdf",
        },
      ],
    });
  } catch (error) {
    throw error;
  }
}

export {
  updateUserInDB,
  login,
  updateUserWishList,
  updateUserCart,
  increaseClickCount,
  orderProduct,
};
