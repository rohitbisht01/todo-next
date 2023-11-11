import { Task } from "@/models/task";
import { NextResponse } from "next/server";

// get all tasks
export async function GET(request) {
  let tasks = [];
  try {
    tasks = await Task.find();

    const response = NextResponse.json(tasks, {
      message: "Retrived all tasks",
      status: 200,
    });

    return response;
  } catch (error) {
    console.log("Error getting all tasks");
    console.log(error);

    return NextResponse.json({
      message: "Failed retrieve all tasks",
      status: false,
    });
  }
}

// create a new task
export async function POST(request) {
  const { title, content, userId } = await request.json();
  const task = new Task({
    title,
    content,
    userId,
  });
  try {
    const createdTask = await task.save();

    const response = NextResponse.json(createdTask, {
      status: 201,
    });

    return response;
  } catch (error) {
    console.log("Error creating a taks");
    console.log(error);

    return NextResponse.json({
      message: "Failed to create a task",
      status: false,
    });
  }
}
