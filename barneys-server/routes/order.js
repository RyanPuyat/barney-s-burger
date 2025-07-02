const express = require('express');
const { db } = require('../db');
const { nanoid } = require('nanoid');
const router = express.Router();

// get all order
router.get('/', async (req, res) => {
  await db.read();
  res.json({ status: true, data: db.data.orders });
});

router.get('/:id', async (req, res) => {
  await db.read();
  const order = db.data.orders.find((order) => order.id === req.params.id);

  if (!order) {
    return res
      .status(404)
      .json({ success: false, error: 'No order data found' });
  }

  res.json({ success: true, data: order });
});

//create order
router.post('/', async (req, res) => {
  const newOrder = {
    id: nanoid(10),
    ...req.body,
  };

  if (!newOrder.id || !newOrder.customer || !Array.isArray(newOrder.cart)) {
    return res.status(400).json({ status: false, error: 'Invalid orderData' });
  }

  await db.read();
  db.data.orders.push(newOrder);
  await db.write();
  res.status(201).json({ success: true, data: newOrder });
});

//update order

router.patch('/:id', async (req, res) => {
  const { priority } = req.body;
  if (typeof priority !== 'boolean') {
    return res
      .status(400)
      .json({ success: false, error: 'priority must be a boolean' });
  }
  await db.read();
  const order = db.data.orders.find((item) => item.id === req.params.id);

  if (!order) {
    return res.status(400).json({ success: false, error: 'Order not found' });
  }

  order.priority = priority;
  order.priorityPrice = priority ? 6 : 0;
  await db.write();

  res.json({ success: true, data: order });
});

module.exports = router;
