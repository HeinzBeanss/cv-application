import "./Component.css";
import React, { Component } from "react";

class General extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: this.props.general.general.name,
            email: this.props.general.general.email,
            phone: this.props.general.general.phone,
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);

    }

    handleChangeName(event) {
        this.setState({name: event.target.value})
    }

    handleChangeEmail(event) {
        this.setState({email: event.target.value})
    }

    handleChangePhone(event) {
        this.setState({phone: event.target.value})
    }

    render() {
        if (this.props.general.inputs === true) {
        return (
            <div className="general">
                <h2 className="sectiontitle">General Information</h2>

                <form>
                    <label> Full Name: 
                        <input type="text" value={this.state.name} onChange={this.handleChangeName}/>
                    </label>
                    <label> Email Address: 
                        <input type="text" value={this.state.email} onChange={this.handleChangeEmail}/>
                    </label>
                    <label> Phone Number: 
                        <input type="text" value={this.state.phone} onChange={this.handleChangePhone}/>
                    </label>
                </form>
            </div>
            
        )
    } else {
        return  <div className="general">
        <h2 className="sectiontitle">General Information</h2>
        <h3 className="finishedinfo"> {this.state.name} </h3>
        <h3 className="finishedinfo"> {this.state.email} </h3>
        <h3 className="finishedinfo"> {this.state.phone} </h3>
    </div>
    }
    }
}

export default General;
