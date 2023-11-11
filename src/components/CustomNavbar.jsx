"use client";

import Link from "next/link";
import React from "react";

export default function CustomNavbar() {
  return (
    <>
      <div className="flex justify-between text-white bg-blue-600 h-16 px-3 items-center">
        <div className="brand">
          <h1 className="font-bold text-xl">
            <Link href="/">Todo Manager</Link>
          </h1>
        </div>
        <div>
          <ul className="flex gap-5">
            <li>
              <Link href="/" className="hover:text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link href="/add-task" className="hover:text-gray-200">
                Add Task
              </Link>
            </li>
            <li>
              <Link href="/show-tasks" className="hover:text-gray-200">
                Show Tasks
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className=" flex gap-4">
            <li>
              <Link href="/login">Log In</Link>
            </li>
            <li>
              <Link href="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
