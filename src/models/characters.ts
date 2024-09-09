import mongoose from "mongoose";

const CharacterSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    role: { type: [String], required: true },
    lane: { type: [String], required: true },
    image: { type: String, required: true },
  },
  { timestamps: true },
);

const Character =
  mongoose.models.Character || mongoose.model("Character", CharacterSchema);

export default Character;
