import {Router} from "express";
import ProductModel from "../models/productModel.mjs";
const router = Router();

router.get('/', async (req, res) => {
    const products = await ProductModel.find();
    if(products){
        res.json(products)
    }
    else{res.status(404).send({message:"No products found"})

    }
})
export default  router;