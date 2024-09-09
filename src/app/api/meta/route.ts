import { connectMongoDB } from "@/lib/db";
import MetaModel from "@/models/meta";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    // Connect to the database
    await connectMongoDB();

    // Parse the JSON request body
    const { week, name } = await request.json();

    // Validate the input
    if (!week || !name) {
      return NextResponse.json(
        { error: "Week and name are required" },
        { status: 400 },
      );
    }

    // Check if the document already exists
    const existingMeta = await MetaModel.findOne({ week, name });
    if (existingMeta) {
      return NextResponse.json(
        { error: "Meta with the same week and name already exists" },
        { status: 409 }, // Conflict status code
      );
    }

    // Create a new Meta document
    const newMeta = new MetaModel({ week, name });
    await newMeta.save();

    // Return the created document
    return NextResponse.json(newMeta, { status: 201 });
  } catch (error) {
    console.error("Error creating Meta:", error);
    return NextResponse.json(
      { error: "Failed to create Meta" },
      { status: 500 },
    );
  }
}
