"use client";

import React, { useState } from "react";
import { addTask } from "../utils/network";
import { toast } from "react-toastify";

export default function AddTask() {
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    userId: "654e7f77d3e13c5122cf1ed0",
  });

  const handleAddTask = async (e) => {
    e.preventDefault();

    try {
      const result = await addTask(task);
      //   console.log(result);
      if (result) {
        toast.success("Your task is added", { position: "top-center" });
      }
      setTask({
        title: "",
        content: "",
        status: "none",
      });
    } catch (error) {
      console.log(error);
      toast.error("Your task not added", { position: "top-center" });
    }
  };

  return (
    <div className="grid grid-cols-12 justify-center">
      <div className="col-span-6 col-start-4 p-5 shadow-sm">
        <h1 className="text-2xl">Add your task here</h1>

        <form onSubmit={handleAddTask}>
          <div className="mt-4">
            <label
              htmlFor="task_title"
              className="block text-sm font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              id="task_title"
              className="w-full p-2.5 rounded-md bg-gray-200"
              name="task_title"
              onChange={(e) => {
                setTask({ ...task, title: e.target.value });
              }}
              value={task.title}
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor="task_content"
              className="block text-sm font-medium mb-2"
            >
              Content
            </label>
            <textarea
              type="text"
              id="task_content"
              className="w-full p-2.5 rounded-md bg-gray-200"
              rows={5}
              value={task.content}
              name="task_content"
              onChange={(e) => {
                setTask({
                  ...task,
                  content: e.target.value,
                });
              }}
            />
          </div>

          <div className="mt-4">
            <label htmlFor="task_status" className="block">
              Status
            </label>
            <select
              className="w-full p-2.5 rounded-md bg-gray-200"
              id="task_status"
              name="task_status"
              value={task.status}
              onChange={(e) =>
                setTask({
                  ...task,
                  status: e.target.value,
                })
              }
            >
              <option value="none" disabled>
                ---Select Status---
              </option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          <div className="mt-4 flex justify-center gap-5">
            <button className="bg-blue-500 p-3 text-white rounded-lg hover:bg-blue-600">
              Add Todo
            </button>
            <button className="bg-blue-500 p-3 text-white rounded-lg hover:bg-blue-600">
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
