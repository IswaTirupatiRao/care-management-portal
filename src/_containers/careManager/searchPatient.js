import React from "react";
import {
  Card,
  CardBody,
  Button,
  CardHeader,
  Row,
  Col,
  Input,
} from "reactstrap";
import DataTable from "react-data-table-component";
export function SearchPatient() {
  let data = [
    {
      fullname: "Erin Adams",
      phone: "(986)-324-8765",
      ssn: "123-456-7890",
      dob: "12 Dec 1997",
    },
    {
      fullname: "Mike Adams",
      phone: "(986)-546-8765",
      ssn: "123-456-7890",
      dob: "12 Nov 1998",
    },
    {
      fullname: "John Harrison",
      phone: "(986)-879-8765",
      ssn: "123-456-7890",
      dob: "12 Oct 1999",
    },
    {
      fullname: "Lucifer Morningstar",
      phone: "(986)-123-8765",
      ssn: "123-456-7890",
      dob: "12 Aug 1990",
    },
  ];
  const columns = (clickHandler) => [
    {
      name: "Full name",
      selector: (row) => row.fullname,
      sortable: true,
      width: "30%",
    },
    {
      name: "Home Phone",
      id: "jobtitle",
      selector: (row) => row.phone,
      sortable: true,
      width: "30%",
    },
    {
      name: "SSN",
      sortable: true,
      selector: (row) => row.ssn,
      width: "20%",
    },
    {
      name: "Date of Birth",
      selector: (row) => row.dob,
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
          Patient Finder
          <div className="float-end me-2 ms-auto">
            <Button className="link-text" color="primary">
              Add new patient
            </Button>
          </div>
        </CardHeader>
        <CardBody>
          <Row className="mb-2">
            <Col md={3} lg={3}>
              <Input
                id={"companyName"}
                name={"companyName"}
                type={"search"}
                placeholder="Search by name"
              />
            </Col>
            <Col md={3} lg={3}>
              <Input
                id={"companyName"}
                name={"companyName"}
                type={"search"}
                placeholder="Search by home phone"
              />
            </Col>
            <Col md={3} lg={3}>
              <Input
                id={"companyName"}
                name={"companyName"}
                type={"search"}
                placeholder="Search by SSN"
              />
            </Col>
            <Col md={3} lg={3}>
              <Input
                id={"companyName"}
                name={"companyName"}
                type={"search"}
                placeholder="Search by date of birth"
              />
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
    </>
  );
}
