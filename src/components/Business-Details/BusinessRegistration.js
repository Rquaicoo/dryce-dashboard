import React, {useState, useEffect} from "react";
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
import axios from "axios";




const BusinessRegistration = () => {

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      axios.defaults.headers.common['Authorization'] = token;
      setToken(token);
    }
  }, [])

    const [token, setToken] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhonenumber] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [region, setRegion] = useState("");
    const [longitude, SetLongitude] = useState("");
    const [latitude, setLatitude] = useState("");
    const [description, setBusinessDescription] = useState("");
    const [picture, setBusinessPicture] = useState(null);
    const [logo, setBusinessLogo] = useState(null);
    const [certificate, setBusinessCertificate] = useState(null);

    const handlePictureSelect = (event) => {
        setBusinessPicture(event.target.files[0]);
    }

    const handleLogoSelect = (event) => {
        setBusinessLogo(event.target.files[0]);
    }

    const handleCertificateSelect = (event) => {
        setBusinessCertificate(event.target.files[0]);
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("phone", phone);
        formData.append("email", email);
        formData.append("address", address);
        formData.append("city", city);
        formData.append("region", region);
        formData.append("longitude", longitude);
        formData.append("latitude", latitude);
        formData.append("description", description);
        formData.append("picture", picture);
        formData.append("logo", logo);
        formData.append("certificate", certificate);

        try {
          console.log(formData)
          console.log(token)
            axios.post("http://127.0.0.1:8000/vendor/business_registration/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    "Authorization": `Token ${token}`
                    }})
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
            }
            catch (error) {
              console.log(error);
            }   
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
                <label htmlFor="feName">Name of business *</label>
                <FormInput
                  id="feName"
                  placeholder="Enter your name"
                  onChange={(name) => setName(name.target.value)}
                />
              </Col>
              <Col md="6">
                <label htmlFor="fePhone">Phone number *</label>
                <FormInput
                  id="fePhone"
                  placeholder="eg. 0244444444"
                  onChange={(phonenumber) => setPhonenumber(phonenumber.target.value)}
                />
              </Col>
            </Row>

            <FormGroup>
              <label htmlFor="feEmail">Email *</label>
              <FormInput id="feEmail" placeholder="russy@gmail.com"
              type="email" 
              onChange={(email) => setEmail(email.target.value) } />
            </FormGroup>

            <FormGroup>
              <label htmlFor="feInputAddress">Address *</label>
              <FormInput
                id="feInputAddress"
                placeholder="Ashalaja Heights, Groundfloor"
                onChange={(address) => setAddress(address.target.value)}
              />
            </FormGroup>

            <Row form>
              <Col md="6" className="form-group">
                <label htmlFor="feInputCity">City *</label>
                <FormInput id="feInputCity" 
                placeholder="Ashalaja"
                onChange={(city) => setCity(city.target.value)} />
              </Col>
              <Col md="4" className="form-group">
                <label htmlFor="feInputState">Region *</label>
                <FormSelect id="feInputState"
                onChange={(region) => setRegion(region.target.value)}>
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
                <label htmlFor="feInputLongitude">Longitude *</label>
                <FormInput id="feInputLongitude"
                placeholder="0.4929292833"
                onChange={(longitude)  => SetLongitude(longitude.target.value)} />
              </Col>
              <Col md="6" className="form-group">
                <label htmlFor="feInputLatitude">Latitude *</label>
                <FormInput id="feInputLatitude"
                placeholder="4.23434444232"
                onChange={(latitude) => setLatitude(latitude.target.value)} />
              </Col>
              {/*textbox*/}
              <Col>
                  <label htmlFor="feDescription"> Businesss Description *</label>
                  <FormTextarea id="feDescription" rows="5"
                  onChange={(businessDescription) => setBusinessDescription(businessDescription.target.value)} />
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
                  Business cover picture  *
                </strong>
                
                <div className="custom-file mb-3">
                    <input type="file" className="custom-file-input" id="customFile2" onChange={handlePictureSelect} />
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
                    <input type="file" className="custom-file-input" id="customFile3" onChange={handleLogoSelect} />
                    <label className="custom-file-label" htmlFor="customFile3">
                    Choose file...
                    </label>
                </div>
              </ListGroupItem>

              <ListGroupItem className="px-3">
                <strong className="text-muted d-block mb-2">
                  Business certificate  *
                </strong>
                
                <div className="custom-file mb-3">
                    <input type="file" className="custom-file-input" id="customFile4" onChange={handleCertificateSelect} />
                    <label className="custom-file-label" htmlFor="customFile4">
                    Choose file...
                    </label>
                </div>
              </ListGroupItem>
              <ListGroupItem>
              <Button theme="accent" onClick={handleSubmit}
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
