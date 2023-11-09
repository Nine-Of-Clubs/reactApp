import mongoose from "mongoose";


const postSchema = mongoose.Schema(
    {
        recipename: String,
        ingredients: String,
        instructions: String,
        creator: String,
        image: String
    },
    {
        timeStamp: true
    }
)
const postMessage = mongoose.model('PostMessage', postSchema);

export default postMessage;