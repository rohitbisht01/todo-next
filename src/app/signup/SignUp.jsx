"use client";

import React, { useState } from "react";
import { toast } from "react-toastify";
import { signUpUser } from "../utils/network";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
    profileURL:
      "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=626&ext=jpg",
  });

  const handleSignUp = async (e) => {
    e.preventDefault();

    // validate data
    if (
      user.name.trim() === "" ||
      user.email === "" ||
      user.password === "" ||
      user.about === ""
    ) {
      toast.warning("Fill all the details to proceed", {
        position: "top-right",
      });
      return;
    }

    try {
      const result = await signUpUser(user);

      if (result) {
        toast.success("User successfully created", {
          position: "top-right",
        });
      }
      router.push("/login");
      setUser({
        name: "",
        email: "",
        password: "",
        about: "",
        profileURL:
          "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=626&ext=jpg",
      });
    } catch (error) {
      console.log("Error while signing up");
      console.log(error);
      toast.error("Error while creating user", {
        position: "top-right",
      });
    }
  };

  const resetUser = () => {
    setUser({
      name: "",
      password: "",
      about: "",
      email: "",
      profileURL:
        "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?size=626&ext=jpg",
    });
  };
  return (
    <div className="grid grid-cols-12  justify-center">
      <div className="col-span-6 col-start-4 p-5">
        <div>
          <h1 className="text-2xl font-medium text-center">SignUp Here</h1>

          <form onSubmit={handleSignUp}>
            <div className="mt-3">
              <label
                htmlFor="user_name"
                className="block text-sm font-medium mb-2"
              >
                Username
              </label>
              <input
                type="text"
                className="w-full p-2.5 rounded-md bg-gray-200"
                id="user_name"
                name="user_name"
                placeholder="Enter your name"
                value={user.name}
                onChange={(e) => {
                  setUser({
                    ...user,
                    name: e.target.value,
                  });
                }}
              />
            </div>

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

            {/* <div className="mt-3">
              <label
                htmlFor="user_profile"
                className="block text-sm font-medium mb-2"
              >
                Profile URL
              </label>
              <input
                type="url"
                className="w-full p-2.5 rounded-md bg-gray-200"
                id="user_profile"
                name="user_profile"
                placeholder="Enter your profile url"
              />
            </div> */}

            <div className="mt-3">
              <label
                htmlFor="user_about"
                className="block text-sm font-medium mb-2"
              >
                About
              </label>
              <textarea
                type="text"
                className="w-full p-2.5 rounded-md bg-gray-200"
                id="user_about"
                name="user_about"
                placeholder="About"
                rows={8}
                value={user.about}
                onChange={(e) => {
                  setUser({
                    ...user,
                    about: e.target.value,
                  });
                }}
              />
            </div>

            <div className="mt-4 flex justify-center gap-5">
              <button
                // type="submit"
                className="bg-blue-500 p-3 text-white rounded-lg hover:bg-blue-600"
              >
                Sign Up
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
