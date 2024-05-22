import { productModel } from "@/models/product-model";
import { dbConnect } from "@/service/mongo";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  await dbConnect();

  try {
    const user = await productModel
      .findById(params.id)
      .select(["name", "availability", "price", "discount"])
      .lean();
    if (!user) {
      return new NextResponse("User not found", {
        status: 404,
      });
    }
    return new NextResponse(JSON.stringify(user), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }
}
