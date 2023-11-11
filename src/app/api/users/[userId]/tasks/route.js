import { Task } from "@/models/task";
import { NextResponse } from "next/server";

// localhost:3000/api/users/[userId]/tasks
export async function GET(request, { params }) {
  const { userId } = params;

  try {
    const tasks = await Task.find({
      userId: userId,
    });

    const response = NextResponse.json(tasks, {
      message: "All tasks retrived",
      status: 200,
    });

    return response;
  } catch (error) {
    console.log("Error fetching the tasks for a particular userId");
    console.log(error);
    return NextResponse.json({
      message: "Error fetching the tasks for a particular userId",
      status: 404,
    });
  }
}
