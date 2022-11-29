import './App.css';
import General from "../src/components/General"
import EducationalExperience from "../src/components/EducationalExperience"
import PracticalExperience from "../src/components/PracticalExperience"
import React, { useState, useEffect } from "react";


const App = () => {

  let [inputs, setInputs] = useState(true);
  let [general, setGeneral] = useState({name: "", phone: "", email: ""});
  let [education, setEducation] = useState({schoolname: "", titleofstudy: "", dateofstudy: ""});
  let [practical, setPractical] = useState({companyname: "", positiontitle: "", taskdescription: "", dateworked: ""})

  // this was the contructor above

  const handleEdit = () => {
    setInputs(inputs = true);
  }

  const handleSave = () => {
    setInputs(inputs = false);
  }

  
    return (
      <div className="App">
        <h1>CV Application</h1>
        <General general={general} inputs={inputs}/>
        {/* <EducationalExperience education={education}/>
        <PracticalExperience practical={practical}/> */}
        <div className="buttonbay"> 
          <button className='edit' onClick={handleEdit}>EDIT</button>
          <button className='save' onClick={handleSave}>SAVE</button>
        </div>
      </div>
    );
  }


export default App;
