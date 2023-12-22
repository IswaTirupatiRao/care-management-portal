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
export function PatientFamilyHistory() {
  return (
    <>
      <h5 className="ms-1 mb-3">Add New Patient & Family History</h5>
      <Card className="mb-2">
        <CardBody>
          <Label className="fw-bold">Basic Information</Label>
          <div className="divider mt-1" />
          <Row>
            <Col md={2} lg={2}>
              <FormGroup>
                <Label className="fw-semi-bold">Title</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Unassigned</option>
                  <option>Mr.</option>
                  <option>Mrs.</option>
                  <option>Ms.</option>
                  <option>Dr.</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12} lg={12}>
              <Label className="fw-semi-bold">First name</Label>
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
            <Col md={2} lg={2}>
              <FormGroup>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"text"}
                  placeholder="Name suffix"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Preferred name</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"text"}
                  placeholder="Patient preferred name"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">External ID</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
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
                <Label className="fw-semi-bold">S.S</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">License ID</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Marital Status</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Unassigned</option>
                  <option>Married</option>
                  <option>Single</option>
                  <option>Divorced</option>
                  <option>Widowed</option>
                  <option>Seperated</option>
                  <option>Domestic Partner</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Language</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Unassigned</option>
                  <option>English</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Ethnicity</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Unassigned</option>
                  <option>Hispanic or Lactino</option>
                  <option>Not Hispanic or Lactino</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Race</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Unassigned</option>
                  <option>Declined to specify</option>
                  <option>American Indian or Alaska Native</option>
                  <option>Asian</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Nationality</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Unassigned</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Family size</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"number"}
                />
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Card className="mb-2">
        <CardBody>
          <Label className="fw-bold">Contact</Label>
          <div className="divider mt-1" />
          <Row>
            <Col md={12} lg={12}>
              <FormGroup>
                <Label className="fw-semi-bold">Address</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={12} lg={12}>
              <FormGroup>
                <Label className="fw-semi-bold">Address Line 2</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
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
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Postal Code</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Country</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>USA</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Mother's Name</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Emergency Contact</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Emergency Phone</Label>
                <InputMask
                  className="form-control"
                  mask="(999)-999-9999"
                  maskChar={null}
                  name="phoneNo"
                  id="phoneNo"
                  placeholder="Eg: (987)-654-3210"
                />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Home Phone</Label>
                <InputMask
                  className="form-control"
                  mask="(999)-999-9999"
                  maskChar={null}
                  name="phoneNo"
                  id="phoneNo"
                  placeholder="Eg: (987)-654-3210"
                />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Work Phone</Label>
                <InputMask
                  className="form-control"
                  mask="(999)-999-9999"
                  maskChar={null}
                  name="phoneNo"
                  id="phoneNo"
                  placeholder="Eg: (987)-654-3210"
                />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Mobile Phone</Label>
                <InputMask
                  className="form-control"
                  mask="(999)-999-9999"
                  maskChar={null}
                  name="phoneNo"
                  id="phoneNo"
                  placeholder="Eg: (987)-654-3210"
                />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Contact Email</Label>
                <Input id={"companyName"} name={"companyName"} type={"email"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">County</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Unassigned</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Card className="mb-2">
        <CardBody>
          <Label className="fw-bold">Employer</Label>
          <div className="divider mt-1" />
          <Row>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Occupation</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Employer Name</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Employer Address</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"textarea"}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">City</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">State</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Postal Code</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Country</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>USA</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Card className="mb-2">
        <CardBody>
          <Label className="fw-bold">Provider & Other</Label>
          <div className="divider mt-1" />
          <Row>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Provider</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Provider since date</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Reffered Provider</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Pharmacy</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">HIPPA Notice Received</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>No</option>
                  <option>Yes</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Leave message with</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Allow voice Messages</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>No</option>
                  <option>Yes</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Allow Mail Message</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>No</option>
                  <option>Yes</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Allow SMS</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>No</option>
                  <option>Yes</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Allow Email</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>No</option>
                  <option>Yes</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12} lg={12}>
              <Label>Care Team Details</Label>
              <div className="divider mt-1" />
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Care Team (Provider)</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Care Team (Facility)</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Care Team Status</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Patient Category</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Card className="mb-2">
        <CardBody>
          <Label className="fw-bold">Guardian</Label>
          <div className="divider mt-1" />
          <Row>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Name</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Relationship</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
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
                <Label className="fw-semi-bold">Address</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">City</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">State</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Postal Code</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Country</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>USA</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Phone</Label>
                <InputMask
                  className="form-control"
                  mask="(999)-999-9999"
                  maskChar={null}
                  name="phoneNo"
                  id="phoneNo"
                  placeholder="Eg: (987)-654-3210"
                />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Work phone</Label>
                <InputMask
                  className="form-control"
                  mask="(999)-999-9999"
                  maskChar={null}
                  name="phoneNo"
                  id="phoneNo"
                  placeholder="Eg: (987)-654-3210"
                />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Email</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Card className="mb-2">
        <CardBody>
          <Label className="fw-bold">Notes</Label>
          <div className="divider mt-1" />
          <Row>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Date Deceased</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={9} lg={9}>
              <FormGroup>
                <Label className="fw-semi-bold">Reason Deceased</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"textarea"}
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
