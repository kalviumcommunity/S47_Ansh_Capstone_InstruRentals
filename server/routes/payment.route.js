import express from 'express';
import { payment,paymentVerification } from '../controllers/payment.controller.js';

const router = express.Router();

router.post('/order',payment);
router.post('/order/validate',paymentVerification)

export default router;