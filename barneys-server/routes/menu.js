const express = require('express');
const { db } = require('../db');

const router = express.Router();

// Get All Menus

router.get('/', async (req, res) => {
  await db.read();
  res.json({ success: true, data: db.data.menus });
});

//Get Single Menus
router.get('/:id', (req, res) => {
  const menu = menus.find((menu) => menu.id === +req.params.id);

  if (!menu) {
    return res
      .status(404)
      .json({ success: false, error: 'Resource not found' });
  }
  res.json({ success: true, data: menu });
});

module.exports = router;
