import React, { useState } from "react";
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
import DatePicker from "react-datepicker";
export function Assessment() {
  const [scheduledDate, setScheduledDate] = useState();
  let RiskArray = [
    "Congestive heart failure",
    "Heart attack",
    "Stroke",
    "High blood pressure",
    "Depression",
    "Chronic kidney disease",
    "Cancer",
    "Diabities",
    "Thyroid problem",
    "COPD",
    "High Cholestrol",
    "Arthrities",
    "Other (Specify)",
  ];
  let FamilyDiseaseArray = [
    "Heart disease",
    "Stroke",
    "High Cholestrol",
    "High blood pressure",
    "Depression/suicide",
    "Cancer",
    "Diabities",
    "Glaucoma",
    "COPD",
    "Alcoholism",
    "Other (Specify)",
  ];
  let socialArray = [
    {
      name: "Do you excercise regularly?",
      type: 1,
      sub: "if so, what type of excercise and how frequest?",
    },
    {
      name: "What best describe your home enviroment?",
      type: 2,
      sub: "if other, please specify",
    },
    {
      name: "If at a private home, do you depend on a spouse/family member for assistance?",
      type: 1,
      sub: "if so, who?",
    },
    {
      name: "Do you smoke?",
      type: 1,
      sub: "if so, how many packs/day and from how many years?",
    },
    {
      name: "Do you drink alcoholic brverages?",
      type: 1,
      sub: "if so, how may drinks/month?",
    },
    {
      name: "Do you take recreational drugs?",
      type: 1,
      sub: "if so how often and waht drug?",
    },
    {
      name: "Do you eat a balanced diet?",
      type: 1,
      sub: "",
    },
    {
      name: "Do you have any issue with sexual health?",
      type: 1,
      sub: "",
    },
    {
      name: "Reate your general health?",
      type: 3,
      sub: "",
    },
    {
      name: "Have you leaked any amount of urine in the last 3 months?",
      type: 1,
      sub: "",
    },
  ];
  let numberArray = [1, 2, 3, 4, 5, 6];
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
  return (
    <>
      <Card>
        <CardHeader className="card-title-text text-capitalize">
          <h5 className="fw-bold">
            Patient Health Risk Assessment (HRA) & History{" "}
          </h5>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">Provider</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Provider 1</option>
                  <option>Provider 2</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">Health plan</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Health plan 1</option>
                  <option>Health Plan 2</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Label className="fw-bold">Patient Details</Label>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Patient name</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
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
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Today's date</Label>
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
                <Label className="fw-semi-bold">Gender</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Age</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"number"}
                />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Primary language</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Label className="fw-bold">A. Medical History</Label>
            <Label className="fw-semi-bold mb-3">
              Please indicate which of the folowing medical issues you've had
              with approximate year
            </Label>
            {RiskArray.map((options) => (
              <>
                <Col md={3} lg={3}>
                  <FormGroup>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"checkbox"}
                    ></Input>
                    <Label className="fw-semi-bold ms-2">{options}</Label>
                  </FormGroup>
                </Col>
                <Col md={1} lg={1}>
                  <FormGroup>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"text"}
                      placeholder="Year"
                    ></Input>
                  </FormGroup>
                </Col>
              </>
            ))}
          </Row>
          <Row>
            <Label className="fw-bold">B. Social History</Label>
            <Label className="fw-semi-bold mb-3">
              Please answer questions 1-10 regarding your social habits
            </Label>
            {socialArray.map((options) => (
              <>
                <Row>
                  <Col md={5} lg={5}>
                    <FormGroup>
                      <Label className="fw-semi-bold mb-1 mt-1">
                        {options.name}
                      </Label>
                    </FormGroup>
                  </Col>
                  {options.type === 1 && (
                    <Col md={3} lg={3}>
                      <FormGroup className="mt-1">
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
                  )}
                  {options.type === 2 && (
                    <Col md={3} lg={3}>
                      <FormGroup className="mt-1">
                        <Input
                          id={"companyName"}
                          name={"companyName"}
                          type={"checkbox"}
                        ></Input>
                        <Label className="fw-semi-bold ms-2 me-3">
                          Private home
                        </Label>
                        <Input
                          id={"companyName"}
                          name={"companyName"}
                          type={"checkbox"}
                        ></Input>
                        <Label className="fw-semi-bold ms-2 me-3">
                          Assisted living
                        </Label>
                        <Input
                          id={"companyName"}
                          name={"companyName"}
                          type={"checkbox"}
                        ></Input>
                        <Label className="fw-semi-bold ms-2">Other</Label>
                      </FormGroup>
                    </Col>
                  )}
                  {options.type === 3 && (
                    <Col md={3} lg={3}>
                      <FormGroup className="mt-1">
                        <Input
                          id={"companyName"}
                          name={"companyName"}
                          type={"checkbox"}
                        ></Input>
                        <Label className="fw-semi-bold ms-2 me-3">Good</Label>
                        <Input
                          id={"companyName"}
                          name={"companyName"}
                          type={"checkbox"}
                        ></Input>
                        <Label className="fw-semi-bold ms-2 me-3">Fair</Label>
                        <Input
                          id={"companyName"}
                          name={"companyName"}
                          type={"checkbox"}
                        ></Input>
                        <Label className="fw-semi-bold ms-2">Poor</Label>
                      </FormGroup>
                    </Col>
                  )}
                  {options.sub !== "" && (
                    <Col md={4} lg={4}>
                      <FormGroup>
                        <Input
                          id={"companyName"}
                          name={"companyName"}
                          type={"text"}
                          placeholder={options.sub}
                        ></Input>
                      </FormGroup>
                    </Col>
                  )}
                </Row>
              </>
            ))}
          </Row>
          <Row>
            <Label className="fw-bold">C. Family History</Label>
            <Label className="fw-semi-bold mb-3">
              Please indicate if you have a blood related relative with any of
              the following medical issues
            </Label>
            {FamilyDiseaseArray.map((options) => (
              <>
                <Col md={2} lg={2}>
                  <FormGroup>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"checkbox"}
                    ></Input>
                    <Label className="fw-semi-bold ms-2">{options}</Label>
                  </FormGroup>
                </Col>
                <Col md={2} lg={2}>
                  <FormGroup>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"text"}
                      placeholder="Relationship"
                    ></Input>
                  </FormGroup>
                </Col>
              </>
            ))}
          </Row>
          <Row>
            <Label className="fw-bold">
              D. Hospitalization/Surgery History
            </Label>
            <Label className="fw-semi-bold mb-3">
              Please indicate your hospitalization and surgery history
            </Label>
            {numberArray.map((options) => (
              <>
                <Col md={4} lg={4}>
                  <FormGroup>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"text"}
                      placeholder="Event"
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
                      placeholderText="Event date"
                      name={"scheduleDate"}
                    />
                  </FormGroup>
                </Col>
              </>
            ))}
          </Row>
          <Row>
            <Label className="fw-bold">
              E. Patient's medical provider/supplier list
            </Label>
            <Label className="fw-semi-bold mb-3">
              List other physicians/suppliers who provided you care in the past
              year
            </Label>
            {numberArray.map((options) => (
              <>
                <Col md={2} lg={2}>
                  <FormGroup>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"text"}
                      placeholder="Physicians/suppliers name"
                    ></Input>
                  </FormGroup>
                </Col>
                <Col md={1} lg={1}>
                  <FormGroup>
                    <DatePicker
                      className="form-control"
                      selected={scheduledDate}
                      onChange={(date) => {
                        setScheduledDate(date);
                      }}
                      dateFormat="MM/dd/yyyy"
                      placeholderText="Date"
                      name={"scheduleDate"}
                    />
                  </FormGroup>
                </Col>
                <Col md={3} lg={3}>
                  <FormGroup>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"text"}
                      placeholder="Condition reviewed/treated"
                    ></Input>
                  </FormGroup>
                </Col>
              </>
            ))}
          </Row>
          <Button className="float-end" color="primary">
            Save details
          </Button>
        </CardBody>
      </Card>
      <Card className="mt-3">
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
          <Row>
            <Label className="fw-bold">
              F. Current Medications/suppliments
            </Label>
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
              G. Functional ability/Safety screening
            </Label>
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
              H. Depression Screening Questionnaire
            </Label>
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
