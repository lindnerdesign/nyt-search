import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY = "926504f5198644b2901c22c0c7f2579b";

export default {
 
  // Gets all articles
  search: function(query) {
    let url = "";
    url = `${BASEURL}${APIKEY}&q=${query.topic}&end_date${query.endyear}1231&begin_date${query.startyear}0101`;
    // console.log(topic)
    return axios.get(url);
  },
  // Gets the book with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the book with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/books", articleData);
  }
};