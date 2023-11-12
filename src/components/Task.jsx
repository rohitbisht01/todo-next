"use client";

import UserContext from "@/context/userContext";
import React, { useContext } from "react";
import { AiOutlineDelete } from "react-icons/ai";

export default function Task({ task, deleteTaskParent }) {
  const { user } = useContext(UserContext);

  async function handleDelete(taskId) {
    deleteTaskParent(taskId);
  }

  return (
    <div
      className={`bg-gray-300 shadow-lg mt-2 rounded-md  ${
        task.status === "completed" ? "bg-green-300" : "bg-gray-200"
      }`}
    >
      <div className="p-5">
        <div className="flex justify-between">
          <h1 className="text-xl font-semibold">{task.title}</h1>
          <AiOutlineDelete
            onClick={() => {
              handleDelete(task._id);
            }}
            className="cursor-pointer text-xl hover:text-gray-500"
          />
        </div>
        <p className="font-normal">{task.content}</p>
        <div className="flex justify-between mt-3">
          <p className="text-left">
            Status: <span className="font-bold">{task.status}</span>
          </p>
          {/* <p className="text-right">
            Author: <span className="font-bold">{user.name}</span>
          </p> */}
        </div>
      </div>
    </div>
  );
}
