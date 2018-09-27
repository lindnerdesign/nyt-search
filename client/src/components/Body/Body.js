import React from "react";
import { FormGroup, ControlLabel, FormControl, Grid, Row, Col } from 'react-bootstrap';
import DeleteBtn from "../DeleteBtn";
import { List, ListItem } from "../List";
import { Link } from "react-router-dom";
import API from "../../utils/API";

class Body extends React.Component {
    state = {
      article: [],
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
  
    loadArticle = (query) => {
      API.search(query)
        .then(res => this.setState({ article: res.data, title: "", date: "", url: "" }))
        .catch(err => console.log(err));
    };
 
    deleteArticle = id => {
      API.deleteSavedArticle(id)
        .then(res => this.loadArticle())
        .catch(err => console.log(err));
    };
  
    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
  
    handleFormSubmit = event => {
      event.preventDefault();
      console.log(this.state.topic);
        API.search({
          topic: this.state.topic,
          startyear: this.state.startyear,
          endyear: this.state.endyear
        })
          .then(res => this.loadArticle())
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
                        className="input"
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

                {this.state.article.length ? (
                    <List>
                      {this.state.article.map(article => (
                        <ListItem key={article._id}>
                          <Link to={"/" + article._id}>
                            <strong>
                              {article.title} date: {article.date}
                            </strong>
                          </Link>
                          <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                        </ListItem>
                      ))}
                    </List>
                  ) : (
                    <h3>No Results to Display</h3>
                  )}

                <h1 className="results">Saved Articles</h1>
            </Col>
        </Row>
    </Grid>
    );
  }
}

export default Body;
