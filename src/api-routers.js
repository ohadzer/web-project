const router = require("express").Router();
const usersRouter = require("./routes/users-router");
const laptopsRouter = require("./routes/laptop-router");
const activitiesRouter = require("./routes/activities-router");
const contactRouter = require("./routes/contact-router");

router.use("/users", usersRouter);
router.use("/laptops", laptopsRouter);
router.use("/activities", activitiesRouter);
router.use("/contact", contactRouter);

module.exports = router;
