import React, { useState } from "react";
import {
  Card,
  CardBody,
  Button,
  CardHeader,
  Row,
  Col,
  FormGroup,
  Label,
  Table,
  Input,
  ButtonGroup,
} from "reactstrap";
import DataTable from "react-data-table-component";
import DatePicker from "react-datepicker";
export function Reports() {
  const [scheduledDate, setScheduledDate] = useState();
  let data = [
    {
      fullname: "Erin Adams",
      phone: "(986)-324-8765",
      ssn: "123-456-7890",
      dob: "12 Dec 1997",
      LastVisit: "2022-12-17",
      ID: "34",
      Street: "1235 kings CD.",
      City: "pune",
      state: "AC",
      zip: "3456",
      HomeNumber: "123-456-7890",
      Race: "Caucasian",
      Reson: " painful urination",
    },
    {
      fullname: "Mike Adams",
      phone: "(986)-546-8765",
      ssn: "123-456-7890",
      dob: "12 Nov 1998",
      LastVisit: "2022-12-17",
      ID: "04",
      Street: "1235 kings CD.",
      City: "pune",
      zip: "3456",
      state: "AC",
      HomeNumber: "123-456-7890",
      Race: "Caucasian",
      Reson: "painful urination",
    },
    {
      fullname: "John Harrison",
      phone: "(986)-879-8765",
      ssn: "123-456-7890",
      dob: "12 Oct 1999",
      LastVisit: "2022-12-17",
      ID: "11",
      Street: "1235 kings CD.",
      City: "pune",
      state: "AC",
      zip: "3456",
      HomeNumber: "123-456-7890",
      Race: "Caucasian",
      Reson: "internal Bleeding",
    },
    {
      fullname: "Lucifer Morningstar",
      phone: "(986)-123-8765",
      ssn: "123-456-7890",
      dob: "12 Aug 1990",
      LastVisit: "2022-12-17",
      ID: "22",
      Street: "1235 kings CD.",
      City: "pune",
      state: "AC",
      zip: "3456",
      HomeNumber: "123-456-7890",
      Race: "Caucasian",
      Reson: "headache",
    },
  ];
  const columns = (clickHandler) => [
    {
      name: "Last Visit",
      sortable: true,
      selector: (row) => row.LastVisit,
      width: "10%",
    },
    {
      name: "Patient Name",
      selector: (row) => row.fullname,
      sortable: true,
      width: "20%",
    },
    {
      name: "ID",
      sortable: true,
      selector: (row) => row.ID,
      width: "10%",
    },
    {
      name: "Street",
      sortable: true,
      selector: (row) => row.Street,
      width: "10%",
    },
    {
      name: "City",
      sortable: true,
      selector: (row) => row.City,
      width: "10%",
    },
    {
      name: "State",
      sortable: true,
      selector: (row) => row.state,
      width: "10%",
    },
    {
      name: "Zip",
      sortable: true,
      selector: (row) => row.zip,
      width: "10%",
    },
    {
      name: "Home Phone",
      id: "jobtitle",
      selector: (row) => row.phone,
      sortable: true,
      width: "20%",
    },
  ];

  const handleButtonClick = () => {
    console.log("clicked");
  };
  // Add a new entry for Phil Belford
  let philBelfordData = [
    {
      fullname: "Phil Belford",
      phone: "(986)-789-1234",
      ssn: "123-456-7890",
      dob: "15 Mar 1985",
      LastVisit: "2022-12-20",
      ID: "45",
      Street: "5678 Main St",
      City: "New York",
      state: "NY",
      zip: "10001",
      PID: "1",
      HomeNumber: "987-654-3210",
      Age: 38,
      Gender: "Male",
      Race: "Caucasian",
      Reson: " painful urination",
      Provider: "HealthCare XYZ",
      Ethnicity: "not Hispancic or latino",
    },
    {
      fullname: "Phil Belford",
      phone: "(986)-789-1234",
      ssn: "123-456-7890",
      dob: "15 Mar 1985",
      LastVisit: "2022-12-20",
      ID: "45",
      Street: "5678 Main St",
      City: "New York",
      state: "NY",
      PID: "1",
      zip: "10001",
      HomeNumber: "987-654-3210",
      Age: 38,
      Gender: "Male",
      Race: "Caucasian",
      Reson: " painful urination",
      Provider: "HealthCare XYZ",
      Ethnicity: "not Hispancic or latino",
    },
    {
      fullname: "Phil Belford",
      phone: "(986)-789-1234",
      ssn: "123-456-7890",
      dob: "15 Mar 1985",
      Last: "2022-12-20",
      ID: "45",
      Street: "5678 Main St",
      City: "New York",
      state: "NY",
      zip: "10001",
      PID: "1",
      Ethnicity: "not Hispancic or latino",
      HomeNumber: "987-654-3210",
      Age: 38,
      Gender: "Male",
      Race: "Caucasian",
      Reson: " painful urination",
      Provider: "HealthCare XYZ",
    },
  ];

  // data = [...data, ...philBelfordData];

  const philBelfordColumns = (clickHandler) => [
    {
      name: "Patient Name",
      selector: (row) => row.fullname,
      sortable: true,
      width: "15%",
    },
    {
      name: "PID",
      sortable: true,
      selector: (row) => row.PID,
      width: "10%",
    },
    {
      name: "Age",
      sortable: true,
      selector: (row) => row.Age,
      width: "10%",
    },
    {
      name: "Gender",
      sortable: true,
      selector: (row) => row.Gender,
      width: "10%",
    },

    {
      name: "Race",
      sortable: true,
      selector: (row) => row.Race,
      width: "15%",
    },
    {
      name: "Ethnicity",
      sortable: true,
      selector: (row) => row.Ethnicity,
      width: "20%",
    },
    {
      name: "Provider",
      sortable: true,
      selector: (row) => row.Provider,
      width: "20%",
    },
  ];
  // Add a new Referrals
  let Referrals = [
    {
      fullname: "Phil Belford",
      phone: "(986)-789-1234",
      ssn: "123-456-7890",
      dob: "15 Mar 1985",
      LastVisit: "2022-12-20",
      ID: "45",
      Street: "5678 Main St",
      City: "New York",
      state: "NY",
      zip: "10001",
      PID: "1",
      HomeNumber: "987-654-3210",
      Age: 38,
      Gender: "Male",
      Race: "Caucasian",
      Provider: "HealthCare XYZ",
    },
    {
      fullname: "Phil Belford",
      phone: "(986)-789-1234",
      ssn: "123-456-7890",
      dob: "15 Mar 1985",
      LastVisit: "2022-12-20",
      ID: "45",
      Street: "5678 Main St",
      City: "New York",
      state: "NY",
      PID: "1",

      zip: "10001",
      HomeNumber: "987-654-3210",
      Age: 38,
      Gender: "Male",
      Race: "Caucasian",
      Provider: "HealthCare XYZ",
    },
    {
      fullname: "Phil Belford",
      phone: "(986)-789-1234",
      ssn: "123-456-7890",
      dob: "15 Mar 1985",
      LastVisit: "2022-12-20",
      ID: "45",
      Street: "5678 Main St",
      City: "New York",
      state: "NY",
      zip: "10001",
      PID: "1",
      Ethnicity: "not Hispancic or latino",
      HomeNumber: "987-654-3210",
      Age: 38,
      Gender: "Male",
      Race: "Caucasian",
      Provider: "HealthCare XYZ",
    },
  ];

  data = [...data];

  const ReferralsColumns = (clickHandler) => [
    {
      name: "Refer T0",
      sortable: true,
      selector: (row) => row.fullname,
      width: "15%",
    },
    {
      name: "Refer Date",
      sortable: true,
      selector: (row) => row.LastVisit,
      width: "10%",
    },

    {
      name: "Replay Date",
      sortable: true,
      selector: (row) => row.LastVisit,
      width: "15%",
    },
    {
      name: "Patient",
      sortable: true,
      selector: (row) => row.fullname,
      width: "20%",
    },
    {
      name: "ID",
      sortable: true,
      selector: (row) => row.ID,
      width: "20%",
    },
    {
      name: "Reson",
      sortable: true,
      selector: (row) => row.Reson,
      width: "20%",
    },
  ];
  return (
    <>
      <Card className="mb-3">
        <CardHeader className="card-title-text text-capitalize">
          Patient Finder
        </CardHeader>
        <CardBody>
          <Row className="mb-2">
            <Col md={3} lg={3}>
              <FormGroup>
                <Label>Provider</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>All Provider</option>
                  <option>Provider 1</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label>Visits From</Label>
                <DatePicker
                  className="form-control"
                  selected={scheduledDate}
                  onChange={(date) => {
                    setScheduledDate(date);
                  }}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="Eg. mm/dd/yyyy"
                  name={"scheduleDate"}
                />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label>To</Label>
                <DatePicker
                  className="form-control"
                  selected={scheduledDate}
                  onChange={(date) => {
                    setScheduledDate(date);
                  }}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="Eg. mm/dd/yyyy"
                  name={"scheduleDate"}
                />
              </FormGroup>
            </Col>
            <Col md={3} lg={3} className="mt-4">
              <div className="float-end me-2 ms-auto">
                <Button className="link-text" color="primary">
                  Submit
                </Button>
              </div>
              <div className="float-end me-2">
                <Button className="link-text" color="primary">
                  Export to CSV
                </Button>
              </div>
              <div className="float-end me-2">
                <Button className="link-text" color="primary">
                  Print
                </Button>
              </div>
            </Col>
          </Row>
          <DataTable
            columns={columns(handleButtonClick)}
            data={data}
            persistTableHead
            pagination
          />
        </CardBody>
      </Card>
      <Card className="mb-3">
        <CardBody>
          <Label className="fw-bold">Report - Clinical</Label>
          <div className="divider mt-1" />

          <Row>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Facility</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Patient ID</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">From : </Label>
                <DatePicker
                  className="form-control"
                  selected={scheduledDate}
                  onChange={(date) => {
                    setScheduledDate(date);
                  }}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="Eg. mm/dd/yyyy"
                  name={"scheduleDate"}
                />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">To : </Label>
                <DatePicker
                  className="form-control"
                  selected={scheduledDate}
                  onChange={(date) => {
                    setScheduledDate(date);
                  }}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="Eg. mm/dd/yyyy"
                  name={"scheduleDate"}
                />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Age Range From</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"number"}
                />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Age Range To</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"number"}
                />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Problem XD</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
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
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold"> Drug</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
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
                <Label className="fw-semi-bold">Ethnicity</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Unassigned</option>
                  <option>Hispanic or Lactino</option>
                  <option>Not Hispanic or Lactino</option>
                </Input>
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
                <Label className="fw-semi-bold">Lab Result</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Unassigned</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Option</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Communication</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
          </Row>
          <Button className="float-end" color="primary">
            Submit
          </Button>
          <Button className="float-end me-2" color="primary">
            Print
          </Button>
        </CardBody>
        <CardHeader className="card-title-text text-capitalize">
          Summary of Phil Belford
        </CardHeader>
        <CardBody>
          <DataTable
            columns={philBelfordColumns(handleButtonClick)}
            data={philBelfordData}
            persistTableHead
            pagination
          />
        </CardBody>
      </Card>
      <Card className="mb-3">
        <CardHeader className="card-title-text text-capitalize">
          Report - Referrals
        </CardHeader>
        <CardBody>
          <Row className="mb-2">
            <Col md={3} lg={3}>
              <FormGroup>
                <Label>Facility</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>All Facilities</option>
                  <option>Facility 1</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label>Visits From</Label>
                <DatePicker
                  className="form-control"
                  selected={scheduledDate}
                  onChange={(date) => {
                    setScheduledDate(date);
                  }}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="Eg. mm/dd/yyyy"
                  name={"scheduleDate"}
                />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label>To</Label>
                <DatePicker
                  className="form-control"
                  selected={scheduledDate}
                  onChange={(date) => {
                    setScheduledDate(date);
                  }}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="Eg. mm/dd/yyyy"
                  name={"scheduleDate"}
                />
              </FormGroup>
            </Col>
            <Col md={3} lg={3} className="mt-4">
              <div className="float-end me-2 ms-auto">
                <Button className="link-text" color="primary">
                  Submit
                </Button>
              </div>
              <div className="float-end me-2">
                <Button className="link-text" color="primary">
                  Print
                </Button>
              </div>
            </Col>
          </Row>
          <DataTable
            columns={ReferralsColumns(handleButtonClick)}
            data={data}
            persistTableHead
            pagination
          />
        </CardBody>
      </Card>
      <Card className="mb-2">
        <CardBody>
          <Label className="fw-bold">
            Report - Automated Measure Calculations (AMC) - Date of Report :
          </Label>
          <div className="divider mt-1" />
          <Row>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Begin Date</Label>
                <DatePicker
                  className="form-control"
                  selected={scheduledDate}
                  onChange={(date) => {
                    setScheduledDate(date);
                  }}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="Eg. mm/dd/yyyy"
                  name={"scheduleDate"}
                />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">End Date</Label>
                <DatePicker
                  className="form-control"
                  selected={scheduledDate}
                  onChange={(date) => {
                    setScheduledDate(date);
                  }}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="Eg. mm/dd/yyyy"
                  name={"scheduleDate"}
                />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Rule Set</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Automated Measure Calculations(AMX)-2015</option>
                  <option>Automated Measure Calculations(AMX)-2016.</option>
                  <option>Automated Measure Calculations(AMX)-2017</option>
                  <option>Automated Measure Calculations(AMX)-2018.</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Provider</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>All (Cumulative)</option>
                  <option>Provider-2016.</option>
                  <option>Provider-2017</option>
                  <option>Provider-2018.</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Provider Relationship</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Encounter</option>
                  <option>Provider Relationship - 2016.</option>
                  <option>Provider Relationship - 2017</option>
                  <option>Provider Relationship - 2018.</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Number labs</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"Number"}
                  min={0}
                  value={0}
                />
              </FormGroup>
            </Col>
          </Row>
          <ButtonGroup className="float-end">
            <Button color="primary">AMC Detailed Report</Button>
            <Button color="alternate">Print</Button>
            <Button color="warning">Start Another Report</Button>
          </ButtonGroup>
        </CardBody>
      </Card>
      <Card>
        <Table size="md">
          <thead>
            <tr>
              <th>Title</th>
              <th>Total Patients</th>
              <th>Denominator</th>
              <th>Numberator</th>
              <th>Failed</th>
              <th>Performance Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                Provide Patients Electronic Access to Their Health Information -
                API Access
              </th>
              <td>25</td>
              <td>12</td>
              <td>2</td>
              <td>22</td>
              <td>16.66667%</td>
            </tr>
            <tr>
              <th scope="row">
                Support Electronic Referral Loops By Sending HEalTh Information
              </th>
              <td>25</td>
              <td>5</td>
              <td>0</td>
              <td>5</td>
              <td>00.0000%</td>
            </tr>
          </tbody>
        </Table>
      </Card>
    </>
  );
}
