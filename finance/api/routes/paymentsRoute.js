const { Router } = require('express')
const PaymentController = require('../controllers/PaymentController')

const router = Router()

router.post('/admin/payments', PaymentController.createPayment)
router.get('/admin/payments', PaymentController.getAllPayments)
router.get('/admin/payments/:id', PaymentController.getpaymentbyId)
router.patch('/admin/payments/:id', PaymentController.updatePayment)

module.exports = router