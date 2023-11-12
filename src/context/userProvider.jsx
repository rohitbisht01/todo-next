"use client";

import React, { useEffect, useState } from "react";
import UserContext from "./userContext";
import { toast } from "react-toastify";
import { currentUser } from "@/app/utils/network";

export default function UserProvider({ children }) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    async function getUser() {
      try {
        const logUser = await currentUser();
        // console.log(logUser);
        setUser({ ...logUser });
      } catch (error) {
        console.log(error);
        // toast.error("error is loading cu");
      }
    }
    getUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
