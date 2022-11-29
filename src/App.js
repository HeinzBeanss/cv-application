import './App.css';
import General from "../src/components/General"
import EducationalExperience from "../src/components/EducationalExperience"
import PracticalExperience from "../src/components/PracticalExperience"
import React, { useState } from "react";


const App = () => {

  let [inputs, setInputs] = useState(true);
  

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
        <General inputs={inputs}/>
        <EducationalExperience inputs={inputs}/>
        <PracticalExperience inputs={inputs}/>
        <div className="buttonbay"> 
          <button className='edit' onClick={handleEdit}>EDIT</button>
          <button className='save' onClick={handleSave}>SAVE</button>
        </div>
      </div>
    );
  }


export default App;
