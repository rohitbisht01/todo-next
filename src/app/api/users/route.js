import { NextResponse } from "next/server";

export function GET(request) {
  const users = [
    {
      name: "rohit",
      phone: "1234",
      course: "java",
    },
    {
      name: "himanshu",
      phone: "1784",
      course: "cpp",
    },
    {
      name: "nothing",
      phone: "6897",
      course: "python",
    },
  ];

  return NextResponse.json(users);
}

export function POST() {}

export function DELETE(request) {
  console.log("delete api called");
  return NextResponse.json(
    {
      message: "deleted",
      status: true,
    },
    { status: 201, statusText: "hola" }
  );
}

export function PUT() {}
