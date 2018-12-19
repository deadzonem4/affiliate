import React, { Component } from 'react';

class ContactForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      subject: '',
      message: '',
      formErrors: {email: '', name: '', subject: '', message: ''},
      emailValid: false,
      nameValid: false,
      subjectValid: false,
      messageValid: false,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
      () => { this.validateField(name, value) });
  }

  submitInput = (e) => {
    e.preventDefault();
    let formSuccess = {
      name : this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message
    }
    let contact = JSON.stringify(formSuccess)
    console.log(formSuccess)     //javascript object
    console.log(contact)       //JSON text

    // const fs = require('fs');
    // fs.writeFileSync('contact.json', contact); 


// var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new activeXObject("Microsoft.XMLHTTP");
// xhr.open( 'post', '/json', true );
// xhr.send(contact);

  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let nameValid = this.state.nameValid;
    let subjectValid = this.state.subjectValid;
    let messageValid = this.state.messageValid;
    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'name':
        nameValid = value.match(/^[a-zA-Zа-яА-Я\-\s]+$/);
        fieldValidationErrors.name = nameValid ? '': ' is invalid';
        break;
      case 'subject':
        subjectValid = value.match(/^[a-zA-Zа-яА-Я\-\s]+$/);
        fieldValidationErrors.subject = subjectValid ? '': ' is invalid';
        break;
      case 'message':
        messageValid = value.match(/[^"']+$/);
        fieldValidationErrors.message = messageValid ? '': ' is invalid';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
      emailValid: emailValid,
      nameValid: nameValid,
      subjectValid: subjectValid,
      messageValid: messageValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.nameValid  && this.state.subjectValid  && this.state.messageValid
    });
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render () {
    return (
      <div className="container">
        <form className="winbetForm">
          <h2 className="dark-title">{this.props.title}</h2>
          <div className="title-red-line"></div>
          <p className="subtitle-text">{this.props.subtitle}</p>
          <div className="form-fields">
            <div className="row">
              <div className="col-sm-6 left-col">
                <input 
                  type="email" 
                  required 
                  className={`form-control ${this.errorClass(this.state.formErrors.email)}`} 
                  name="email"
                  placeholder={this.props.email}
                  value={this.state.email}
                  onChange={this.handleUserInput}  
                />
                <input 
                  type="text" 
                  className={`form-control ${this.errorClass(this.state.formErrors.name)}`} 
                  name="name"
                  placeholder={this.props.name}
                  value={this.state.name}
                  onChange={this.handleUserInput}  
                />
                <input 
                  type="text" 
                  className={`form-control ${this.errorClass(this.state.formErrors.subject)}`} 
                  name="subject"
                  placeholder={this.props.subject}
                  value={this.state.subject}
                  onChange={this.handleUserInput}  
                />
              </div>
              <div className="col-sm-6 right-col">
                <textarea 
                  className={`form-control ${this.errorClass(this.state.formErrors.message)}`} 
                  name="message"
                  placeholder={this.props.message}
                  value={this.state.message}
                  onChange={this.handleUserInput}  
                />
              </div>
            </div>
          </div>
          <button 
            type="submit" 
            className="btn btn-submit" 
            disabled={!this.state.formValid} 
            onClick={this.submitInput}
          >
            {this.props.button}
          </button>
        </form>
      </div>
    )
  }
}

export default ContactForm;