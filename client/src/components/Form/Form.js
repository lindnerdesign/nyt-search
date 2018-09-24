import React from "react";
import { FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

const Form = () => ( 
    <FormGroup className="form"
        controlId="formBasicText"
        >
        <h1>Search Articles</h1>
        <ControlLabel>Topic</ControlLabel>
        <FormControl
            className="input"
            type="text"
            // value={this.state.value}
            placeholder="Article Topic"
            // onChange={this.handleChange}
        />

         <ControlLabel className="start">Start Year</ControlLabel>
         <FormControl 
            className="input"
            type="text"
            // value={this.state.value}
            placeholder="00/00/0000"
            // onChange={this.handleChange}
        />

         <ControlLabel>End Year</ControlLabel>
         <FormControl 
            className="input"
            type="text"
            // value={this.state.value}
            placeholder="00/00/0000"
            // onChange={this.handleChange}
        />
        <button type="submit" className="btn btn-danger center-block">Search</button> 
    </FormGroup>
);

export default Form;