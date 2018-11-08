import React from 'react';
import { Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import './styles/main.css';

class RegModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button className="log-in"  onClick={this.toggle}>{this.props.button}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
          <ModalBody>
            <form className="login-form" name="form1" action="https://affiliates.winbetaffiliates.bg/signin.php?bare=1" method="post" id="login_form">
              <div className="form-group">
                <input type="text" className="form-control" id="name" name="username" placeholder={this.props.user} />
              </div>
              <div className="form-group">
                <input type="password" className="form-control" id="password" name="password" placeholder={this.props.password} />
              </div>
              <button type="submit" className="log-in-modal" id="loginSubmit">{this.props.logButton}</button>
          </form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default RegModal;