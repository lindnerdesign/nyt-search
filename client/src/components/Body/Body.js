import React from "react";
import { FormGroup, ControlLabel, FormControl, Grid, Row, Col } from 'react-bootstrap';
import Btn from "../Btn";
import { List, ListItem } from "../List";
// import { Link } from "react-router-dom";
import API from "../../utils/API";


class Body extends React.Component {
    state = {
      article: [],
      results: [],
      articleId: "",
      title: "",
      date: "",
      url: "",
      topic: "",
      startyear: "",
      endyear: ""
    };
  
    componentDidMount() {
      this.loadArticle();
    }

    loadArticle = () => {
      API.getArticles()
        .then (res => {
          this.setState({article:res.data})
        })
        .catch(err => console.log(err));
    };
 
    deleteArticle = id => {
      API.deleteArticle(id)
        .then(res => this.loadArticle())
        .catch(err => console.log(err));
    };

    saveArticle = (article) => {
      // console.log(JSON.stringify(article))
      API.saveArticle(article)
      .then(res => this.loadArticle())
      .catch(err => console.log(err));
    }
  
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
      // console.log(this.state.topic);
        API.search({
          topic: this.state.topic,
          startyear: this.state.startyear,
          endyear: this.state.endyear
        })
          .then(res => {
            console.log(res.data);
            this.setState({ results: res.data.response.docs, title: res.data.response.docs[0].headline.main, date: "", url: ""});
           
          })
          .catch(err => console.log(err));
    };
  
    render() {
      return (
            <Grid>
                <Row className="show-grid">
                <Col xs={12} md={12}>
                <FormGroup className="form"
                    controlId="formBasicText"
                    >
                    <h1>Search Articles</h1>
                    <ControlLabel>Topic</ControlLabel>
                    <FormControl
                        className="form-control"
                        name="topic"
                        type="input"
                        value={this.state.topic}
                        placeholder="Article Topic"
                        onChange={this.handleInputChange}
                    />

                    <ControlLabel>Start Year</ControlLabel>
                    <FormControl
                        className="form-control"
                        name="startyear"
                        type="input"
                        value={this.state.startyear}
                        placeholder="YYYY"
                        onChange={this.handleInputChange}
                    />

                    <ControlLabel>End Year</ControlLabel>
                    <FormControl
                        className="form-control"
                        name="endyear"
                        type="input"
                        value={this.state.endyear}
                        placeholder="YYYY"
                        onChange={this.handleInputChange}
                    />
                    <button type="submit" onClick={this.handleFormSubmit} className="btn btn-danger center-block">Search</button> 
                </FormGroup>

                <h1 className="results">Article Results</h1>

                {this.state.results.length ? (
                    <List>
                      {this.state.results.map(article => (
                        <ListItem key={article._id}>
                          {/* <Link > */}
                            <strong>
                              <h3>{ article.headline.main }</h3>
                              <p>{ article.web_url }</p>
                              <p>{ article.pub_date }</p>
                            </strong>
                          {/* </Link> */}
                          <Btn className="btn btn-success"
                          onClick={() => this.saveArticle({title: article.headline.main, url: article.web_url, date: article.pub_date})}>
                          Save
                          </Btn>
                        </ListItem>
                      ))}
                    </List>
                  ) : (
                    <h3>No Results to Display</h3>
                  )}
                <h1 className="saved">Saved Articles</h1>

                {this.state.article.length ? (
                    <List>
                      {this.state.article.map(article => (
                        <ListItem key={article._id}>
                          {/* <Link to={article.url}> */}
                            <strong>
                              <h3>{ article.title }</h3>
                              <p>{ article.url }</p>
                              <p>{ article.date }</p>
                            </strong>
                          {/* </Link> */}
                          <Btn className="btn btn-danger" onClick={() => this.deleteArticle(article._id)}>
                          delete
                          </Btn>
                        </ListItem>
                      ))}
                    </List>
                  ) : (
                    <h3>No Saved to Articles</h3>
                  )}
            </Col>
        </Row>
    </Grid>
    );
  }
}

export default Body;
