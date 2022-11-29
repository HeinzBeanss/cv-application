import "./Component.css";
import React, { useState } from "react";

const EducationalExperience = (props) => {  
    
  let [education, setEducation] = useState({schoolname: "", titleofstudy: "", dateofstudy: ""});

  const handleChangeSchoolName = (event) => {
    setEducation({...education, schoolname: event.target.value})
    }

  const handleChangeTOS = (event) => {
    setEducation({...education, titleofstudy: event.target.value})
    }

  const handleChangeDOS = (event) => {
    setEducation({...education, dateofstudy: event.target.value})
    }

    if (props.inputs === true) {
        return (
            <div className="general">
                <h2 className="sectiontitle">Educational Experience</h2>
    
                <form>
                    <label> School Name: 
                            <input type="text" value={education.schoolname} onChange={handleChangeSchoolName}/>
                        </label>
                        <label> Title of Study: 
                            <input type="text" value={education.titleofstudy} onChange={handleChangeTOS}/>
                        </label>
                        <label> Date of Study: 
                            <input type="text" value={education.dateofstudy} onChange={handleChangeDOS}/>
                        </label>
                    </form>
                </div>
            )
            } else {
                return (
                    <div className="educational">
                        <h2 className="sectiontitle">Educational Experience</h2>
                        <p className="finishedinfo"> {education.schoolname} </p>
                        <p className="finishedinfo"> {education.titleofstudy} </p>
                        <p className="finishedinfo"> {education.dateofstudy} </p>
                    </div>
                )
            }
    
}

export default EducationalExperience;
