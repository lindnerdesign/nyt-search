import React from "react";
import { FormGroup, ControlLabel, FormControl, Grid, Row, Col } from 'react-bootstrap';
import DeleteBtn from "../DeleteBtn";
import { List, ListItem } from "../List";
import { Link } from "react-router-dom";
import API from "../../utils/API";

class Body extends React.Component {
    state = {
      article: [],
      title: "",
      date: "",
      synopsis:"",
      url: ""
    };
  
    componentDidMount() {
      this.loadArticle();
    }
  
    loadArticle = () => {
      API.getArticle()
        .then(res =>
          this.setState({ article: res.data, title: "", date: "", synopsis:"", url: "" })
        )
        .catch(err => console.log(err));
    };
  
    deleteArticle = id => {
      API.deleteArticle(id)
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
      if (this.state.title && this.state.date) {
        API.saveArticle({
          title: this.state.title,
          date: this.state.date,
          synopsis: this.state.synopsis,
          url: this.state.url
        })
          .then(res => this.loadArticle())
          .catch(err => console.log(err));
      }
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
                        className="input"
                        type="text"
                        value={this.state.value}
                        placeholder="Article Topic"
                        onChange={this.handleChange}
                    />

                    <ControlLabel className="start">Start Year</ControlLabel>
                    <FormControl 
                        className="input"
                        type="text"
                        value={this.state.value}
                        placeholder="00/00/0000"
                        onChange={this.handleChange}
                    />

                    <ControlLabel>End Year</ControlLabel>
                    <FormControl 
                        className="input"
                        type="text"
                        value={this.state.value}
                        placeholder="00/00/0000"
                        onChange={this.handleChange}
                    />
                    <button type="submit" href="/" className="btn btn-danger center-block">Search</button> 
                </FormGroup>

                <h1 className="results">Article Results</h1>

                {this.state.article.length ? (
                    <List>
                      {this.state.article.map(article => (
                        <ListItem key={article._id}>
                          <Link to={"/" + article._id}>
                            <strong>
                              {article.title} by {article.author}
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
