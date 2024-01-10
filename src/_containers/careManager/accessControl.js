import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  Button,
  FormGroup,
  Label,
  Input,
  CardHeader,
} from "reactstrap";
import { BsEyeSlashFill, BsPencilFill } from "react-icons/bs";
export function AccessControl() {
  let userMermebersArray = [
    "Admin",
    "Care manager",
    "Physician",
    "Care coordinator",
    "Social Worker",
    "Patient",
  ];
  let groupArray = [
    "Physician-view",
    "Physician-add-only",
    "Physician-wsome",
    "Physician-write",
    "Administrator-write",
    "Administrator-add-only",
    "Administrator-wsome",
    "Administrator-view",
    "Care-manager-view",
    "Care-manager-add-only",
    "Care-manager-wsome",
    "Care-manager-write",
  ];
  return (
    <>
      <Row>
        <Col>
          <Card>
            <CardHeader className="card-title-text text-capitalize">
              Access Control List Administrator
            </CardHeader>
            <CardBody>
              <Row>
                <Col>
                  <FormGroup>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"checkbox"}
                      checked
                    ></Input>{" "}
                    {"  "}
                    <Label>User Membership</Label>
                  </FormGroup>
                  <Card className="mb-2">
                    <CardBody>
                      {userMermebersArray.map((options) => (
                        <>
                          <div>
                            <Label>
                              {options}
                              {options === "Care manager" ||
                              options === "Physician" ? (
                                <BsEyeSlashFill className="ms-1" />
                              ) : (
                                <BsPencilFill className="ms-1" />
                              )}
                            </Label>
                          </div>
                          {options === "Care manager" && (
                            <div className="mb-2">
                              <Row>
                                <Col md={4} lg={4}>
                                  <Label className="fw-bold">Active</Label>
                                  <Input
                                    id={"companyName"}
                                    name={"companyName"}
                                    type={"select"}
                                    multiple
                                  >
                                    <option>Care manager</option>
                                  </Input>
                                  <Button
                                    className="mt-1 float-end"
                                    color="alternate"
                                  >
                                    {">>"}
                                  </Button>
                                </Col>
                                <Col md={4} lg={4}>
                                  <Label className="fw-bold">Inactive</Label>
                                  <Input
                                    id={"companyName"}
                                    name={"companyName"}
                                    type={"select"}
                                    multiple
                                  >
                                    <option>Administrators</option>
                                    <option>Care Coordinator</option>
                                    <option>Social Worker</option>
                                    <option>Patient</option>
                                  </Input>
                                  <Button className="mt-1" color="alternate">
                                    {"<<"}
                                  </Button>
                                </Col>
                              </Row>
                            </div>
                          )}
                          {options === "Physician" && (
                            <div className="mb-2">
                              <Row>
                                <Col md={4} lg={4}>
                                  <Label className="fw-bold">Active</Label>
                                  <Input
                                    id={"companyName"}
                                    name={"companyName"}
                                    type={"select"}
                                    multiple
                                  >
                                    <option>Physician</option>
                                  </Input>
                                  <Button
                                    className="mt-1 float-end"
                                    color="alternate"
                                  >
                                    {">>"}
                                  </Button>
                                </Col>
                                <Col md={4} lg={4}>
                                  <Label className="fw-bold">Inactive</Label>
                                  <Input
                                    id={"companyName"}
                                    name={"companyName"}
                                    type={"select"}
                                    multiple
                                  >
                                    <option>Administrators</option>
                                    <option>Care Coordinator</option>
                                    <option>Social Worker</option>
                                    <option>Patient</option>
                                  </Input>
                                  <Button className="mt-1" color="alternate">
                                    {"<<"}
                                  </Button>
                                </Col>
                              </Row>
                            </div>
                          )}
                        </>
                      ))}
                    </CardBody>
                  </Card>
                </Col>
                <Col>
                  <FormGroup>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"checkbox"}
                      checked
                    ></Input>{" "}
                    {"  "}
                    <Label>Group and Access Controls</Label>
                  </FormGroup>
                  <Card className="mb-2">
                    <CardBody>
                      {groupArray.map((options) => (
                        <>
                          <div>
                            <Label>
                              {options}{" "}
                              {options === "Administrator-write" ? (
                                <BsEyeSlashFill className="ms-1" />
                              ) : (
                                <BsPencilFill className="ms-1" />
                              )}
                            </Label>
                          </div>
                          {options === "Administrator-write" && (
                            <div className="mb-2">
                              <Row>
                                <Col md={6} lg={6}>
                                  <Label className="fw-bold">Active</Label>
                                  <Input
                                    id={"companyName"}
                                    name={"companyName"}
                                    type={"select"}
                                    multiple
                                  >
                                    <option>Care coordinator - Billing</option>
                                    <option>
                                      Care coordinator - Price Discounting
                                    </option>
                                    <option>
                                      Care coordinator - EOB Data Entry
                                    </option>
                                    <option>
                                      Care coordinator - Financila Reporting
                                    </option>
                                    <option>
                                      Adminisitration - ACL Administration
                                    </option>
                                  </Input>
                                  <Button
                                    className="mt-1 float-end"
                                    color="alternate"
                                  >
                                    {">>"}
                                  </Button>
                                </Col>
                                <Col md={6} lg={6}>
                                  <Label className="fw-bold">Inactive</Label>
                                  <Input
                                    id={"companyName"}
                                    name={"companyName"}
                                    type={"select"}
                                    multiple
                                  >
                                    <option>
                                      Placeholder (Maintains empty ACLs)
                                    </option>
                                  </Input>
                                  <Button className="mt-1" color="alternate">
                                    {"<<"}
                                  </Button>
                                </Col>
                              </Row>
                            </div>
                          )}
                        </>
                      ))}
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}
