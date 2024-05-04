import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
    {
        firstname: String,
        lastname: String,
        email: String,
});

export default models.User || model("User", userSchema);
