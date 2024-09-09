import { NextMiddleware, NextResponse } from "next/server";

const middleware: NextMiddleware = (request) => {
  return NextResponse.next();
};

export default middleware;

export const config = {
  matcher: ["/admin"],
};
