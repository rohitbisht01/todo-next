import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bycrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectDb } from "@/app/utils/db";

export async function POST(request) {
  const { email, password } = await request.json();

  try {
    await connectDb();
    const user = await User.findOne({
      email: email,
    });

    if (user === null) {
      throw new Error("user not found");
    }

    const matched = bycrypt.compareSync(password, user.password);
    if (!matched) {
      throw new Error("password does not match");
    }

    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
      },
      process.env.JWT_KEY
    );

    // 4. Create nextresponse cookie
    const response = NextResponse.json({
      message: "Login successfully",
      status: true,
      user: user,
    });

    response.cookies.set("authToken", token, {
      expiresIn: "1d",
      httpOnly: true,
    });

    return response;
  } catch (error) {
    console.log("Having Error while logging in");
    console.log(error);
    return NextResponse.json({
      message: error.message,
      status: 500,
    });
  }
}
