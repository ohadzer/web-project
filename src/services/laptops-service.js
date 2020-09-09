// const Laptop = require("./laptop-model");
const _ = require("lodash");
const {insertToTable, getAllByKey, getAllKeysByPrefix} = require("../redisConnector");
const {TABLES, TABLES_ID_KEY} = require("../consts");

async function findAllLaptops() {
  const laptopsKeys = await getAllKeysByPrefix(TABLES.LAPTOPS);
  let laptops = [];
  for(i in laptopsKeys) {
    laptops.push(await getAllByKey(laptopsKeys[i]));
  }

  return _.map(laptops, sanitizeLaptop);
}

async function registerNewLaptop(laptop) {
  await insertToTable(TABLES.LAPTOPS + laptop.title, laptop);
};

function sanitizeLaptop(laptop) {
  return {
    id: laptop[TABLES_ID_KEY[TABLES.LAPTOPS]],
    ...laptop,
    price: parseInt(laptop.price),
  };
}

module.exports = {
  findAllLaptops,
  registerNewLaptop
};
