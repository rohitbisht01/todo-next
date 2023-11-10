import { NextResponse } from "next/server";

export function DELETE(request, { params }) {
  const { userId } = params;
  console.log(userId);

  return NextResponse.json({
    message: `Deleting data`,
  });
}
