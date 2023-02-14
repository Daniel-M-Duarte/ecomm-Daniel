const database = require('../models')

class PaymentController{
    static async createPayment (req, res){
        const newPayment = {...req.body }
        const { id, status } = await database.Payments.create(newPayment)
        try {
            return res.status(201)
              .set('Location', `/admin/payments/${id}`)
              .json({ id, status })           
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getAllPayments (req, res){
        try {
            const listOfpayment = await database.Payments.findAll() 
            return res.status(200).json(listOfpayment)
        } catch (error) {
            return res.status(500).json(error.message)
        }     
    }

    static async getpaymentbyId(req, res){
        const { id } = req.params 
        try {
            const payOne = await database.Payments.findOne({
                where: {
                    id: Number(id)
                },
                attributes: ['id','valor','nome','numeroDoCartao',
                  'validade','status','createdAt','updatedAt']
            })  
            if (!payOne) return res.status(404).json('Not found') 
            return res.status(200).json(payOne)         
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async updatePayment (req, res){
        const { id } = req.params
        const status = req.body
        try {
            await database.Payments.update(status, { where: { id: Number(id)}})
            const updatedStatus = await database.Payments.findOne({
                where: { id: Number(id)},
                attributes: ['id', 'status', 'updatedAt']
            })
            if(!updatedStatus) return res.status(404).send('ID não encontrado')
            res.status(200).json(updatedStatus)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PaymentController