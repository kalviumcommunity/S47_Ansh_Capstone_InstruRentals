import  express  from "express";
import { 
    test,
    updateUser,
    deleteUser,
} from "../controllers/user.controller.js";
import {verifyToken} from '../utils/verifyUser.js'
import { createOrder } from "../controllers/order.controller.js";

const router = express.Router();

router.get('/',test);
router.put('/update/:id', verifyToken, updateUser);
router.delete('/delete/:id', verifyToken, deleteUser);
router.post('/orders', createOrder)

export default router;