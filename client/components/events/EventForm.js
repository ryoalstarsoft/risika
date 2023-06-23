import React from 'react';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import { connect } from 'react-redux';
import { createEvent } from '../../actions/eventActions';

class EventForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      errors: {},
      isLoading: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.createEvent(this.state);
  }

  render() {
    const { title, errors, isLoading } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <h1>Create New Game Event</h1>

        <TextFieldGroup
          field="title"
          name="title"
          label="Event Title"
          value={title}
          onChange={this.onChange}
          error={errors.title}
        />

        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    )
  }
}

EventForm.propTypes = {
  createEvent: PropTypes.func.isRequired
}

export default connect(null, { createEvent })(EventForm);