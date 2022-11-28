import "./Component.css";
import React, { Component } from "react";

class EducationalExperience extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            schoolname: this.props.education.education.schoolname,
            titleofstudy: this.props.education.education.titleofstudy,
            dateofstudy: this.props.education.education.dateofstudy,
        }
        this.handleChangeSchoolName = this.handleChangeSchoolName.bind(this);
        this.handleChangeTOS = this.handleChangeTOS.bind(this);
        this.handleChangeDOS = this.handleChangeDOS.bind(this);
    }

    handleChangeSchoolName(event) {
        this.setState({schoolname: event.target.value})
    }

    handleChangeTOS(event) {
        this.setState({titleofstudy: event.target.value})
    }

    handleChangeDOS(event) {
        this.setState({dateofstudy: event.target.value})
    }

    render() {
        if (this.props.education.inputs === true) {
            return (
                <div className="general">
                    <h2 className="sectiontitle">Educational Experience</h2>
    
                    <form>
                        <label> School Name: 
                            <input type="text" value={this.state.schoolname} onChange={this.handleChangeSchoolName}/>
                        </label>
                        <label> Title of Study: 
                            <input type="text" value={this.state.titleofstudy} onChange={this.handleChangeTOS}/>
                        </label>
                        <label> Date of Study: 
                            <input type="text" value={this.state.dateofstudy} onChange={this.handleChangeDOS}/>
                        </label>
                    </form>
                </div>
            )
            } else {
                return (
                    <div className="educational">
                        <h2 className="sectiontitle">Educational Experience</h2>
                        <p className="finishedinfo"> {this.state.schoolname} </p>
                        <p className="finishedinfo"> {this.state.titleofstudy} </p>
                        <p className="finishedinfo"> {this.state.dateofstudy} </p>
                    </div>
                )
            }
    }
}

export default EducationalExperience;
