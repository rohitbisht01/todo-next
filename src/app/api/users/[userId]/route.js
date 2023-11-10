import { User } from "@/models/user";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { userId } = params;

  try {
    const user = await User.findById(userId);

    const response = NextResponse.json(user);
    return response;
  } catch (error) {
    console.log("could not find the user with this id");
    console.log(error);
  }
}

export async function DELETE(request, { params }) {
  const { userId } = params;
  try {
    await User.deleteOne({
      _id: userId,
    });

    const response = NextResponse.json({
      message: "User Deleted",
      status: 200,
    });

    return response;
  } catch (error) {
    console.log("Error deleting the specific user id");
    console.log(error);
  }
}

export async function PUT(request, { params }) {
  const { userId } = params;
  const { name, email, password, profileURL, about } = await request.json();

  try {
    const user = await User.findById(userId);
    user.name = name;
    user.email = email;
    user.password = password;
    user.profileURL = profileURL;

    const updatedUser = await user.save();
    const response = NextResponse.json(updatedUser, {
      message: "Updated user details",
      status: 200,
    });

    return response;
  } catch (error) {
    console.log("Error updating the user's details");
    console.log(error);
  }
}
