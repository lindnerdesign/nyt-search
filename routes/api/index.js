const router = require("express").Router();
const articleRoutes = require("./articles");

// Articles routes
router.use("/", articleRoutes);

module.exports = router;
