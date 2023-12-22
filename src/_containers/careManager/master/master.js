import React, { useState } from "react";
import {
  Row,
  Col,
  Modal,
  Card,
  CardBody,
  Button,
  FormGroup,
  Label,
  Input,
  ModalHeader,
  ModalBody,
  CardHeader,
  ModalFooter,
} from "reactstrap";
import InputMask from "react-input-mask";
export function Master() {
  const [facilityModal, setFacilityModal] = useState(false);
  const [pharmacyModal, setPharmacyModal] = useState(false);
  const [insurenceModal, setInsurenceModal] = useState(false);
  return (
    <>
      <Row>
        <Col>
          <Card className="mt-2">
            <CardHeader className="card-title-text text-capitalize">
              Facilities
              <div className="float-end me-2 ms-auto">
                <Button
                  className="link-text"
                  color="primary"
                  onClick={() => setFacilityModal(!facilityModal)}
                >
                  Add
                </Button>
              </div>
            </CardHeader>
            <CardBody></CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="mt-2">
            <CardHeader className="card-title-text text-capitalize">
              Pharmacies
              <div className="float-end me-2 ms-auto">
                <Button
                  className="link-text"
                  color="primary"
                  onClick={() => setPharmacyModal(!pharmacyModal)}
                >
                  Add
                </Button>
              </div>
            </CardHeader>
            <CardBody></CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="mt-2">
            <CardHeader className="card-title-text text-capitalize">
              Insurance Companies
              <div className="float-end me-2 ms-auto">
                <Button
                  className="link-text"
                  color="primary"
                  onClick={() => setInsurenceModal(!insurenceModal)}
                >
                  Add
                </Button>
              </div>
            </CardHeader>
            <CardBody></CardBody>
          </Card>
        </Col>
        <Col></Col>
      </Row>
      <Modal size="lg" isOpen={facilityModal}>
        <ModalHeader toggle={() => setFacilityModal(!facilityModal)}>
          Facilities
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col md={12} lg={12}>
              <FormGroup>
                <Label className="fw-semi-bold">
                  Name<span style={{ color: "red" }}>* </span>
                </Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={12} lg={12}>
              <Label className="fw-semi-bold">Address</Label>
              <div className="divider mt-1" />
              <Row>
                <Col md={12} lg={12}>
                  <FormGroup>
                    <Label className="fw-semi-bold">Phisical address</Label>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"text"}
                    />
                  </FormGroup>
                </Col>
                <Col md={3} lg={3}>
                  <FormGroup>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"text"}
                      placeholder="Enter city"
                    />
                  </FormGroup>
                </Col>
                <Col md={3} lg={3}>
                  <FormGroup>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"text"}
                      placeholder="Enter state"
                    />
                  </FormGroup>
                </Col>
                <Col md={3} lg={3}>
                  <FormGroup>
                    <InputMask
                      className="form-control"
                      mask="99999"
                      maskChar={null}
                      name="phoneNo"
                      id="phoneNo"
                      placeholder="Enter zip code"
                    />
                  </FormGroup>
                </Col>
                <Col md={3} lg={3}>
                  <FormGroup>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"text"}
                      placeholder="Enter country"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={12} lg={12}>
                  <FormGroup>
                    <Label className="fw-semi-bold">Mailing address</Label>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"text"}
                    />
                  </FormGroup>
                </Col>
                <Col md={3} lg={3}>
                  <FormGroup>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"text"}
                      placeholder="Enter city"
                    />
                  </FormGroup>
                </Col>
                <Col md={3} lg={3}>
                  <FormGroup>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"text"}
                      placeholder="Enter state"
                    />
                  </FormGroup>
                </Col>
                <Col md={3} lg={3}>
                  <FormGroup>
                    <InputMask
                      className="form-control"
                      mask="99999"
                      maskChar={null}
                      name="phoneNo"
                      id="phoneNo"
                      placeholder="Enter zip code"
                    />
                  </FormGroup>
                </Col>
                <Col md={3} lg={3}>
                  <FormGroup>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"text"}
                      placeholder="Enter country"
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Col>

            <Col md={12} lg={12}>
              <Label className="fw-semi-bold">Basic information</Label>
              <div className="divider mt-1" />
            </Col>

            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Email</Label>
                <Input id={"companyName"} name={"companyName"} type={"email"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
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
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Fax</Label>
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
                <Label className="fw-semi-bold">Website</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Color</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">IBAN</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">POS Code</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Facility Taxonomy</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">CLiA Number</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Billing Attn</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Tax ID</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Facility lab code</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Facility NPI</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">OID</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={12} lg={12}>
              <FormGroup>
                <Label className="fw-semi-bold">Info</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"textarea"}
                />
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="primary">Save</Button>
        </ModalFooter>
      </Modal>
      <Modal size="lg" isOpen={pharmacyModal}>
        <ModalHeader toggle={() => setPharmacyModal(!pharmacyModal)}>
          Pharmacies
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col md={12} lg={12}>
              <FormGroup>
                <Label className="fw-semi-bold">
                  Name<span style={{ color: "red" }}>* </span>
                </Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={12} lg={12}>
              <FormGroup>
                <Label className="fw-semi-bold">Address</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"textarea"}
                />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">City</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">State</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Zip code</Label>
                <InputMask
                  className="form-control"
                  mask="99999"
                  maskChar={null}
                  name="phoneNo"
                  id="phoneNo"
                  placeholder="Enter zip code"
                />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Email</Label>
                <Input id={"companyName"} name={"companyName"} type={"email"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
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
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Fax</Label>
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
                <Label className="fw-semi-bold">NPI</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">NCPDP</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Default method</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Print</option>
                  <option>Save</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="primary">Save</Button>
        </ModalFooter>
      </Modal>
      <Modal size="lg" isOpen={insurenceModal}>
        <ModalHeader toggle={() => setInsurenceModal(!insurenceModal)}>
          Insurance Companies
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">
                  Name<span style={{ color: "red" }}>* </span>
                </Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Attn</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={12} lg={12}>
              <FormGroup>
                <Label className="fw-semi-bold">Address</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"textarea"}
                />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">City</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">State</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Zip code</Label>
                <InputMask
                  className="form-control"
                  mask="99999"
                  maskChar={null}
                  name="phoneNo"
                  id="phoneNo"
                  placeholder="Enter zip code"
                />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
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
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Fax</Label>
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
                <Label className="fw-semi-bold">Payer ID</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Payer type</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Other HCFA</option>
                  <option>HCFA</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Default X12 partner</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Select</option>
                  <option>Another option</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">CQM source of payment</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Select</option>
                  <option>Another option</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Deactivate</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>No</option>
                  <option>Yes</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="primary">Save</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
