import { NextResponse } from "next/server";

import { connectMongoDB } from "@/lib/db";
import User from "@/models/users";
import Character from "@/models/characters";

export async function POST(req: any) {
  const { username, password } = await req.json();
  await connectMongoDB();
  await User.create({ username, password });
  return NextResponse.json({ message: "User created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const characters = await Character.find();
  return NextResponse.json({ characters });
}
