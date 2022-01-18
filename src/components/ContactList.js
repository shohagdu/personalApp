import React from "react";

const ContactList = (props) => {
    const renderContactList = props.contacts.map((contact,i)=>{
       return (
           <div className="item" key={i}>
               <div className="content">
                   <div className="header">{ contact.name}</div>
                   <div >{ contact.email}</div>
                   <div >{ contact.address}</div>
               </div>
               <i className="trash alternate outline icon"></i>
           </div>
       );
    });
    return <div className="ui celled List"> { renderContactList } </div>;
}
export default ContactList