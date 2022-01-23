import React from "react";

class AddContact extends React.Component{
    state={
        name:'',
        email:''
    }
    add = (e)=>{
        e.preventDefault();
        if(this.state.name==='' || this.state.name===''){
            alert('All field are mandatory');
        }
        this.props.addContractHander(this.state);
        this.setState({name:"",email:""});
    }
    render(){
        return (
            <div>
                <h3>Add New Contact</h3>
                <form className="ui form" onSubmit={this.add}>
                    <div className="col-sm-12">
                        <div className="field">
                            <label>Name</label>
                            <input type="text" value={this.state.name} onChange={(e)=>this.setState({name: e.target.value})} name="name" placeholder="Enter Name"/>
                        </div>
                        <div className="field">
                            <label>Email</label>
                            <input type="text" value={this.state.email} onChange={(e)=>this.setState({email: e.target.value})} name="email" placeholder="Enter Email"/>
                        </div>
                        <div className="field">
                            <button  className="ui button blue" name="saveBtn" > Save</button>
                        </div>

                    </div>
                </form>
            </div>
        );
    }
}

export default  AddContact;