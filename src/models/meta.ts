import { Document, model, models, Schema } from "mongoose";

// Define the interface for the model
interface Meta extends Document {
  week: string;
  name: string;
}

// Create the schema
const MetaSchema: Schema = new Schema({
  week: { type: String, required: true },
  name: { type: String, required: true, maxlength: 255 },
});

// Check if the model already exists (necessary for hot-reloading in Next.js)
const MetaModel = models.Meta || model<Meta>("Meta", MetaSchema);

export default MetaModel;
