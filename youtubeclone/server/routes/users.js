import express from "express";
import { deleteUser, dislike, getUser, like, subscribe, unsubscribe, update } from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";
const router  = express.Router();

//update user
router.put("/:id",verifyToken, update);

//delete user 
router.delete("/:id",deleteUser)


//get a user  

router.get("/find/:id", getUser);

//subscribe 
router.put("/sub/:id", subscribe);


//unsubscribe 
router.put("/unsub/:id", unsubscribe);

//like

router.put("/like/:videoId", like);


//dislike

router.put("/dislike/:videoId", dislike);



export default router;