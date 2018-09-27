const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  articleId: {type: String, require: true},
  title: {type: String, require: true},
  date: { type: Date, default: Date.now },
  url: {type: String, require: true},
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
