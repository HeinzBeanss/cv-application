import './App.css';
import General from "../src/components/General"
import EducationalExperience from "../src/components/EducationalExperience"
import PracticalExperience from "../src/components/PracticalExperience"
import React, { Component } from "react";


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
      inputs: true,

      general: {
        name: "",
        phone: "",
        email: "",
      },

      education: {
        schoolname: "",
        titleofstudy: "",
        dateofstudy: ""
      },

      practical: {
        companyname: "",
        positiontitle: "",
        taskdescription: "",
        dateworked: "",
      }
    }

    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);

  }

  handleEdit() {
    this.setState({inputs: true});

  }

  handleSave() {
    console.log("test");
    this.setState({inputs: false});

  }

  render() {
    return (
      <div className="App">
        <h1>CV Application</h1>
        <General general={this.state}/>
        <EducationalExperience education={this.state}/>
        <PracticalExperience practical={this.state}/>
        <div className="buttonbay"> 
          <button className='edit' onClick={this.handleEdit}>EDIT</button>
          <button className='save' onClick={this.handleSave}>SAVE</button>
        </div>
      </div>
    );
  }
}

export default App;
