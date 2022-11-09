const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true, unique: true },
        isAdmin: { type: Boolean, default: false },
        postDate: {type: Date, default: Date.now()}
    },
    // { timeStamps: true }
);

module.exports = mongoose.model("User", UserSchema);