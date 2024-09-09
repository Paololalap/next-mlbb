import { NextResponse } from "next/server";

import { connectMongoDB } from "@/lib/db";
import Character from "@/models/characters";

export async function GET() {
  await connectMongoDB();
  const characters = await Character.find();
  return NextResponse.json({ characters });
}
