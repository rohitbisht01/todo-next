import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { User } from "@/models/user";
import { connectDb } from "@/app/utils/db";

export async function GET(request) {
  const authToken = request.cookies.get("authToken")?.value;
  console.log(authToken);

  if (!authToken) {
    return NextResponse.json(
      {
        error: "Authentication is missing",
      },
      { status: 401 }
    );
  }

  if (authToken) {
    try {
      const data = jwt.verify(authToken, process.env.JWT_KEY);
      // console.log(data);
      await connectDb();
      const user = await User.findById(data._id);

      return NextResponse.json(user);
    } catch (error) {
      return NextResponse.json(
        { error: "Authentication token is missing" },
        { status: 401 }
      );
    }
  }

  return NextResponse.json({});
}
