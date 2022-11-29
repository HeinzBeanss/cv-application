import "./Component.css";
import React, { useState } from "react";

const General = (props) => {

    let [general, setGeneral] = useState({name: "", phone: "", email: ""});

    const handleChangeName = (event) => {
        setGeneral({...general, name: event.target.value})
    }

    const handleChangeEmail = (event) => {
        setGeneral({...general, email: event.target.value})
    }

    const handleChangePhone = (event) => {
        setGeneral({...general, phone: event.target.value})
    }

    if (props.inputs === true) {
        return (
            <div className="general">
                <h2 className="sectiontitle">General Information</h2>

                <form>
                    <label> Full Name: 
                        <input type="text" value={general.name} onChange={handleChangeName}/>
                    </label>
                    <label> Email Address: 
                        <input type="text" value={general.email} onChange={handleChangeEmail}/>
                    </label>
                    <label> Phone Number: 
                        <input type="text" value={general.phone} onChange={handleChangePhone}/>
                    </label>
                </form>
            </div>
            
        )
    } else {
        return  <div className="general">
        <h2 className="sectiontitle">General Information</h2>
        <h3 className="finishedinfo"> {general.name} </h3>
        <h3 className="finishedinfo"> {general.email} </h3>
        <h3 className="finishedinfo"> {general.phone} </h3>
    </div>
    }
    
}

export default General;
