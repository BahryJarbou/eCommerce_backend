import sequelize from "../db/index.js";
import Order from "../models/Order.js";
import Product from "../models/Product.js";

export const createOrder = async (req, res) => {
  try {
    const { userId, products } = req.body;
    const productIds = products.map((product) => product.productId);
    const prices = await Product.findAll({
      where: { id: productIds },
      attributes: ["price"],
      raw: true,
    });

    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += prices[i].price * products[i].quantity;
    }
    const order = await Order.create({ userId, products, total });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) return res.status(404).json({ error: "Order not found" });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) return res.status(404).json({ error: "Order not found" });
    const { userId, products } = req.body;
    const productIds = products.map((product) => product.productId);
    const prices = await Product.findAll({
      where: { id: productIds },
      attributes: ["price"],
      raw: true,
    });

    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += prices[i].price * products[i].quantity;
    }

    await order.update({ userId, products, total });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);
    if (!order) return res.status(404).json({ error: "Order not found" });
    await order.destroy();
    res.json({ message: "Order deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
