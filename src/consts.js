const TABLES = {
    ACTIVITIES: "activities:",
    CONTACTS: "contacts:",
    LAPTOPS: "laptops:",
    USERS: "users:",
    CARTS: "carts:"
};

const TABLES_ID_KEY = {
    [TABLES.ACTIVITIES]: "activity_id",
    [TABLES.CONTACTS]: "contact_id",
    [TABLES.LAPTOPS]: "laptop_id",
    [TABLES.USERS]: "user_id"
};

const TABLES_FIELDS = {
    [TABLES.ACTIVITIES]: [TABLES_ID_KEY[TABLES.ACTIVITIES], "name", "description", "userEmail", "cart", "cartTotal", "time"],
    [TABLES.CONTACTS]: [TABLES_ID_KEY[TABLES.CONTACTS], "name", "email", "phoneNumber", "description", "time", "active"],
    [TABLES.LAPTOPS]: [TABLES_ID_KEY[TABLES.LAPTOPS], "image", "title", "price", "info"],
    [TABLES.USERS]: [TABLES_ID_KEY[TABLES.USERS], "hashPassword", "firstName", "lastName", "email"]
};

module.exports = {TABLES, TABLES_ID_KEY, TABLES_FIELDS};