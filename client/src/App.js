import React from "react";
import { Grid, Row, Col} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
import Form from "./components/Form";
import Results from "./components/Results";
import Saved from "./components/Saved";
import Footer from "./components/Footer";
import "./App.css"




const App = () => (
  <Router>
    <div>
      <Jumbotron />
        <Grid>
         <Row className="show-grid">
           <Col xs={12} md={12}>
            <Form />
            <Results />
            <Saved />



            </Col>
          </Row>
        </Grid>
      <Footer />
    </div>
  </Router>
);

export default App;
