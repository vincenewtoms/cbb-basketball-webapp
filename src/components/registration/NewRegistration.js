import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  FormInput,
  FormTextarea,
  Button
} from "shards-react";

const NewRegistration = ({ title }) => (
  <Card small className="h-30">
    {/* Card Header */}
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>

    <CardBody className="d-flex flex-column">
      <Form className="quick-post-form">
        {/* Title */}
        <FormGroup>
          <FormInput placeholder="name" />
        </FormGroup>

    

        {/* Create Draft */}
        <FormGroup className="mb-0">
          <Button theme="accent" type="submit">
            Register
          </Button>
        </FormGroup>
      </Form>
    </CardBody>
  </Card>
);

NewRegistration.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

NewRegistration.defaultProps = {
  title: "New Registration"
};

export default NewRegistration;
