const database = require('../models');
const paymentStatus = require('../constantes/variaveis');

class PaymentController {
  static async createPayment(req, res) {
    const newPayment = { ...req.body };
    const { id, status } = await database.Payments.create(newPayment);

    try {
      const newPaymentObjectLinks = {
        id,
        status,
        links: [
          {
            rel: 'SELF',
            method: 'GET',
            href: `http://localhost:3003/admin/payments/${id}`,
          },
          {
            rel: 'CONFIRMADO',
            method: 'PATCH',
            href: `http://localhost:3003/admin/payments/${id}/confirmacao`,
          },
          {
            rel: 'CANCELADO',
            method: 'PATCH',
            href: `http://localhost:3003/admin/payments/${id}/cancelamento`,
          },
        ],
      };
      return res.status(201)
        .set('Location', `/admin/payments/${id}`)
        .json(newPaymentObjectLinks);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getAllPayments(req, res) {
    try {
      const listOfpayment = await database.Payments.findAll();
      return res.status(200).json(listOfpayment);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getpaymentbyId(req, res) {
    const { id } = req.params;
    try {
      const payOne = await database.Payments.findOne({
        where: {
          id: Number(id),
        },
        attributes: ['id', 'valor', 'nome', 'numeroDoCartao',
          'validade', 'status', 'createdAt', 'updatedAt'],
      });
      if (!payOne) return res.status(404).json('Not found');

      return res.status(200).json(payOne);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async confirmPayment(req, res) {
    const { id } = req.params;
    try {
      const getPayment = await database.Payments.findOne({ where: { id: Number(id) } });

      if (getPayment.status !== paymentStatus.criado) throw new Error('Valor invalido para status');

      await database.Payments.update(
        { status: paymentStatus.confirmado },
        { where: { id: Number(id) } },
      );
      return res.status(200).json({ status: 'CONFIRMADO' });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async cancelPayment(req, res) {
    const { id } = req.params;
    try {
      const getPayment = await database.Payments.findOne({ where: { id: Number(id) } });

      if (getPayment.status !== paymentStatus.criado) throw new Error('Valor invalido para status');

      await database.Payments.update(
        { status: paymentStatus.cancelado },
        { where: { id: Number(id) } },
      );
      return res.status(200).json({ status: 'CANCELADO' });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PaymentController;
