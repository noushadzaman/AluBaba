import { userModel } from "@/models/user-model";

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