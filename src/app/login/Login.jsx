"use client";

import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { loginUser } from "../utils/network";
import { useRouter } from "next/navigation";
import UserContext from "@/context/userContext";

export default function Login() {
  const context = useContext(UserContext);
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    // validation
    if (user.email.trim() === "" || user.password.trim() === "") {
      toast.warning("Fill the details to login", { position: "top-right" });
      return;
    }

    try {
      const result = await loginUser(user);
      console.log("login results", result);
      if (result) {
        toast.success("successfully logged in", {
          position: "top-right",
        });
      }
      context.setUser(result.user);
      router.push("/show-tasks");
    } catch (error) {
      console.log("Error while logging in");
      console.log(error);
      toast.error("Error logging in", { position: "top-right" });
    }
  };

  const resetUser = () => {
    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <div className="grid grid-cols-12 justify-center">
      <div className="col-span-6 col-start-4 p-5">
        <div>
          <h1 className="text-2xl font-medium text-center">Login Here</h1>

          <form onSubmit={handleLogin}>
            <div className="mt-3">
              <label
                htmlFor="user_email"
                className="block text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                className="w-full p-2.5 rounded-md bg-gray-200"
                id="user_email"
                name="user_email"
                placeholder="Enter your email"
                value={user.email}
                onChange={(e) => {
                  setUser({
                    ...user,
                    email: e.target.value,
                  });
                }}
              />
            </div>

            <div className="mt-3">
              <label
                htmlFor="user_password"
                className="block text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                className="w-full p-2.5 rounded-md bg-gray-200"
                id="user_password"
                name="user_password"
                placeholder="Enter your password"
                value={user.password}
                onChange={(e) => {
                  setUser({
                    ...user,
                    password: e.target.value,
                  });
                }}
              />
            </div>

            <div className="mt-4 flex justify-center gap-5">
              <button
                type="submit"
                className="bg-blue-500 p-3 text-white rounded-lg hover:bg-blue-600"
              >
                Log in
              </button>
              <button
                onClick={resetUser}
                className="bg-blue-500 p-3 text-white rounded-lg hover:bg-blue-600"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
