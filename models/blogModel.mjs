import mongoose,{} from "mongoose";
const { Schema } = mongoose;



const BlogSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
})
export default mongoose.model("BlogModel",BlogSchema);