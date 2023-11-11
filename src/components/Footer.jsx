"use client";

import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className=" text-white bg-blue-500 ">
      <div className="flex items-center p-4 h-50 justify-around">
        <div className="text-center flex flex-col justify-center">
          <h1 className="font-bold text-2xl pb-4">Welcome to Todo Manager</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim soluta
          </p>
        </div>
        <div className="text-center">
          <h3 className="font-bold text-xl">Let's Connect</h3>
          <ul className="flex flex-col gap-2 py-2">
            <li>
              <Link href="/" className="hover:text-gray-200">
                Facebook
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-gray-200">
                Instagram
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-gray-200">
                Youtube
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-gray-200">
                Twitter
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
