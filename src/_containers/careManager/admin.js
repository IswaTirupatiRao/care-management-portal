import React, { useState } from "react";
import {
  Card,
  CardBody,
  Button,
  CardHeader,
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  Input,
  FormGroup,
  ModalFooter,

  Label,
} from "reactstrap";
import DataTable from "react-data-table-component";
export function Admin() {
  let data = [
    {
      Username:"Accountant",
      fullname: "Erin Adams",
      phone: "(986)-324-8765",
      MFA: "NO",
      Authorized:"yes",
      FailedCounter:"0",
      dob: "12 Dec 1997",
    },
    {
      Username:"admin",
      fullname: "Mike Adams",
      phone: "(986)-546-8765",
      MFA: "NO",
      Authorized:"yes",
      FailedCounter:"0",
      dob: "12 Nov 1998",
    },
    {
      Username:"Clinician",
      fullname: "John Harrison",
      phone: "(986)-879-8765",
      MFA: "NO",
      Authorized:"no",
      FailedCounter:"0",
      dob: "12 Oct 1999",
    },
    {
      Username:"Physician",
      fullname: "Lucifer Morningstar",
      phone: "(986)-123-8765",
      MFA: "NO",
      Authorized:"no",
      FailedCounter:"0",
      dob: "12 Aug 1990",
    },
  ];
  const columns = (clickHandler) => [
    {
      name: "User name",
      selector: (row) => row.Username,
      sortable: true,
      width: "20%",
    },
    {
      name: "Real Name",
      selector: (row) => row.fullname,
      sortable: true,
      width: "20%",
    },
    {
      name: "Additional info",
      selector: (row) => row.Additionalinfo,
      sortable: true,
      width: "20%",
    },
    {
      name: "Authorized ",
      selector: (row) => row.Authorized,
      sortable: true,
      width: "20%",
    },
    {
      name: "MFA",
      sortable: true,
      selector: (row) => row.MFA,
      width: "20%",
    },
    {
      name: "Failed Login Counter",
      selector: (row) => row.FailedCounter,
      sortable: true,
      width: "20%",
    },
  ];
  const handleButtonClick = () => {
    console.log("clicked");
  };
  const [infoModal, setinfodataModal] = useState(false);

  return (
    <>
      <Card>
        <CardHeader className="card-title-text text-capitalize">
          <h5>User / Groups  </h5>
          <div className="float-end me-2 ms-auto">
                <Button
                  className="link-text"
                  color="primary"
                  onClick={() => setinfodataModal(!infoModal)}
                >
                  Add
                </Button>
              </div>
          <div className=" me-2 ">
            <Button className="link-text" color="primary">
              View Facility Specific User Information
            </Button>
          </div>
        </CardHeader>
        <CardBody>

          <DataTable
            columns={columns(handleButtonClick)}
            data={data}
            persistTableHead
            pagination
          />
        </CardBody>
      </Card>
      <h1></h1>
      <Modal size="lg" isOpen={infoModal}>
        <ModalHeader toggle={() => setinfodataModal(!infoModal)}>
          Add User
        </ModalHeader>
        <ModalBody>
        <Row>
    <Col md={3} lg={3}>
      <FormGroup>
        <Label className="fw-semi-bold">UserName</Label>
        <Input id={"companyName"} name={"companyName"} type={"text"} />
      </FormGroup>
    </Col>
    <Col md={3} lg={3}>
      <FormGroup>
        <Label className="fw-semi-bold">Password</Label>
        <Input id={"companyName"} name={"companyName"} type={"text"} />
      </FormGroup>
    </Col>
    <Col md={3} lg={3}>
      <FormGroup>
        <Label className="fw-semi-bold">User's New Password</Label>
        <Input id={"companyName"} name={"companyName"} type={"text"} />
      </FormGroup>
    </Col>
        </Row>
        <Row>
          <Col md={3} lg={3}>
            <FormGroup>
              <Label className="fw-semi-bold">First Name</Label>
              <Input id={"companyName"} name={"companyName"} type={"text"} />
            </FormGroup>
          </Col>
          <Col md={3} lg={3}>
            <FormGroup>
              <Label className="fw-semi-bold">Middle Name</Label>
              <Input id={"companyName"} name={"companyName"} type={"text"} />
            </FormGroup>
          </Col>
          <Col md={3} lg={3}>
            <FormGroup>
              <Label className="fw-semi-bold">Last Name</Label>
              <Input id={"companyName"} name={"companyName"} type={"text"} />
            </FormGroup>
          </Col>

        </Row>
        <Row>
          <Col md={3} lg={3}>
            <FormGroup>
              <Label className="fw-semi-bold">federal Tax ID:</Label>
              <Input id={"companyName"} name={"companyName"} type={"text"} />
            </FormGroup>
          </Col>
          <Col md={3} lg={3}>
            <FormGroup>
              <Label className="fw-semi-bold">UPIN:</Label>
              <Input id={"companyName"} name={"companyName"} type={"text"} />
            </FormGroup>
          </Col>
          <Col md={3} lg={3}>
            <FormGroup>
              <Label className="fw-semi-bold">Taxonomy: </Label>
              <Input id={"companyName"} name={"companyName"} type={"text"} />
            </FormGroup>
          </Col>
          <Col md={3} lg={3}>
            <FormGroup>
              <Label className="fw-semi-bold">State License Number: </Label>
              <Input id={"companyName"} name={"companyName"} type={"text"} />
            </FormGroup>
          </Col>

        </Row>
        <Row>
          <Col md={3} lg={3}>
            <FormGroup>
              <Label className="fw-semi-bold">DEA Number:</Label>
              <Input id={"companyName"} name={"companyName"} type={"text"} />
            </FormGroup>
          </Col>
          <Col md={3} lg={3}>
            <FormGroup>
              <Label className="fw-semi-bold">See Authorizations:</Label>
              <Input id={"companyName"} name={"companyName"} type={"text"} />
            </FormGroup>
          </Col>
          <Col md={3} lg={3}>
            <FormGroup>
              <Label className="fw-semi-bold">job Descripation: </Label>
              <Input id={"companyName"} name={"companyName"} type={"text"} />
            </FormGroup>
          </Col>
          <Col md={3} lg={3}>
            <FormGroup>
              <Label className="fw-semi-bold">Supervisor: </Label>
              <Input id={"companyName"} name={"companyName"} type={"text"} />
            </FormGroup>
          </Col>

        </Row>
        <Row>
          <Col md={3} lg={3}>
            <FormGroup>
              <Label className="fw-semi-bold">NewCrop eRX Role:</Label>
              <Input id={"companyName"} name={"companyName"} type={"text"} />
            </FormGroup>
          </Col>
          <Col md={3} lg={3}>
            <FormGroup>
              <Label className="fw-semi-bold">Google Eail for Login:</Label>
              <Input id={"companyName"} name={"companyName"} type={"text"} />
            </FormGroup>
          </Col>
          <Col md={3} lg={3}>
            <FormGroup>
              <Label className="fw-semi-bold">Patient Menu Role: </Label>
              <Input id={"companyName"} name={"companyName"} type={"text"} />
            </FormGroup>
          </Col>
          <Col md={3} lg={3}>
            <FormGroup>
              <Label className="fw-semi-bold">Default Facility: </Label>
              <Input id={"companyName"} name={"companyName"} type={"text"} />
            </FormGroup>
          </Col>

        </Row>
        <Row>
          <Col md={3} lg={3}>
            <FormGroup>
              <Label className="fw-semi-bold">Default Facility:</Label>
              <Input id={"companyName"} name={"companyName"} type={"text"} />
            </FormGroup>
          </Col>
          <Col md={3} lg={3}>
            <FormGroup>
              <Label className="fw-semi-bold">Main Menu Role:</Label>
              <Input id={"companyName"} name={"companyName"} type={"text"} />
            </FormGroup>
          </Col>
          <Col md={3} lg={3}>
            <FormGroup>
              <Label className="fw-semi-bold">Provider Type: </Label>
              <Input id={"companyName"} name={"companyName"} type={"text"} />
            </FormGroup>
          </Col>
          <Col md={3} lg={3}>
            <FormGroup>
              <Label className="fw-semi-bold">Additional Info: </Label>
              <Input id={"companyName"} name={"companyName"} type={"textarea"} />
            </FormGroup>
          </Col>

        </Row>
        <Row>
          <Col md={12} lg={12}>
            <Label className="fw-semi-bold">Facility Permissions</Label>
          </Col>
          <Col md={12} lg={12}>
            <FormGroup>
              <Input
                id={"companyName"}
                name={"companyName"}
                type={"textarea"}
                placeholder="-- All -- "
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={3} lg={3}>
          <FormGroup>
            <Label for="exampleSelect">
              Access Control:
            </Label>
            <Input
              id="exampleSelect"
              name="select"
              type="select"
            >
              <option>
                Accounting
              </option>
              <option>
                Administrators 
              </option>
              <option>
                TUser
              </option>
              <option>
                Clinician
              </option>
              <option>
                Physican
              </option>
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
