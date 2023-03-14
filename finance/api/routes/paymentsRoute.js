const { Router } = require('express');
const PaymentController = require('../controllers/PaymentController');
const bearer = require('../authorization/financeMiddlewaresAuthe');

const router = Router();

router.post('/payments', bearer, PaymentController.createPayment);
router.get('/admin/payments', bearer, PaymentController.getAllPayments);
router.get('/admin/payments/:id', bearer, PaymentController.getpaymentbyId);
router.patch('/admin/payments/:id/confirmacao', bearer, PaymentController.confirmPayment);
router.patch('/admin/payments/:id/cancelamento', bearer, PaymentController.cancelPayment);

module.exports = router;
