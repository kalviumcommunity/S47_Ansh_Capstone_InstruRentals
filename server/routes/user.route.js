import  express  from "express";
import { 
    test,
    updateUser,
    deleteUser,
} from "../controllers/user.controller.js";
import {verifyToken} from '../utils/verifyUser.js'
import { createOrder } from "../controllers/order.controller.js";

const router = express.Router();

router.get('/a',test);
router.put('/update/:id',updateUser);
router.delete('/delete/:id', deleteUser);
router.post('/orders', createOrder)

export default router;