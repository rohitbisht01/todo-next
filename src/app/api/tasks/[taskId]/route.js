import { Task } from "@/models/task";
import { NextResponse } from "next/server";

// get a specific task
export async function GET(request, { params }) {
  const { taskId } = params;
  try {
    const task = await Task.findById(taskId);

    const response = NextResponse.json(task, {
      message: "Successfully retrived the task",
      status: 200,
    });

    return response;
  } catch (error) {
    console.log("Error fetching task for a specific user id");
    console.log(error);

    return NextResponse.json({
      message: "Error while retriving the task",
      status: false,
    });
  }
}

// update a specific task
export async function PUT(request, { params }) {
  const { taskId } = params;
  const { title, content, status } = await request.json();
  try {
    const task = await Task.findById(taskId);

    task.title = title;
    task.content = content;
    task.status = status;

    const updatedTask = await task.save();
    const response = NextResponse.json(updatedTask, {
      message: "Task updated successfully",
      status: 200,
    });

    return response;
  } catch (error) {
    console.log("Error updating a task");
    console.log(error);

    return NextResponse.json({
      message: "Error updating a task",
      status: 404,
    });
  }
}

// delete a specific task
export async function DELETE(request, { params }) {
  const { taskId } = params;
  try {
    await Task.deleteOne({ _id: taskId });

    const response = NextResponse.json({
      message: "Task deleted",
      status: 200,
    });

    return response;
  } catch (error) {
    console.log("Error deleting a task");
    console.log(error);

    return NextResponse.json({
      message: "Error deleting a task",
      status: false,
    });
  }
}
