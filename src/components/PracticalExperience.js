import "./Component.css";
import React, { useState } from "react";

const PracticalExperience = (props) => {

    let [practical, setPractical] = useState({companyname: "", positiontitle: "", taskdescription: "", dateworked: ""})


    const handleChangeCompanyName = (event) => {
        setPractical({...practical, companyname: event.target.value})
    }

    const handleChangePositionTitle = (event) => {
        setPractical({...practical, positiontitle: event.target.value})
    }

    const handleChangeTaskDescription = (event) => {
        setPractical({...practical, taskdescription: event.target.value})
    }

    const handleChangeDateWorked = (event) => {
        setPractical({...practical, dateworked: event.target.value})
    }

        if (props.inputs === true) {
            return (
                <div className="practical">
                    <h2 className="sectiontitle">Practical Experience</h2>
    
                    <form>
                        <label> Name of Company: 
                            <input type="text" value={practical.companyname} onChange={handleChangeCompanyName}/>
                        </label>
                        <label> Title Position: 
                            <input type="text" value={practical.positiontitle} onChange={handleChangePositionTitle}/>
                        </label>
                        <label> Task Description: 
                            <input type="text" value={practical.taskdescription} onChange={handleChangeTaskDescription}/>
                        </label>
                        <label> Date Worked: 
                            <input type="text" value={practical.dateworked} onChange={handleChangeDateWorked}/>
                        </label>
                    </form>
                </div>
            )
            } else {
                return (
                    <div className="practical">
                        <h2 className="sectiontitle">Practical Experience</h2>
                        <p className="finishedinfo"> {practical.companyname} </p>
                        <p className="finishedinfo"> {practical.positiontitle} </p>
                        <p className="finishedinfo"> {practical.taskdescription} </p>
                        <p className="finishedinfo"> {practical.dateworked} </p>
                    </div>
                )
            }
    
}

export default PracticalExperience;
