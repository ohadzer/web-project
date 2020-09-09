// const Activities = require("./activities-model");
const _ = require("lodash");
const { v4: uuidv4 } = require('uuid');
const {insertToTable, getAllByKey, getAllKeysByPrefix} = require("../redisConnector");
const {TABLES, TABLES_ID_KEY} = require("../consts");

const CHECKOUT = "checkout";
const LAPTOP = "laptop";
const COUNT = "count";

async function findAllActivities() {
  const activitiesKeys = await getAllKeysByPrefix(TABLES.ACTIVITIES);
  let activities = [];
  for (i in activitiesKeys) {
    activities.push(await getAllByKey(activitiesKeys[i]));
  }

  return await Promise.all(_.map(activities, async (v) => await sanitizeActivity(v)));
}

//async function findUserCheckout(user) {
  //const { userEmail } = user;
  //const activities = await Activities.find({
    //name: "checkout",
    //userEmail: userEmail
  //});
  //return _.map(activities, sanitizeActivity);
//}

async function findUserCheckout(user) {
  const { userEmail } = user;
  const userCheckoutKeys = await getAllKeysByPrefix(TABLES.ACTIVITIES + userEmail + ":" + CHECKOUT);
  let userCheckouts = [];
  for(i in userCheckoutKeys) {
    userCheckouts.push(await getAllByKey(userCheckoutKeys[i]));
  }
  return await Promise.all(_.map(userCheckouts, async (v) => await sanitizeActivity(v)));
}

async function sanitizeActivity(activity) {
  let cart = null;
  if(!_.isEmpty(activity.cart)) {
    cart = [];
    const cartKey = activity.cart;
    const userMidCart = await getAllByKey(cartKey);
    
    const userMidCartEntries = Object.entries(userMidCart);
    console.log(userMidCartEntries);
    let cartObject = {};
    for(const [key, value] of userMidCartEntries) {
      if(key.includes(LAPTOP)) {
        cartObject[LAPTOP] = value;
      } else {
        cartObject[COUNT] = parseInt(value);
        cart.push(cartObject);
        cartObject = {};
      }
    }
}

  return {
    id: activity[TABLES_ID_KEY[TABLES.ACTIVITIES]],
    ...activity,
    cart: cart
  };
}

async function createCartObject(dbFields) {
  const cartKey = TABLES.CARTS + dbFields.userEmail;

  let cartObject = {};

  for(i in dbFields.cart) {
    const obj = dbFields.cart[i];
    cartObject[`${LAPTOP}:${obj[LAPTOP]}`] = obj[LAPTOP];
    cartObject[`${COUNT}:${obj[LAPTOP]}`] = obj[COUNT];
  }

  await insertToTable(cartKey, cartObject);

  return cartKey;
}

async function registerNewActivity(activityData) {
  const dbFields = _.pick(activityData, [
    "name",
    "description",
    "cart",
    "cartTotal",
    "userEmail",
    "time"
  ]);

  const uId = uuidv4();

  const activity = {
    [TABLES_ID_KEY[TABLES.ACTIVITIES]]: uId,
    ...dbFields
  };

  if(dbFields.name == CHECKOUT) {
    const cartKey = await createCartObject(dbFields);
    activity.cart = cartKey;
  }

  await insertToTable(TABLES.ACTIVITIES + dbFields.userEmail + ":" + dbFields.name, activity);

  return await sanitizeActivity(activity);
}

module.exports = {
  findAllActivities,
  registerNewActivity,
  findUserCheckout
};
