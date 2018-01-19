import React, { Component } from "react";
import { Form, Field, reduxForm } from "redux-form";
import RaisedButton from "material-ui/RaisedButton";
import { TextField } from "redux-form-material-ui";
import PropTypes from 'prop-types';

class NewItemForm extends Component {

    render() {
        const { handleSubmit, pristine, submitting, reset, onSubmit } = this.props;

        return (
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Field name="text" component={TextField} hintText="Item Text" />

                <RaisedButton
                    type="submit"
                    label="Add Item"
                    disabled={pristine || submitting}
                    primary
                />
                <RaisedButton
                    label="Cancel"
                    disabled={pristine || submitting}
                    onClick={reset}
                />
            </Form>
        );
    }
}

NewItemForm.propTypes = {
    handleSubmit: PropTypes.func,
    pristine: PropTypes.bool,
    submitting: PropTypes.bool,
    reset: PropTypes.func,
    onSubmit: PropTypes.func
};

export default reduxForm({ form: "new-item-form" })(NewItemForm);
