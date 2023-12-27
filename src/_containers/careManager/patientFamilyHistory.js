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
export function PatientFamilyHistory() {
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
    "Hemoglobin",
    "PSA",
  ];
  let RiskArray = [
    "Varicose Veins",
    "Hypertension",
    "Diabities",
    "Sickle Cell",
    "Fibroids",
    "PID (Pelvic Inflammatory Disease",
    "Severe Migraine",
    "Heart Disease",
    "Thrombosis/Stroke",
    "Hepatitis",
    "Gall Bladder Conditions",
    "Breast Disease",
    "Depression",
    "Allergies",
    "Infertilities",
    "Asthma",
    "Epilepsy",
    "Contact Lenses",
    "Contraceptive Complications",
    "Other (Specify)",
  ];
  return (
    <>
      <h5 className="ms-1 mb-3">Add New Patient & Family History</h5>
      <Card className="mb-2">
        <CardBody>
          <Label className="fw-bold">Risk Factors</Label>
          <div className="divider mt-1" />
          <Row>
            {RiskArray.map((options) => (
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
            ))}
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
                  value={"Breast Exam"}
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
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Date/notes</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
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
                <Col md={3} lg={3}>
                  <FormGroup>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"text"}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </>
          ))}
        </CardBody>
      </Card>
      <Card className="mb-2">
        <CardBody>
          <Label className="fw-bold">Family History</Label>
          <div className="divider mt-1" />
          <Row>
            <Col md={3} lg={3}>
              <FormGroup>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"text"}
                  placeholder="Father"
                />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"text"}
                  placeholder="Diagnosis Code"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3} lg={3}>
              <FormGroup>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"text"}
                  placeholder="Mother"
                />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"text"}
                  placeholder="Diagnosis Code"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3} lg={3}>
              <FormGroup>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"text"}
                  placeholder="Siblings"
                />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"text"}
                  placeholder="Diagnosis Code"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3} lg={3}>
              <FormGroup>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"text"}
                  placeholder="Spouce"
                />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"text"}
                  placeholder="Diagnosis Code"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3} lg={3}>
              <FormGroup>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"text"}
                  placeholder="Offspring"
                />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"text"}
                  placeholder="Diagnosis Code"
                />
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Card className="mb-2">
        <CardBody>
          <Label className="fw-bold">Relatives</Label>
          <div className="divider mt-1" />
          <Row>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Cancer</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Tuberculosis</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Diabetes</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">High Blood Pressure</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Heart Problem</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Stroke</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Epilepsy</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Mental Illness</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Card className="mb-2">
        <CardBody>
          <Label className="fw-bold">Lifestyle</Label>
          <div className="divider mt-1" />
          <Row>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Tobacco</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"text"}
                  placeholder=""
                />
              </FormGroup>
            </Col>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">Status</Label>
                <Row className="mt-2">
                  <Col>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"radio"}
                    />
                    <Label className="fw-semi-bold ms-2">Current</Label>
                  </Col>
                  <Col>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"radio"}
                    />
                    <Label className="fw-semi-bold ms-2">Quit</Label>
                  </Col>
                  <Col>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"radio"}
                    />
                    <Label className="fw-semi-bold ms-2">Never</Label>
                  </Col>
                  <Col>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"radio"}
                    />
                    <Label className="fw-semi-bold ms-2">N/A</Label>
                  </Col>
                </Row>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Coffee</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"text"}
                  placeholder=""
                />
              </FormGroup>
            </Col>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">Status</Label>
                <Row className="mt-2">
                  <Col>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"radio"}
                    />
                    <Label className="fw-semi-bold ms-2">Current</Label>
                  </Col>
                  <Col>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"radio"}
                    />
                    <Label className="fw-semi-bold ms-2">Quit</Label>
                  </Col>
                  <Col>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"radio"}
                    />
                    <Label className="fw-semi-bold ms-2">Never</Label>
                  </Col>
                  <Col>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"radio"}
                    />
                    <Label className="fw-semi-bold ms-2">N/A</Label>
                  </Col>
                </Row>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Alcohol</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"text"}
                  placeholder=""
                />
              </FormGroup>
            </Col>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">Status</Label>
                <Row className="mt-2">
                  <Col>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"radio"}
                    />
                    <Label className="fw-semi-bold ms-2">Current</Label>
                  </Col>
                  <Col>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"radio"}
                    />
                    <Label className="fw-semi-bold ms-2">Quit</Label>
                  </Col>
                  <Col>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"radio"}
                    />
                    <Label className="fw-semi-bold ms-2">Never</Label>
                  </Col>
                  <Col>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"radio"}
                    />
                    <Label className="fw-semi-bold ms-2">N/A</Label>
                  </Col>
                </Row>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Recreational Drugs</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"text"}
                  placeholder=""
                />
              </FormGroup>
            </Col>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">Status</Label>
                <Row className="mt-2">
                  <Col>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"radio"}
                    />
                    <Label className="fw-semi-bold ms-2">Current</Label>
                  </Col>
                  <Col>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"radio"}
                    />
                    <Label className="fw-semi-bold ms-2">Quit</Label>
                  </Col>
                  <Col>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"radio"}
                    />
                    <Label className="fw-semi-bold ms-2">Never</Label>
                  </Col>
                  <Col>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"radio"}
                    />
                    <Label className="fw-semi-bold ms-2">N/A</Label>
                  </Col>
                </Row>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Counseling</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"text"}
                  placeholder=""
                />
              </FormGroup>
            </Col>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">Status</Label>
                <Row className="mt-2">
                  <Col>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"radio"}
                    />
                    <Label className="fw-semi-bold ms-2">Current</Label>
                  </Col>
                  <Col>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"radio"}
                    />
                    <Label className="fw-semi-bold ms-2">Quit</Label>
                  </Col>
                  <Col>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"radio"}
                    />
                    <Label className="fw-semi-bold ms-2">Never</Label>
                  </Col>
                  <Col>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"radio"}
                    />
                    <Label className="fw-semi-bold ms-2">N/A</Label>
                  </Col>
                </Row>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Excercise Patters</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"text"}
                  placeholder=""
                />
              </FormGroup>
            </Col>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">Status</Label>
                <Row className="mt-2">
                  <Col>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"radio"}
                    />
                    <Label className="fw-semi-bold ms-2">Current</Label>
                  </Col>
                  <Col>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"radio"}
                    />
                    <Label className="fw-semi-bold ms-2">Quit</Label>
                  </Col>
                  <Col>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"radio"}
                    />
                    <Label className="fw-semi-bold ms-2">Never</Label>
                  </Col>
                  <Col>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"radio"}
                    />
                    <Label className="fw-semi-bold ms-2">N/A</Label>
                  </Col>
                </Row>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Hazardous activities</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"text"}
                  placeholder=""
                />
              </FormGroup>
            </Col>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">Status</Label>
                <Row className="mt-2">
                  <Col>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"radio"}
                    />
                    <Label className="fw-semi-bold ms-2">Current</Label>
                  </Col>
                  <Col>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"radio"}
                    />
                    <Label className="fw-semi-bold ms-2">Quit</Label>
                  </Col>
                  <Col>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"radio"}
                    />
                    <Label className="fw-semi-bold ms-2">Never</Label>
                  </Col>
                  <Col>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"radio"}
                    />
                    <Label className="fw-semi-bold ms-2">N/A</Label>
                  </Col>
                </Row>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Sleep Patterns</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"text"}
                  placeholder=""
                />
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Label className="fw-semi-bold">Seatbelt Use</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"text"}
                  placeholder=""
                />
              </FormGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Button className="float-end" color="primary">
        Save Details
      </Button>
    </>
  );
}
