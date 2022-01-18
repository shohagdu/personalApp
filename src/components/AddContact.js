import React from "react";

class AddContact extends React.Component{
    render(){
        return (
            <div>
                <h3>Add New Contact</h3>
                <form className="ui form">
                    <div className="col-sm-12">
                        <div className="field">
                            <label>Name</label>
                            <input type="text" name="name" placeholder="Enter Name"/>
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <input type="text" name="email" placeholder="Enter Email"/>
                        </div>
                        <div className="field">
                            <button type="button" className="ui button blue" name="saveBtn" > Save</button>
                        </div>

                    </div>
                </form>
            </div>
        );
    }
}

export default  AddContact;