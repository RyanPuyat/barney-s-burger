const express = require('express');

const router = express.Router();

const menus = [
  {
    id: 1,
    name: 'Cream & Crave',
    unitPrice: 3.5,
    imageUrl:
      'https://res.cloudinary.com/dyozmymsf/image/upload/v1751112830/creamy-mushroom_os2n9q.png',
    ingredients: [
      'Beef Patty',
      'Cream of Mushroom',
      'Mozza Cheese',
      'Grilled Onions',
      'Mayo',
    ],
    soldOut: false,
  },
  {
    id: 2,
    name: 'Cheese Bomb',
    unitPrice: 4.0,
    imageUrl:
      'https://res.cloudinary.com/dyozmymsf/image/upload/v1751112831/cheese-burger_erofdm.png',
    ingredients: [
      'Beef Patty',
      'Cheddar Cheese',
      'Grilled Onions & Tomatoes',
      'Pickles',
      'Lettuce',
      'Ketchup',
      'Mayo and Mustard',
    ],
    soldOut: false,
  },
  {
    id: 3,
    name: 'Big Bite',
    unitPrice: 4.5,
    imageUrl:
      'https://res.cloudinary.com/dyozmymsf/image/upload/v1751112833/double-patty-beef-burger_idipsi.png',
    ingredients: [
      'Beef Patty',
      'Onions',
      'Tomatoes',
      'Pickles',
      'Lettuce',
      'Ketchup',
      'Mayo',
      'Mustard',
    ],
    soldOut: false,
  },
  {
    id: 4,
    name: 'Beef & Bacon Bliss',
    unitPrice: 3.5,
    imageUrl:
      'https://res.cloudinary.com/dyozmymsf/image/upload/v1751112830/creamy-mushroom_os2n9q.png',
    ingredients: [
      'Beef Patty',
      'Cheddar Cheese',
      'Beef Bacon',
      'Grilled Onions & Tomatoes',
      'Pickles',
      'Lettuce',
      'Ketchup',
      'Mayo and Mustard',
    ],
    soldOut: false,
  },
  {
    id: 5,
    name: 'Hawaiian Burger',
    unitPrice: 3.5,
    imageUrl:
      'https://res.cloudinary.com/dyozmymsf/image/upload/v1751112831/hawaiian-burger_gss0ai.png',
    ingredients: [
      'Beef Patty',
      'Grilled Pineapple',
      'Mozza Cheese',
      'Onions',
      'Tomatoes',
      'Lettuce',
      'Mayo',
      'BBQ Sauce',
    ],
    soldOut: false,
  },

  {
    id: 6,
    name: 'Cluck Haven',
    unitPrice: 3.5,
    imageUrl:
      'https://res.cloudinary.com/dyozmymsf/image/upload/v1751112882/chicken-paradise_frxsyc.png',
    ingredients: [
      'Grilled Chicken',
      'Mozza Cheese',
      'Grilled Pineapple',
      'Lettuce',
      'Onions Jalapenos',
      'Mayo',
      'Garlic',
    ],
    soldOut: false,
  },
  {
    id: 7,
    name: 'Buffalo Blaze',
    unitPrice: 4.0,
    imageUrl:
      'https://res.cloudinary.com/dyozmymsf/image/upload/v1751112882/buffalo-burger_tpmiqo.png',
    ingredients: [
      'Crispy Chicken',
      'Mozza Cheese',
      'Grilled Onion & Tomatoes',
      'Lettuce',
      'Garlic Sauce',
      'Buffalo Sauce',
      'Mayo',
    ],
    soldOut: false,
  },
  {
    id: 8,
    name: 'BBQ Chicken',
    unitPrice: 4.0,
    imageUrl:
      'https://res.cloudinary.com/dyozmymsf/image/upload/v1751112884/BBQ-chicken-burger_dvfz0f.png',
    ingredients: [
      'Grilled Chicken',
      'Mozza Cheese',
      'Grilled Onion',
      'Lettuce',
      'Mayo',
      'BBQ Sauce',
    ],
    soldOut: false,
  },
  {
    id: 9,
    name: 'Tandoori Chicken',
    unitPrice: 3.5,
    imageUrl:
      'https://res.cloudinary.com/dyozmymsf/image/upload/v1751112885/tandoori-burger_suaada.png',
    ingredients: [
      'Tandoori Chicken',
      'Cheddar Cheese',
      'Grilled Onions & Tomatoes',
      'Pickles',
      'Lettuce',
      'Garlic Sauce & Mayo',
    ],
    soldOut: false,
  },
  {
    id: 10,
    name: 'Crispy Chicken',
    unitPrice: 3.5,
    imageUrl:
      'https://res.cloudinary.com/dyozmymsf/image/upload/v1751112884/crispy-chicken-burger_yjnxs0.png',
    ingredients: [
      'Crispy Chicken',
      'Cheddar Cheese',
      'Grilled Onion & Tomatoes',
      'Lettuce',
      'Pickles',
      'Garlic Sauce',
      'Mayo',
      'Chipotle Sauce',
    ],
    soldOut: false,
  },
];

// Get All Menus

router.get('/', (req, res) => {
  res.json({ success: true, data: menus });
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
