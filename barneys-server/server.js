const express = require('express');
const { db, initDB } = require('./db');
const port = 5000;

const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const menusRouter = require('./routes/menu');
app.use('/api/menu', menusRouter);

const ordersRouter = require('./routes/order');
app.use('/api/order', ordersRouter);

async function startServer() {
  await initDB();
  app.listen(port, () => console.log(`Server listening on port ${port}`));
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
