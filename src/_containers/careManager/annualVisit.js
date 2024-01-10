import React, { useState } from "react";
import {
  Card,
  CardBody,
  Button,
  Row,
  Col,
  Input,
  FormGroup,
  Label,
} from "reactstrap";
import DatePicker from "react-datepicker";
export function AnnualVisit() {
  const [scheduledDate, setScheduledDate] = useState();
  let numberArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let FunctionalArray = [
    "Do you feel unsteady when you walk?",
    "Have you recently fallen?",
    "Do you need help with eating, getting dressed, grooming, bathing, walking or using toilet?",
    "Do you need help with phone , transportaltion, shopping or managing money?",
    "Have you noticed vision impairment?",
  ];
  let depressionArray = [
    "Little intrest or pleasure in doing things",
    "Have you recently fallen?",
    "Do you need help with eating, getting dressed, grooming, bathing, walking or using toilet?",
    "Do you need help with phone , transportaltion, shopping or managing money?",
    "Have you noticed vision impairment?",
  ];
  let examArray = [
    "Cardiac Echo",
    "ECG",
    "Gynecologiscal Exam",
    "Mannogram",
    "Physical Exam",
    "Prostate Exam",
    "Rectal Exam",
    "Sigmoid/Colonoscopy",
    "Retinal Exam",
    "Flu Vaccination",
    "Pneumonia Vaccination",
    "LDL",
    "PSA",
  ];
  return (
    <>
      <h5 className="ms-1 mb-3">Annual visit</h5>
      <Card className="mb-2">
        <CardBody>
          {" "}
          <Row>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">Patient name</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">Date of birth</Label>
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
          </Row>
        </CardBody>
      </Card>
      <Card className="mb-2">
        <CardBody>
          <Label className="fw-bold">Exams/Tests</Label>
          <div className="divider mt-1" />
          <Row>
            <Col md={2} lg={2}>
              <FormGroup>
                <Label className="fw-semi-bold">Exam or Test</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"text"}
                  disabled
                  value={"Hemoglobin"}
                />
              </FormGroup>
            </Col>
            <Col md={1} lg={1}>
              <FormGroup>
                <Label className="fw-semi-bold ">N/A</Label>
                <Row>
                  <Col className="ms-2 mt-2">
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"radio"}
                    />
                  </Col>
                </Row>
              </FormGroup>
            </Col>
            <Col md={1} lg={1}>
              <FormGroup>
                <Label className="fw-semi-bold">Nor</Label>
                <Row>
                  <Col className="ms-2 mt-2">
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"radio"}
                    />
                  </Col>
                </Row>
              </FormGroup>
            </Col>
            <Col md={1} lg={1}>
              <FormGroup>
                <Label className="fw-semi-bold">Abn</Label>
                <Row>
                  <Col className="ms-2 mt-2">
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"radio"}
                    />
                  </Col>
                </Row>
              </FormGroup>
            </Col>
            <Col md={2} lg={2}>
              <FormGroup>
                <Label className="fw-semi-bold">Date</Label>
                <DatePicker
                  className="form-control"
                  selected={scheduledDate}
                  onChange={(date) => {
                    setScheduledDate(date);
                  }}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="Exam date"
                  name={"scheduleDate"}
                />
              </FormGroup>
            </Col>
            <Col md={5} lg={5}>
              <FormGroup>
                <Label className="fw-semi-bold">Notes</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"textarea"}
                />
              </FormGroup>
            </Col>
          </Row>
          {examArray.map((options) => (
            <>
              <Row>
                <Col md={2} lg={2}>
                  <FormGroup>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"text"}
                      disabled
                      value={options}
                    />
                  </FormGroup>
                </Col>
                <Col md={1} lg={1}>
                  <FormGroup>
                    <Row>
                      <Col className="ms-2 mt-2">
                        <Input
                          id={"companyName"}
                          name={"companyName"}
                          type={"radio"}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                </Col>
                <Col md={1} lg={1}>
                  <FormGroup>
                    <Row>
                      <Col className="ms-2 mt-2">
                        <Input
                          id={"companyName"}
                          name={"companyName"}
                          type={"radio"}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                </Col>
                <Col md={1} lg={1}>
                  <FormGroup>
                    <Row>
                      <Col className="ms-2 mt-2">
                        <Input
                          id={"companyName"}
                          name={"companyName"}
                          type={"radio"}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                </Col>
                <Col md={2} lg={2}>
                  <FormGroup>
                    <DatePicker
                      className="form-control"
                      selected={scheduledDate}
                      onChange={(date) => {
                        setScheduledDate(date);
                      }}
                      dateFormat="MM/dd/yyyy"
                      placeholderText="Exam date"
                      name={"scheduleDate"}
                    />
                  </FormGroup>
                </Col>
                <Col md={5} lg={5}>
                  <FormGroup>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"textarea"}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </>
          ))}
        </CardBody>
      </Card>
      <Card className="mt-3">
        <CardBody>
          <Row>
            <Label className="fw-bold">Current Medications/suppliments</Label>
            <div className="divider mt-1" />
            <Label className="fw-semi-bold mb-3">
              List all current prescriptions and non-prescription medicines,
              vitamins, herbs etc.
            </Label>
            {numberArray2.map((options) => (
              <>
                <Col md={4} lg={4}>
                  <FormGroup>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"text"}
                      placeholder="Name of Medicines"
                    ></Input>
                  </FormGroup>
                </Col>
                <Col md={2} lg={2}>
                  <FormGroup>
                    <DatePicker
                      className="form-control"
                      selected={scheduledDate}
                      onChange={(date) => {
                        setScheduledDate(date);
                      }}
                      dateFormat="MM/dd/yyyy"
                      placeholderText="Date of filled"
                      name={"scheduleDate"}
                    />
                  </FormGroup>
                </Col>
              </>
            ))}
          </Row>
          <Row>
            <Col md={10} lg={10}>
              <FormGroup>
                <Label className="fw-semi-bold">Medication allergies</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"text"}
                  placeholder=""
                ></Input>
              </FormGroup>
            </Col>
            <Col md={10} lg={10}>
              <FormGroup>
                <Label className="fw-semi-bold">Other allergies</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"text"}
                  placeholder=""
                ></Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Label className="fw-bold">
              Functional ability/Safety screening
            </Label>
            <div className="divider mt-1" />
            {FunctionalArray.map((options) => (
              <>
                <Row>
                  <Col md={7} lg={7}>
                    <FormGroup>
                      <Label className="fw-semi-bold mb-1">{options}</Label>
                    </FormGroup>
                  </Col>
                  <Col md={3} lg={3}>
                    <FormGroup>
                      <Input
                        id={"companyName"}
                        name={"companyName"}
                        type={"checkbox"}
                      ></Input>
                      <Label className="fw-semi-bold ms-2 me-3">Yes</Label>
                      <Input
                        id={"companyName"}
                        name={"companyName"}
                        type={"checkbox"}
                      ></Input>
                      <Label className="fw-semi-bold ms-2">No</Label>
                    </FormGroup>
                  </Col>
                </Row>
              </>
            ))}
          </Row>
          <Row>
            <Label className="fw-bold">
              Depression Screening Questionnaire
            </Label>
            <div className="divider mt-1" />
            <Label className="fw-semi-bold mb-3">
              Over the last 2 weeks, how often have you been bothered by any of
              the following problems?
            </Label>
            <Row>
              <Col md={6} lg={6}>
                <Label className="fw-semi-bold">Questions</Label>
              </Col>
              <Col md={1} lg={1}>
                <FormGroup>
                  <Label className="fw-semi-bold ">Not at all</Label>
                </FormGroup>
              </Col>
              <Col md={1} lg={1}>
                <FormGroup>
                  <Label className="fw-semi-bold">Several days</Label>
                </FormGroup>
              </Col>
              <Col md={2} lg={2}>
                <FormGroup>
                  <Label className="fw-semi-bold">
                    More then half the days
                  </Label>
                </FormGroup>
              </Col>
              <Col md={2} lg={2}>
                <FormGroup>
                  <Label className="fw-semi-bold">Nearly every day</Label>
                </FormGroup>
              </Col>
            </Row>
            {depressionArray.map((options) => (
              <Row>
                <Col md={6} lg={6}>
                  <Label className="fw-semi-bold">{options}</Label>
                </Col>
                <Col md={1} lg={1}>
                  <FormGroup className="ms-4">
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"radio"}
                    />
                  </FormGroup>
                </Col>
                <Col md={1} lg={1}>
                  <FormGroup className="ms-4">
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"radio"}
                    />
                  </FormGroup>
                </Col>
                <Col md={2} lg={2}>
                  <FormGroup className="ms-4">
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"radio"}
                    />
                  </FormGroup>
                </Col>
                <Col md={2} lg={2}>
                  <FormGroup className="ms-4">
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"radio"}
                    />
                  </FormGroup>
                </Col>
              </Row>
            ))}
          </Row>
          <Button className="float-end" color="primary">
            Save details
          </Button>
        </CardBody>
      </Card>
    </>
  );
}
