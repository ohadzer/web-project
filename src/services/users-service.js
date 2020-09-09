// const User = require("./user-model");
const crypto = require("crypto");
const _ = require("lodash");
const { v4: uuidv4 } = require('uuid');
const {TABLES, TABLES_ID_KEY} = require("../consts");
const {insertToTable, getAllByKey, getAllKeysByPrefix} = require("../redisConnector");

async function registerNewUser(userPayload) {
  const { password, email } = userPayload;

  const userExist = await findUserByEmail(email);

  if (userExist) {
    return null;
  }
  const otherFields = _.pick(userPayload, ["firstName", "lastName"]);

  const uId = uuidv4();

  const hashPassword = crypto
    .createHash("sha256")
    .update(password)
    .digest("base64");

    const userObject = {
      [TABLES_ID_KEY[TABLES.USERS]]: uId,
      "hashPassword": hashPassword,
      "email": email,
      ...otherFields
    };
  
    await insertToTable(TABLES.USERS + email, userObject);
  
    return sanitizeUser(userObject);
}

async function findUserByEmail(email) {
  return await getAllByKey(TABLES.USERS + email);
};

function sanitizeUser(user) {
  const sanitizedFields = _.pick(user, ["firstName", "lastName", "email"]);
  return {
    ...sanitizedFields,
    id: user[TABLES_ID_KEY[TABLES.USERS]]
  };
}

async function findUserById(userId) {
  const rawUser = User.findOne({
    _id: userId
  });
  return sanitizeUser(rawUser);
}

async function authenticateUser(userPayload) {
  const { email, password } = userPayload;
  // create sha256
  const hashPassword = crypto
    .createHash("sha256")
    .update(password)
    .digest("base64");

  const rawUser = await findUserByEmail(email);

  if (!rawUser || rawUser.hashPassword != hashPassword) { //TODO - VALIDATE PARAM hashPass
    return null;
  }

  return sanitizeUser(rawUser, email);
}

async function updateUserPassword(userPayload) {
  const { email, password, newPassword } = userPayload;
  const hashPassword = crypto
    .createHash("sha256")
    .update(password)
    .digest("base64");

  const newHashPassword = crypto
    .createHash("sha256")
    .update(newPassword)
    .digest("base64");  

  const updatedUser = await User.findOneAndUpdate(
    {
      email: email,
      hashPassword: hashPassword
    },
    { hashPassword: newHashPassword },
    { new: true }
  );
  if (!updatedUser) {
    return null;
  }
  return sanitizeUser(updatedUser);
}

module.exports = {
  registerNewUser,
  sanitizeUser,
  findUserById,
  authenticateUser,
  updateUserPassword
};
