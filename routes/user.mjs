import  {Router} from "express";
const router = Router();

router("/", async (req, res) =>
    {
        const {name,email,password} = req.body;



        const user = new UserModel({name,email,password});
        await user.save();
        res.json(user);
    }
)
export default router;
