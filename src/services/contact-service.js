// const Contact = require("./contact-model");
const _ = require("lodash");
const { v4: uuidv4 } = require('uuid');
const {insertToTable, getAllByKey, getAllKeysByPrefix} = require("../redisConnector");
const {TABLES, TABLES_ID_KEY} = require("../consts");

async function findAllContacts() {
  const contactsKeys = await getAllKeysByPrefix(TABLES.CONTACTS);
  let contacts = [];
  for(i in contactsKeys) {
    contacts.push(await getAllByKey(contactsKeys[i]));
  }

  return _.map(contacts, sanitizeContact);
}

function sanitizeContact(contact) {
  return {
    id: contact[TABLES_ID_KEY[TABLES.CONTACTS]],
    ...contact,
    active: contact.active == "true" ? true : false
  };
}

function sanitizeContactForDb(contact) {
  return {
    ...contact,
    active: contact.active == true ? "true" : "false"
  };
}

async function registerNewContact(contactData) {
  const dbFields = _.pick(contactData, [
    "name",
    "email",
    "phoneNumber",
    "description",
    "time",
    "active"
  ]);

  const uId = uuidv4();

  let contactObject = {
    [TABLES_ID_KEY[TABLES.CONTACTS]]: uId,
    ...dbFields
  };

  contactObject = sanitizeContactForDb(contactObject);
  
  await insertToTable(TABLES.CONTACTS + uId, contactObject);

  return sanitizeContact(contactObject);
}

async function updateContactActive(id) {
  const contactKey = TABLES.CONTACTS + id;
  let contactData = await getAllByKey(contactKey);

  contactData.active = contactData.active == "true" ? "false" : "true";

  await insertToTable(contactKey, contactData);
  return sanitizeContact(contactData);
}

module.exports = {
  findAllContacts,
  registerNewContact,
  updateContactActive
};
