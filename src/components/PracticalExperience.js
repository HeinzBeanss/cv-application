import "./Component.css";
import React, { Component } from "react";

class PracticalExperience extends Component {
    constructor(props) {
        super(props)

        this.state = {
            companyname: this.props.practical.practical.companyname,
            positiontitle: this.props.practical.practical.positiontitle,
            taskdescription: this.props.practical.practical.taskdescription,
            dateworked: this.props.practical.practical.dateworked,
        }
        this.handleChangeCompanyName = this.handleChangeCompanyName.bind(this);
        this.handleChangePositionTitle = this.handleChangePositionTitle.bind(this);
        this.handleChangeTaskDescription = this.handleChangeTaskDescription.bind(this);
        this.handleChangeDateWorked = this.handleChangeDateWorked.bind(this);
    }

    handleChangeCompanyName(event) {
        this.setState({companyname: event.target.value})
    }

    handleChangePositionTitle(event) {
        this.setState({positiontitle: event.target.value})
    }

    handleChangeTaskDescription(event) {
        this.setState({taskdescription: event.target.value})
    }

    handleChangeDateWorked(event) {
        this.setState({dateworked: event.target.value})
    }

    render() {
        if (this.props.practical.inputs === true) {
            return (
                <div className="practical">
                    <h2 className="sectiontitle">Practical Experience</h2>
    
                    <form>
                        <label> Name of Company: 
                            <input type="text" value={this.state.companyname} onChange={this.handleChangeCompanyName}/>
                        </label>
                        <label> Title Position: 
                            <input type="text" value={this.state.positiontitle} onChange={this.handleChangePositionTitle}/>
                        </label>
                        <label> Task Description: 
                            <input type="text" value={this.state.taskdescription} onChange={this.handleChangeTaskDescription}/>
                        </label>
                        <label> Date Worked: 
                            <input type="text" value={this.state.dateworked} onChange={this.handleChangeDateWorked}/>
                        </label>
                    </form>
                </div>
            )
            } else {
                return (
                    <div className="practical">
                        <h2 className="sectiontitle">Practical Experience</h2>
                        <p className="finishedinfo"> {this.state.companyname} </p>
                        <p className="finishedinfo"> {this.state.positiontitle} </p>
                        <p className="finishedinfo"> {this.state.taskdescription} </p>
                        <p className="finishedinfo"> {this.state.dateworked} </p>
                    </div>
                )
            }
    }
}

export default PracticalExperience;
