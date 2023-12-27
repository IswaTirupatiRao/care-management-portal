import React from "react";
import {
  Card,
  CardBody,
  Button,
  Row,
  Col,
  Input,
  Label,
  FormGroup,
} from "reactstrap";
import InputMask from "react-input-mask";
export function Insurence() {
  return (
    <>
      <h5 className="ms-1 mb-3">Add Insurence</h5>
      <Card className="mb-2">
        <CardBody>
          <Label className="fw-bold">Primary Insurence</Label>
          <div className="divider mt-1" />
          <Row>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">
                  Primary Insurence Provider
                </Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Unassigned</option>
                  <option>Mr.</option>
                  <option>Mrs.</option>
                  <option>Ms.</option>
                  <option>Dr.</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Relationship</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Unassigned</option>
                  <option>Mr.</option>
                  <option>Mrs.</option>
                  <option>Ms.</option>
                  <option>Dr.</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Plan Name</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"text"}
                  placeholder="Plan Name"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12} lg={12}>
              <Label className="fw-semi-bold">Subscriber</Label>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"text"}
                  placeholder="First name"
                />
              </FormGroup>
            </Col>
            <Col md={2} lg={2}>
              <FormGroup>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"text"}
                  placeholder="Middle name"
                />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"text"}
                  placeholder="Last name"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Effective date</Label>
                <Input id={"companyName"} name={"companyName"} type={"date"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Effective date end</Label>
                <Input id={"companyName"} name={"companyName"} type={"date"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Date of birth</Label>
                <Input id={"companyName"} name={"companyName"} type={"date"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Sex</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Unassigned</option>
                  <option>Female</option>
                  <option>Male</option>
                  <option>Unknown</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Policy Number</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Group number</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">S.S</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Subscriber Employer</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Subscriber Address</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"textarea"}
                />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">
                  Subscriber Employer Address
                </Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"textarea"}
                />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">City</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">State</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Select</option>
                  <option>Alabama</option>
                  <option>Florida</option>
                  <option>Arizona</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Zip code</Label>
                <InputMask
                  className="form-control"
                  mask="99999"
                  maskChar={null}
                  name="phoneNo"
                  id="phoneNo"
                  placeholder="Zip code"
                />
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Card className="mb-2">
        <CardBody>
          <Label className="fw-bold">Secondary Insurence</Label>
          <div className="divider mt-1" />
          <Row>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">
                  Secondary Insurence Provider
                </Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Unassigned</option>
                  <option>Mr.</option>
                  <option>Mrs.</option>
                  <option>Ms.</option>
                  <option>Dr.</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Relationship</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Unassigned</option>
                  <option>Mr.</option>
                  <option>Mrs.</option>
                  <option>Ms.</option>
                  <option>Dr.</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Plan Name</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"text"}
                  placeholder="Plan Name"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12} lg={12}>
              <Label className="fw-semi-bold">Subscriber</Label>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"text"}
                  placeholder="First name"
                />
              </FormGroup>
            </Col>
            <Col md={2} lg={2}>
              <FormGroup>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"text"}
                  placeholder="Middle name"
                />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"text"}
                  placeholder="Last name"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Effective date</Label>
                <Input id={"companyName"} name={"companyName"} type={"date"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Effective date end</Label>
                <Input id={"companyName"} name={"companyName"} type={"date"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Date of birth</Label>
                <Input id={"companyName"} name={"companyName"} type={"date"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Sex</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Unassigned</option>
                  <option>Female</option>
                  <option>Male</option>
                  <option>Unknown</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Policy Number</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Group number</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">S.S</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Subscriber Employer</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Subscriber Address</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"textarea"}
                />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">
                  Subscriber Employer Address
                </Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"textarea"}
                />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">City</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">State</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Select</option>
                  <option>Alabama</option>
                  <option>Florida</option>
                  <option>Arizona</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Zip code</Label>
                <InputMask
                  className="form-control"
                  mask="99999"
                  maskChar={null}
                  name="phoneNo"
                  id="phoneNo"
                  placeholder="Zip code"
                />
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Button className="float-end" color="primary">
        Save new patient
      </Button>
    </>
  );
}
