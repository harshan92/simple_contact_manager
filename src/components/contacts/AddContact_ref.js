import React, { Component } from "react";

class AddContact extends Component {
  constructor(props){
    super(props);

    this.nameInput=React.createRef();
    this.emailInput=React.createRef();
    this.phoneInput=React.createRef();
  }
  
  onSubmit = e => {
    e.preventDefault();
    const contact={
      name:this.nameInput.current.value,
      email:this.emailInput.current.value,
      phone:this.phoneInput.current.value
    }
    console.log(contact)
  };
  static defaultProps={
    name:'Harshan MAdhuranga',
    email:'harshan@gmail.com',
    phone:'111-111-1111'
  }

  render() {
    const { name, email, phone } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="name"
                defaultValue={name}
                placeholder="Enter name..."
                ref={this.nameInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-control form-control-lg"
                type="email"
                name="email"
                defaultValue={email}
                ref={this.emailInput}
                placeholder="Enter email..."
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                className="form-control form-control-lg"
                name="phone"
                defaultValue={phone}
                ref={this.phoneInput}
                placeholder="Enter phone..."
              />
            </div>
            <input
              type="submit"
              value="Add Contact"
              className="btn btn-light btn-block"
            />
          </form>
        </div>
      </div>
    );
  }
}
export default AddContact;
