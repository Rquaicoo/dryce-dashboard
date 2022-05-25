import React, {useState} from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Form,
  FormInput,
  FormGroup,
  FormCheckbox,
  FormSelect,
  Button,
  FormTextarea

} from "shards-react";

import PageTitle from "../General/PageTitle";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"




const BusinessRegistration = () => {
    const [name, setName] = useState("");

    const pressSubmit = () => {
    
      console.log(name);
  }

  return (
    
  <div>
    <Container fluid className="main-content-container px-4">
      <Row noGutters className="page-header py-4">
        <PageTitle
          sm="9"
          title="Submit your details for verification"
          subtitle="Vendor Information"
          className="text-sm-left"
        />
      </Row>

      <Row className="mb-2">
    <Col lg="12">
      <span style={{ fontSize: "16px" }} className="d-block mb-2 text-muted">
        <strong>Account status</strong>
      </span>
    </Col>

    <Col className="mb-4">
      <div
        className="bg-primary text-white text-center rounded p-3 "
        style={{ boxShadow: "inset 0 0 5px rgba(0,0,0,.2)" }}>
          Pending
        </div>
    </Col>
    <Col className="mb-4">
      <div
        className="bg-success text-white text-center rounded p-3"
        style={{ boxShadow: "inset 0 0 5px rgba(0,0,0,.2)" }}>
        Approved
      </div>
    </Col>
    <Col className="mb-4">
      <div
        className="bg-danger text-white text-center rounded p-3"
        style={{ boxShadow: "inset 0 0 5px rgba(0,0,0,.2)" }}>
        Suspended
      </div>
    </Col>
  </Row>
      <Row>
        <Col lg="8" className="mb-4">
      

          {/* Complete Form Example */}
          <Card small>
            <CardHeader className="border-bottom">
              <h6 className="m-0">Basic Information</h6>
            </CardHeader>
            <ListGroup flush>
    <ListGroupItem className="p-3">
      <Row>
        <Col>
          <Form>
            <Row form>
              <Col md="6" className="form-group">
                <label htmlFor="feEmailAddress">Name of business *</label>
                <FormInput
                  id="feEmailAddress"
                  type="email"
                  placeholder="Enter your name"
                  onChange={(name) => setName(name.target.value)}
                />
              </Col>
              <Col md="6">
                <label htmlFor="fePassword">Phone number *</label>
                <FormInput
                  id="fePassword"
                  type="password"
                  placeholder="eg. 0244444444"
                />
              </Col>
            </Row>

            <FormGroup>
              <label htmlFor="feInputAddress">Email *</label>
              <FormInput id="feInputAddress" placeholder="russy@gmail.com" />
            </FormGroup>

            <FormGroup>
              <label htmlFor="feInputAddress2">Address *</label>
              <FormInput
                id="feInputAddress2"
                placeholder="Apartment, Studio or Floor"
              />
            </FormGroup>

            <Row form>
              <Col md="6" className="form-group">
                <label htmlFor="feInputCity">City *</label>
                <FormInput id="feInputCity"  />
              </Col>
              <Col md="4" className="form-group">
                <label htmlFor="feInputState">Region *</label>
                <FormSelect id="feInputState">
                  <option>Greater Accra</option>
                    <option>Ashanti</option>
                    <option>Ahafo-East</option>
                    <option>Bono</option>
                    <option>Central</option>
                    <option>Eastern</option>
                    <option>Northern</option>
                    <option>Savanna</option>
                    <option>Upper East</option>
                    <option>Upper West</option>
                    <option>Volta</option>
                    <option>Oti</option>
                    <option>Western</option>
                    <option>Western North</option>
                </FormSelect>
              </Col>
              <Col md="6" className="form-group">
                <label htmlFor="feInputZip">Longitude *</label>
                <FormInput id="feInputZip" />
              </Col>
              <Col md="6" className="form-group">
                <label htmlFor="feInputZip">Latitude *</label>
                <FormInput id="feInputZip" />
              </Col>
              {/*textbox*/}
              <Col>
                  <label htmlFor="feDescription"> Businesss Description *</label>
                  <FormTextarea id="feDescription" rows="5" />
                </Col>
                
              <Col md="12" className="form-group">
                <FormCheckbox>
                  {/* eslint-disable-next-line */}I agree with your{" "}
                  <a href="#">Privacy Policy</a>. *
                </FormCheckbox>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
          </Card>
        </Col>

        <Col lg="4" className="mb-4">

          <Card small>
            {/* Files & Dropdowns */}
            <CardHeader className="border-bottom">
              <h6 className="m-0">Additional Information</h6>
            </CardHeader>

            <ListGroup flush>
              <ListGroupItem className="px-3">
                <strong className="text-muted d-block mb-2">
                  Business picture  *
                </strong>
                
                <div className="custom-file mb-3">
                    <input type="file" className="custom-file-input" id="customFile2" />
                    <label className="custom-file-label" htmlFor="customFile2">
                    Choose file...
                    </label>
                </div>
              </ListGroupItem>

              <ListGroupItem className="px-3">
                <strong className="text-muted d-block mb-2">
                  Business logo  *
                </strong>
                
                <div className="custom-file mb-3">
                    <input type="file" className="custom-file-input" id="customFile2" />
                    <label className="custom-file-label" htmlFor="customFile2">
                    Choose file...
                    </label>
                </div>
              </ListGroupItem>

              <ListGroupItem className="px-3">
                <strong className="text-muted d-block mb-2">
                  Business certificate  *
                </strong>
                
                <div className="custom-file mb-3">
                    <input type="file" className="custom-file-input" id="customFile2" />
                    <label className="custom-file-label" htmlFor="customFile2">
                    Choose file...
                    </label>
                </div>
              </ListGroupItem>
              <ListGroupItem>
              <Button theme="accent" onClick={()=>pressSubmit()}
              className="bg-primary text-white text-center rounded p-3 "
              style={{ boxShadow: "inset 0 0 5px rgba(0,0,0,.2)" }}>Submit</Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>);
};

export default BusinessRegistration;
