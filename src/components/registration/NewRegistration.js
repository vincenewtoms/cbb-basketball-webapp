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
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';
import { formRegisterAtom } from '../../atoms';
import axios from 'axios';
import PlayerPool from "./PlayerPool";

function NewRegistration() {
  const [formData, setFormData] = useAtom(formRegisterAtom);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://casual-kiosk-api.au-s1.cloudhub.io/api/bookings/1/registrations', formData);
      console.log('Response:', response.data);
      window.location.replace("/registration");
    } catch (error) {
      console.error('Error:', error);
    }

  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Card small className="h-30">
      {/* Card Header */}
      <CardHeader className="border-bottom">
        <h6 className="m-0">New Registration</h6>
      </CardHeader>

      <CardBody className="d-flex flex-column">
        <Form className="quick-post-form" onSubmit={handleSubmit}>
          <FormGroup>
            <FormInput placeholder="Name" name="name" value={formData.name}
            onChange={handleInputChange}/>
          </FormGroup>
          <FormGroup className="mb-0">
            <Button theme="accent" type="submit">
              Register
            </Button>
          </FormGroup>
        </Form>
      </CardBody>
    </Card>
  );
}
export default NewRegistration;
