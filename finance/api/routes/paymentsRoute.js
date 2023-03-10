const { Router } = require('express');
const PaymentController = require('../controllers/PaymentController');

const router = Router();

router.post('/payments', PaymentController.createPayment);
router.get('/admin/payments', PaymentController.getAllPayments);
router.get('/admin/payments/:id', PaymentController.getpaymentbyId);
router.patch('/admin/payments/:id/confirmacao', PaymentController.confirmPayment);
router.patch('/admin/payments/:id/cancelamento', PaymentController.cancelPayment);

module.exports = router;
