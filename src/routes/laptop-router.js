const laptopsRouter = require("express").Router();
const { findAllLaptops } = require("../services/laptops-service");

async function sessionChecker(req, res, next) {
  if (process.env.NODE_ENV === "test") {
    next();
  } else {
    if (!req.session.user) {
      res.sendStatus(401);
    } else {
      next();
    }
  }
}

laptopsRouter.get("/", sessionChecker, async (req, res) => {
  const laptops = await findAllLaptops();
  res.json(laptops);
});

module.exports = laptopsRouter;
