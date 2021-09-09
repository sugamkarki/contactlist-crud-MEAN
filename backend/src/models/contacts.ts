import mongoose from "mongoose";
import { Schema } from "mongoose";
export interface IContact {
  id: string;
  first_name: string;
  last_name: string;
  phone: string;
}
const ContactSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});
export const Contact = mongoose.model("Contact", ContactSchema);
