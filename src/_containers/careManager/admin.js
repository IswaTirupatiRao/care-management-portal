import React from "react";
import {
  Card,
  CardBody,
  Button,
  CardHeader,
  Row,
  Col,
  Input,
  FormGroup,
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
      width: "30%",
    },
    {
      name: "Full name",
      selector: (row) => row.fullname,
      sortable: true,
      width: "30%",
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
  return (
    <>
      <Card>
        <CardHeader className="card-title-text text-capitalize">
          <h5>User / Groups  </h5>
          <div className=" me-2 ">
            <Button className="link-text" color="primary">
              + Add User
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
      <Card className="mb-2">
        <CardBody>
          {/* <Label className="fw-bold">Users</Label> */}
          <div className="divider mt-1" />
          <Row>
            <Col md={6} lg={6}>
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
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">First Name</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Last Name</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>

          </Row>

          <Row>
            <Col md={12} lg={12}>
              <Label className="fw-semi-bold">Last name</Label>
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
          </Row>
          <Row>
            <Col md={12} lg={12}>
              <Label className="fw-semi-bold">Valedictory</Label>
            </Col>
            <Col md={12} lg={12}>
              <FormGroup>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"text"}
                  placeholder="-- All -- "
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
                <Label className="fw-semi-bold">Patient ID</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">From : </Label>
                <Input id={"companyName"} name={"companyName"} type={"date"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">To : </Label>
                <Input id={"companyName"} name={"companyName"} type={"date"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Gender</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Unassigned</option>
                  <option>Female</option>
                  <option>Male</option>
                  <option>Unknown</option>
                </Input>
              </FormGroup>
            </Col>

          </Row>
          <Row>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Problem XD</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
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
                <Label className="fw-semi-bold"> Drug</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold"> Immunization</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold"> Option</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold"> Communication</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
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
                <Label className="fw-semi-bold">Lab Result :</Label>
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
    </>
  );
}
