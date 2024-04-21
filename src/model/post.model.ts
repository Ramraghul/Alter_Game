import mongoose from "mongoose";
const { Schema } = mongoose;

const masterSchema = new Schema({
    user_Id: {
        type: Number,
        required: true
    },
    post_Id: {
        type: Number,
        required: true
    },
    sport_Id: {
        type: Number,
        required: true
    },
    event_Id: {
        type: Number,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: true
    },
    comments: {
        type: Number,
        required: true
    },
},
{
    timestamps: true,
});

const MasterTable = mongoose.model('post', masterSchema);

export default MasterTable;
