import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    user_Id: {
        type: Number,
        required: true
    },
    likedPosts: {
        type: [Number],
        required: true
    },
    commentedPosts: {
        type: [Number],
        required: true
    },
    sportsInterested: {
        type: [String],
        required: true
    },
},
    {
        timestamps: true,
    });

const UserTable = mongoose.model('user', userSchema);

export default UserTable;
