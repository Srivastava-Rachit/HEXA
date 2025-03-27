import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}
)

const adminModal = mongoose.models.user || mongoose.model("admin", adminSchema);

export default adminModal;