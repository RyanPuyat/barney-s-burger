const { Low } = require('lowdb');
const { JSONFile } = require('lowdb/node');

const adapter = new JSONFile('db.json');
const db = new Low(adapter, { orders: [], menus: [] });

async function initDB() {
  await db.read();
  db.data ||= { orders: [], menus: [] };
  await db.write();
}

module.exports = { db, initDB };
