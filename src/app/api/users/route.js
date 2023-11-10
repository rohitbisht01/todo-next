import { connectDb } from "@/app/utils/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

connectDb();

export async function GET(request) {
  let users = [];
  try {
    users = await User.find().select("-password");

    const response = NextResponse.json(users, {
      status: 200,
    });

    return response;
  } catch (error) {
    console.log("No data found");
    console.log(error);
  }
}

// create user
export async function POST(request) {
  // fetch user details from request
  const { name, email, password, about, profileULR } = await request.json();

  const user = new User({
    name,
    email,
    password,
    about,
    profileULR,
  });

  try {
    const createdUser = await user.save();

    const response = NextResponse.json(user, {
      status: 201,
    });

    console.log(response);

    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "failed to create user",
      status: false,
    });
  }
}

export function DELETE(request) {
  console.log("delete api called");
  return NextResponse.json(
    {
      message: "deleted",
      status: true,
    },
    { status: 201, statusText: "hola" }
  );
}

export function PUT() {}
