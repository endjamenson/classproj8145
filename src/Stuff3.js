//Dan Cove dancov8145, 3/8/2024 CIS435
//3.2 Course Project: Single Page Application with Navigation

//Dim up the imports
import React, { Component } from "react";
import "./Stuff3.css"; // Css Shinanigans 


class Stuff3 extends Component {
  constructor(props) {
    super(props);
    // Init
    this.state = {
      email: '',
      phone: '',
      firstName: '',
      lastName: '',
      question: '',
    };
  }

  // Update state on input change
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  // Handle form submission, clear out boxes, verify that the email is an an email, and "submit" it. (Dummy for now)
  handleSubmit = (event) => {
    event.preventDefault(); 

    // Clear the form fields 
    this.setState({
      email: '',
      phone: '',
      firstName: '',
      lastName: '',
      question: '',
    });

    // Notification window for when the user submits the request. 
    alert('Thank you for your submission! We will get back to you as soon as possible.');
  }

  render() {
    return (
      <form className="contact-form" onSubmit={this.handleSubmit}>
        <h2>Contact Us</h2>
        <div className="input-container">
          <label htmlFor="email">Email (required)</label>
          <input type="email" id="email" name="email" required value={this.state.email} onChange={this.handleChange} />
        </div>
        <div className="input-container">
          <label htmlFor="phone">Phone Number (optional)</label>
          <input type="tel" id="phone" name="phone" value={this.state.phone} onChange={this.handleChange} />
        </div>
        <div className="input-container">
          <label htmlFor="firstName">First Name (required)</label>
          <input type="text" id="firstName" name="firstName" required value={this.state.firstName} onChange={this.handleChange} />
        </div>
        <div className="input-container">
          <label htmlFor="lastName">Last Name (required)</label>
          <input type="text" id="lastName" name="lastName" required value={this.state.lastName} onChange={this.handleChange} />
        </div>
        <div className="input-container">
          <label htmlFor="question">Question/Comment</label>
          <textarea id="question" name="question" value={this.state.question} onChange={this.handleChange}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}


export default Stuff3;