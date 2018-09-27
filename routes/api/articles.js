const router = require("express").Router();
const controller = require("../../controllers/controller");

// // Matches with "/api/articles"
// router.route("/")
//   .get(controller.findAll)
//   .post(controller.create);

// router.route("/scrape")
//   .get(controller.scrape)
  
// // Matches with "/api/articles/:id"
// router
//   .route("/:id")
//   .get(controller.findById)
//   .put(controller.update)
//   .delete(controller.remove);

router.route("/saveArticle").post(controller.saveArticle);
router.route("/getSavedArticles").get(controller.getSavedArticles);
router.route("/deleteSavedArticle").delete(controller.deleteSavedArticle);

module.exports = router;

