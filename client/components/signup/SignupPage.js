import React from 'react';
import PropTypes from 'prop-types';
import SignupForm from './SignupForm';
import { connect } from 'react-redux';
import { userSignupRequest, isUserExists } from '../../actions/signupActions';
import { addFlashMessage, deleteFlashAllMessages } from '../../actions/flashMessages';

class SignupPage extends React.Component {
  componentWillMount() {
    this.props.deleteFlashAllMessages();
  }

  render() {
    const { userSignupRequest, addFlashMessage, isUserExists } = this.props;
    return (
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <SignupForm
            isUserExists={isUserExists}
            userSignupRequest={userSignupRequest}
            addFlashMessage={addFlashMessage} />
        </div>
      </div>
    );
  }
}

SignupPage.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired,
  deleteFlashAllMessages: PropTypes.func.isRequired,
  isUserExists: PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest, addFlashMessage, isUserExists, deleteFlashAllMessages })(SignupPage);