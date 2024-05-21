import { productModel } from "@/models/product-model";
import { userModel } from "@/models/user-model";
import { dbConnect } from "@/service/mongo";
import { transformArray, transformObj } from "@/utils";

export async function getUserByEmail(email) {
  const user = await userModel.findOne({ email: email }).lean();
  return user;
}

export async function updateUser(newUser) {
  const user = await userModel.findById(newUser?._id);
  if (user) {
    if (newUser.phone_number) {
      user.phone_number = newUser.phone_number;
    }
    if (newUser.shipping_address) {
      user.shipping_address = newUser.shipping_address;
    }
    if (newUser.shipping_address_number) {
      user.shipping_address_number = newUser.shipping_address_number;
    }
    if (newUser.billing_address) {
      user.billing_address = newUser.billing_address;
    }
    if (newUser.billing_address_number) {
      user.billing_address_number = newUser.billing_address_number;
    }
  }
  user.save();
}

export async function addToWishList(userEmail, productId) {
  try {
    const user = await userModel.findOne({ email: userEmail });
    if (user) {
      if (!user.wishlist) {
        user.wishlist = [];
      }
      if (!user.wishlist.includes(productId)) {
        user.wishlist.push(productId);
        await user.save();
      } else {
        console.log("Product already in wishlist");
      }
    } else {
      console.log("User not found");
    }
  } catch (error) {
    console.error("Error updating wishlist", error);
  }
}

export async function addToCart(userEmail, productId, items) {
  try {
    const user = await userModel.findOne({ email: userEmail });
    if (user) {
      if (!user.cart_items) {
        user.cart_items = [];
      }
      const found = user.cart_items.find(
        (item) => item.productId === productId
      );
      console.log(found);
      if (!found) {
        user.cart_items.push({ productId, number: items });
        await user.save();
      } else {
        console.log("Product already in wishlist");
      }
    } else {
      console.log("User not found");
    }
  } catch (error) {
    console.error("Error updating wishlist", error);
  }
}

export async function getAllProducts() {
  const products = await productModel.find().lean();
  return transformArray(products);
}

export async function getProductById(id) {
  const product = await productModel.findById(id).lean();
  return transformObj(product);
}

export async function getProductByIdForCard(id) {
  await dbConnect();
  const product = await productModel
    .findById(id)
    .select(["name", "availability", "price", "discount"])
    .lean();
  return transformObj(product);
}
