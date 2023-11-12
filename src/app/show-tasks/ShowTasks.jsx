"use client";
import React, { useContext, useEffect, useState } from "react";
import { getTaskOfUser } from "../utils/network";
import UserContext from "@/context/userContext";
import Task from "@/components/Task";
import { deleteTask } from "@/app/utils/network";
import { toast } from "react-toastify";

export default function ShowTasks() {
  const { user } = useContext(UserContext);
  const [tasks, setTasks] = useState([]);

  async function loadTasks(userId) {
    try {
      const results = await getTaskOfUser(userId);
      setTasks([...results]);
    } catch (error) {
      console.log("Error while fetching tasks for a particular user");
      console.log(error);
    }
  }

  useEffect(() => {
    if (user) {
      loadTasks(user._id);
    }
  }, [user]);

  async function deleteTaskParent(taskId) {
    try {
      const result = await deleteTask(taskId);
      const newTasks = tasks.filter((item) => item._id !== taskId);
      setTasks(newTasks);

      if (result) {
        toast.success("task deleted", { position: "top-right" });
      }
    } catch (error) {
      console.log("Error while deleting a task");
      console.log(error);
      toast.error("error while deleting task", { position: "top-right" });
    }
  }

  return (
    <div className=" grid grid-cols-12 m-5">
      <div className="col-span-6 col-start-4">
        <h1 className="text-xl font-bold">Your Tasks ({tasks.length})</h1>

        {tasks.map((task) => (
          <Task
            task={task}
            key={task._id}
            deleteTaskParent={deleteTaskParent}
          />
        ))}
      </div>
    </div>
  );
}
