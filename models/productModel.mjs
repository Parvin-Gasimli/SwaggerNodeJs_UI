import mongoose from "mongoose";
import  {Schema} from "mongoose";

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category:{
        type:String,
        required:true
    }
})

export default mongoose.model("ProductModel", ProductSchema);