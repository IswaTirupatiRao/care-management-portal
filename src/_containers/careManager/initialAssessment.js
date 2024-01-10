import React, { useState } from "react";
import classnames from "classnames";
import {
  Card,
  CardBody,
  Button,
  Row,
  Col,
  Input,
  Label,
  FormGroup,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  CardHeader,
  ModalHeader,
  ModalBody,
  Modal,
  ModalFooter,
  ButtonGroup,
} from "reactstrap";
import { BsFillTrashFill, BsPencilFill } from "react-icons/bs";
import DatePicker from "react-datepicker";
export function InitialAssessment() {
  const [activeTabs, setActiveTabs] = useState("1");
  const [letterModal, setLetterModal] = useState(false);
  const [MedicationModal, setMedicationModal] = useState(false);
  const [prescriptionModal, setPrescriptionModal] = useState(false);
  const [surgeriesModal, setSurgeriesModal] = useState(false);
  const [dentalIssuesModal, setDentalIssuesModal] = useState(false);
  const [allergiesModal, setAllergiesModal] = useState(false);
  const [messagesModal, setMessagesModal] = useState(false);
  const [cRemindersModal, setCRemindersModal] = useState(false);
  const [aoppointmentsModal, setAppointmentsModal] = useState(false);
  const [diagnosisModal, setDiagnosisModal] = useState(false);
  const [immunizationModal, setImmunizationModal] = useState(false);
  const [documentModal, setDocumentModal] = useState(false);
  const [referralModal, setReferralModal] = useState(false);
  const [counterReferralModal, setCounterReferralModal] = useState(false);
  const [scheduledDate, setScheduledDate] = useState();
  let messageTypeArray = [
    "Unassigned",
    "Chat Notes",
    "Insurence",
    "New Document",
    "Pharmacy",
    "Prior Auth",
    "Referral",
    "Test Seheduleing",
    "Bill/Collect",
    "Other",
    "Lab Results",
    "New Orders",
    "Patient Reminders",
    "Image Results",
  ];
  let allergiesArray = ["Eczema", "Hives", "Rhinitis"];
  let medicalProblemArray = [
    "Mild Persistent asthama",
    "Migraine",
    "Acute pharyngitis",
  ];
  let medicationArray = ["Amlodipine", "Bunavail", "Kevzara"];
  let surgeriesArray = ["Appendectomy", "Cataract surgery", "Cholecystectomy"];
  let dentalIssuesArray = [
    "Sensitive Teeth",
    "Cracked or Broken Teeth",
    "Root Infection",
  ];
  let immunizationArray = [
    "Hepatitis B",
    "Rotavirus (RV)",
    "Diphtheria, tetanus, & acellular pertussis",
  ];
  let prescriptionsArray = ["Amlodipine", "Amitriptyline", "Bunavail"];
  let weekData = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <>
      <h5 className="ms-1 mb-3">Patient Initial Assessment (IA)</h5>
      <Row>
        <Col md={12} lg={12}>
          <Card className="mb-2">
            <CardHeader>
              {" "}
              <Nav>
                <NavItem>
                  <NavLink
                    href="#"
                    className={classnames({
                      active: activeTabs === "1",
                    })}
                    onClick={() => {
                      setActiveTabs("1");
                    }}
                  >
                    Patient Demographics
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="#"
                    className={classnames({
                      active: activeTabs === "2",
                    })}
                    onClick={() => {
                      setActiveTabs("2");
                    }}
                  >
                    Contact
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="#"
                    className={classnames({
                      active: activeTabs === "3",
                    })}
                    onClick={() => {
                      setActiveTabs("3");
                    }}
                  >
                    Employer
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    href="#"
                    className={classnames({
                      active: activeTabs === "4",
                    })}
                    onClick={() => {
                      setActiveTabs("4");
                    }}
                  >
                    Guardian
                  </NavLink>
                </NavItem>
              </Nav>
              <Button size="sm" className="float-end" color="link">
                <BsPencilFill className="me-2" />
              </Button>
            </CardHeader>
            <CardBody>
              <TabContent activeTab={activeTabs}>
                <TabPane tabId="1">
                  <Row>
                    <Col md={2} lg={2}>
                      Title
                    </Col>
                    <Col md={2} lg={2}>
                      Mr.
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} lg={2}>
                      Full name
                    </Col>
                    <Col md={2} lg={2}>
                      Lucifer Morningstar
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} lg={2}>
                      Preffered name
                    </Col>
                    <Col md={2} lg={2}>
                      Lucifer
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} lg={2}>
                      External ID
                    </Col>
                    <Col md={2} lg={2}>
                      45555
                    </Col>

                    <Col md={2} lg={2}>
                      Date of Birth
                    </Col>
                    <Col md={2} lg={2}>
                      1990-02-28
                    </Col>
                    <Col md={2} lg={2}>
                      Sex
                    </Col>
                    <Col md={2} lg={2}>
                      Male
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} lg={2}>
                      S.S.
                    </Col>
                    <Col md={2} lg={2}>
                      000-00-0000
                    </Col>
                    <Col md={2} lg={2}>
                      License/ID
                    </Col>
                    <Col md={2} lg={2}>
                      158+987654
                    </Col>
                    <Col md={2} lg={2}>
                      Marital Status
                    </Col>
                    <Col md={2} lg={2}>
                      Married
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} lg={2}>
                      User Defined
                    </Col>
                    <Col md={2} lg={2}>
                      -
                    </Col>
                    <Col md={2} lg={2}>
                      Billing Note
                    </Col>
                    <Col md={2} lg={2}>
                      -
                    </Col>
                    <Col md={2} lg={2}>
                      Gender Identification
                    </Col>
                    <Col md={2} lg={2}>
                      Indentified as male
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="2">
                  <Row>
                    <Col md={2} lg={2}>
                      Title
                    </Col>
                    <Col md={2} lg={2}>
                      Mr.
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} lg={2}>
                      Full name
                    </Col>
                    <Col md={2} lg={2}>
                      Lucifer Morningstar
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} lg={2}>
                      Preffered name
                    </Col>
                    <Col md={2} lg={2}>
                      Lucifer
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} lg={2}>
                      External ID
                    </Col>
                    <Col md={2} lg={2}>
                      45555
                    </Col>

                    <Col md={2} lg={2}>
                      Date of Birth
                    </Col>
                    <Col md={2} lg={2}>
                      1990-02-28
                    </Col>
                    <Col md={2} lg={2}>
                      Sex
                    </Col>
                    <Col md={2} lg={2}>
                      Male
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} lg={2}>
                      S.S.
                    </Col>
                    <Col md={2} lg={2}>
                      000-00-0000
                    </Col>
                    <Col md={2} lg={2}>
                      License/ID
                    </Col>
                    <Col md={2} lg={2}>
                      158+987654
                    </Col>
                    <Col md={2} lg={2}>
                      Marital Status
                    </Col>
                    <Col md={2} lg={2}>
                      Married
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} lg={2}>
                      User Defined
                    </Col>
                    <Col md={2} lg={2}>
                      -
                    </Col>
                    <Col md={2} lg={2}>
                      Billing Note
                    </Col>
                    <Col md={2} lg={2}>
                      -
                    </Col>
                    <Col md={2} lg={2}>
                      Gender Identification
                    </Col>
                    <Col md={2} lg={2}>
                      Indentified as male
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="3">
                  <Row>
                    <Col md={2} lg={2}>
                      Title
                    </Col>
                    <Col md={2} lg={2}>
                      Mr.
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} lg={2}>
                      Full name
                    </Col>
                    <Col md={2} lg={2}>
                      Lucifer Morningstar
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} lg={2}>
                      Preffered name
                    </Col>
                    <Col md={2} lg={2}>
                      Lucifer
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} lg={2}>
                      External ID
                    </Col>
                    <Col md={2} lg={2}>
                      45555
                    </Col>

                    <Col md={2} lg={2}>
                      Date of Birth
                    </Col>
                    <Col md={2} lg={2}>
                      1990-02-28
                    </Col>
                    <Col md={2} lg={2}>
                      Sex
                    </Col>
                    <Col md={2} lg={2}>
                      Male
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} lg={2}>
                      S.S.
                    </Col>
                    <Col md={2} lg={2}>
                      000-00-0000
                    </Col>
                    <Col md={2} lg={2}>
                      License/ID
                    </Col>
                    <Col md={2} lg={2}>
                      158+987654
                    </Col>
                    <Col md={2} lg={2}>
                      Marital Status
                    </Col>
                    <Col md={2} lg={2}>
                      Married
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} lg={2}>
                      User Defined
                    </Col>
                    <Col md={2} lg={2}>
                      -
                    </Col>
                    <Col md={2} lg={2}>
                      Billing Note
                    </Col>
                    <Col md={2} lg={2}>
                      -
                    </Col>
                    <Col md={2} lg={2}>
                      Gender Identification
                    </Col>
                    <Col md={2} lg={2}>
                      Indentified as male
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="4">
                  <Row>
                    <Col md={2} lg={2}>
                      Title
                    </Col>
                    <Col md={2} lg={2}>
                      Mr.
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} lg={2}>
                      Full name
                    </Col>
                    <Col md={2} lg={2}>
                      Lucifer Morningstar
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} lg={2}>
                      Preffered name
                    </Col>
                    <Col md={2} lg={2}>
                      Lucifer
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} lg={2}>
                      External ID
                    </Col>
                    <Col md={2} lg={2}>
                      45555
                    </Col>

                    <Col md={2} lg={2}>
                      Date of Birth
                    </Col>
                    <Col md={2} lg={2}>
                      1990-02-28
                    </Col>
                    <Col md={2} lg={2}>
                      Sex
                    </Col>
                    <Col md={2} lg={2}>
                      Male
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} lg={2}>
                      S.S.
                    </Col>
                    <Col md={2} lg={2}>
                      000-00-0000
                    </Col>
                    <Col md={2} lg={2}>
                      License/ID
                    </Col>
                    <Col md={2} lg={2}>
                      158+987654
                    </Col>
                    <Col md={2} lg={2}>
                      Marital Status
                    </Col>
                    <Col md={2} lg={2}>
                      Married
                    </Col>
                  </Row>
                  <Row>
                    <Col md={2} lg={2}>
                      User Defined
                    </Col>
                    <Col md={2} lg={2}>
                      -
                    </Col>
                    <Col md={2} lg={2}>
                      Billing Note
                    </Col>
                    <Col md={2} lg={2}>
                      -
                    </Col>
                    <Col md={2} lg={2}>
                      Gender Identification
                    </Col>
                    <Col md={2} lg={2}>
                      Indentified as male
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={4} lg={4}>
          <Card className="mb-2">
            <CardBody>
              <Label className="fw-bold">Allergies</Label>
              <Button size="sm" className="float-end" color="link">
                <BsPencilFill
                  className="mb-2"
                  onClick={() => setAllergiesModal(!allergiesModal)}
                />
              </Button>
              <div className="divider mt-1" />
              {allergiesArray.map((options) => (
                <Row>
                  <Col md={6} lg={6}>
                    {options}
                  </Col>
                  <Col md={6} lg={6}>
                    <span className="float-end">
                      <BsFillTrashFill className="me-2" />
                    </span>
                  </Col>
                </Row>
              ))}
            </CardBody>
          </Card>
        </Col>
        <Col md={4} lg={4}>
          <Card className="mb-2">
            <CardBody>
              <Label className="fw-bold">Medical Problems</Label>
              <Button size="sm" className="float-end" color="link">
                <BsPencilFill
                  className="mb-2"
                  onClick={() => setDiagnosisModal(!diagnosisModal)}
                />
              </Button>
              <div className="divider mt-1" />
              {medicalProblemArray.map((options) => (
                <Row>
                  <Col md={6} lg={6}>
                    {options}
                  </Col>
                  <Col md={6} lg={6}>
                    <span className="float-end">
                      <BsFillTrashFill className="me-2" />
                    </span>
                  </Col>
                </Row>
              ))}
            </CardBody>
          </Card>
        </Col>
        <Col md={4} lg={4}>
          <Card className="mb-2">
            <CardBody>
              <Label className="fw-bold">Medications</Label>
              <Button size="sm" className="float-end" color="link">
                <BsPencilFill
                  className="mb-2"
                  onClick={() => setMedicationModal(!MedicationModal)}
                />
              </Button>
              <div className="divider mt-1" />
              {medicationArray.map((options) => (
                <Row>
                  <Col md={6} lg={6}>
                    {options}
                  </Col>
                  <Col md={6} lg={6}>
                    <span className="float-end">
                      <BsFillTrashFill className="me-2" />
                    </span>
                  </Col>
                </Row>
              ))}
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={8} lg={8}>
          <Card className="mb-2">
            <CardBody>
              <Label className="fw-bold">Prescriptions</Label>
              <Button size="sm" className="float-end" color="link">
                <BsPencilFill
                  className="mb-2"
                  onClick={() => setPrescriptionModal(!prescriptionModal)}
                />
              </Button>
              <div className="divider mt-1" />
              {prescriptionsArray.map((options) => (
                <Row>
                  <Col md={3} lg={3}>
                    {options}
                  </Col>
                  <Col md={3} lg={3}>
                    {"2 tablets"}
                  </Col>
                  <Col md={3} lg={3}>
                    {"Daily"}
                  </Col>
                  <Col md={3} lg={3}>
                    <span className="float-end">
                      <BsFillTrashFill className="me-2" />
                    </span>
                  </Col>
                </Row>
              ))}
            </CardBody>
          </Card>
        </Col>
        <Col md={4} lg={4}>
          <Card className="mb-2">
            <CardBody>
              <Label className="fw-bold">Immunizations</Label>
              <Button size="sm" className="float-end" color="link">
                <BsPencilFill
                  className="mb-2"
                  onClick={() => setImmunizationModal(!immunizationModal)}
                />
              </Button>
              <div className="divider mt-1" />
              {immunizationArray.map((options) => (
                <Row>
                  <Col md={9} lg={9}>
                    {options}
                  </Col>
                  <Col md={3} lg={3}>
                    <span className="float-end">
                      <BsFillTrashFill className="me-2" />
                    </span>
                  </Col>
                </Row>
              ))}
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={4} lg={4}>
          <Card className="mb-2">
            <CardBody>
              <Label className="fw-bold">Surgeries</Label>
              <Button size="sm" className="float-end" color="link">
                <BsPencilFill
                  className="mb-2"
                  onClick={() => setSurgeriesModal(!surgeriesModal)}
                />
              </Button>
              <div className="divider mt-1" />
              {surgeriesArray.map((options) => (
                <Row>
                  <Col md={6} lg={6}>
                    {options}
                  </Col>
                  <Col md={6} lg={6}>
                    <span className="float-end">
                      <BsFillTrashFill className="me-2" />
                    </span>
                  </Col>
                </Row>
              ))}
            </CardBody>
          </Card>
        </Col>
        <Col md={4} lg={4}>
          <Card className="mb-2">
            <CardBody>
              <Label className="fw-bold">Dental Issues</Label>
              <Button size="sm" className="float-end" color="link">
                <BsPencilFill
                  className="mb-2"
                  onClick={() => setDentalIssuesModal(!dentalIssuesModal)}
                />
              </Button>
              <div className="divider mt-1" />
              {dentalIssuesArray.map((options) => (
                <Row>
                  <Col md={6} lg={6}>
                    {options}
                  </Col>
                  <Col md={6} lg={6}>
                    <span className="float-end">
                      <BsFillTrashFill className="me-2" />
                    </span>
                  </Col>
                </Row>
              ))}
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="mb-2">
            <CardBody>
              <Label className="fw-bold">Progress Notes</Label>
              <div className="divider mt-1" />
              <Row>
                <Col md={3} lg={3}>
                  <FormGroup>
                    <Label className="fw-semi-bold">Note date</Label>
                    <DatePicker
                      className="form-control"
                      selected={scheduledDate}
                      onChange={(date) => {
                        setScheduledDate(date);
                      }}
                      dateFormat="MM/dd/yyyy"
                      placeholderText="Notes date"
                      name={"scheduleDate"}
                    />
                  </FormGroup>
                </Col>
                <Col md={9} lg={9}>
                  <FormGroup>
                    <Label className="fw-semi-bold">Note</Label>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"textarea"}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Button className="float-end" color="primary">
                Save
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Modal size="lg" isOpen={letterModal}>
        <ModalHeader toggle={() => setLetterModal(!letterModal)}>
          Letter
        </ModalHeader>
        <ModalBody>
          <Row>
            <Label className="fw-bold text-center">
              Generated letter regarding Specific cause
            </Label>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">From</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Lucifer Morningstar</option>
                  <option>John Donna</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Date</Label>
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
                <Label className="fw-semi-bold">Speciality</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>All</option>
                  <option>Specific</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Template</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>none</option>
                  <option>Template 1</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">To</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Richards, Fred</option>
                  <option>Newman, Sunny</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Print format</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>HTML</option>
                  <option>PDF</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={12} lg={12}>
              <FormGroup>
                <Label className="fw-semi-bold">Subject</Label>
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
          <ButtonGroup>
            <Button color="primary">Save as New</Button>
            <Button color="warning">Save changes</Button>
            <Button color="alternate">Generate letter</Button>
          </ButtonGroup>
        </ModalFooter>
      </Modal>
      <Modal size="lg" isOpen={MedicationModal}>
        <ModalHeader toggle={() => setMedicationModal(!MedicationModal)}>
          Add/Edit Medication
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col md={12} lg={12}>
              <Label className="fw-bold">Type : Medication</Label>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">
                  Search from list or type your own title
                </Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Title</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">Begin Date & Time</Label>
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
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">End Date & Time</Label>
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

            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">Medication usage</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Home/Community</option>
                  <option>Other</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">
                  Medication request intent
                </Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Order</option>
                  <option>Sale</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={8} lg={8}>
              <FormGroup>
                <Label className="fw-semi-bold">
                  Medication Dosage Instructions
                </Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"textarea"}
                />
              </FormGroup>
            </Col>
            <Col md={12} lg={12}>
              <FormGroup>
                <Label className="fw-semi-bold">Comments</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"textarea"}
                />
              </FormGroup>
            </Col>
            <Col md={9} lg={9}>
              <FormGroup>
                <Label className="fw-semi-bold">Coding</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"textarea"}
                />
              </FormGroup>
            </Col>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">Occurence</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>N/A</option>
                  <option>Unknown</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">Outcome</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Unassigned</option>
                  <option>Other 1</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">Classifiaction Type</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>N/A</option>
                  <option>Other</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Referred By</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Designation</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <ButtonGroup>
            <Button color="primary">Save</Button>
            <Button color="secondary">Cancel</Button>
          </ButtonGroup>
        </ModalFooter>
      </Modal>
      <Modal size="lg" isOpen={prescriptionModal}>
        <ModalHeader toggle={() => setPrescriptionModal(!prescriptionModal)}>
          Add/Edit Prescription
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col md={12} lg={12}>
              <FormGroup>
                <Label className="fw-semi-bold me-2">Currenlty Active</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"checkbox"}
                  className="mt-1"
                />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Starting date</Label>
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
                <Label className="fw-semi-bold">Provider</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Provider 1</option>
                  <option>Provider 2</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Drug</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Drug 1</option>
                  <option>Drug 2</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">Quantity</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"number"}
                />
              </FormGroup>
            </Col>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">Medicine Unit</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>

            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">Medicine usage</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>-</option>
                  <option>Other</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">Direction</Label>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={5} lg={5}>
              <FormGroup>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={1} lg={1}>
              <FormGroup>
                <Label className="fw-semi-bold text-center">in</Label>
              </FormGroup>
            </Col>
            <Col md={2} lg={2}>
              <FormGroup>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={2} lg={2}>
              <FormGroup>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={2} lg={2}>
              <FormGroup>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">Refills</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold"># of tablets</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={12} lg={12}>
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
        </ModalBody>
        <ModalFooter>
          <ButtonGroup>
            <Button color="danger">Clear</Button>
            <Button color="primary">Save</Button>
            <Button color="secondary">Quit</Button>
          </ButtonGroup>
        </ModalFooter>
      </Modal>
      <Modal size="lg" isOpen={surgeriesModal}>
        <ModalHeader toggle={() => setSurgeriesModal(!surgeriesModal)}>
          Add/Edit Surgeries
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col md={12} lg={12}>
              <Label className="fw-bold">Type : Surgery</Label>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">
                  Search from list or type your own title
                </Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Title</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Begin Date & Time</Label>
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
                <Label className="fw-semi-bold">End Date & Time</Label>
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
            <Col md={12} lg={12}>
              <FormGroup>
                <Label className="fw-semi-bold">Comments</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"textarea"}
                />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Active Issue Codes</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"textarea"}
                />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Coding</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"textarea"}
                />
              </FormGroup>
            </Col>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">Occurence</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>N/A</option>
                  <option>Unknown</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">Outcome</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Unassigned</option>
                  <option>Other 1</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">Classifiaction Type</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>N/A</option>
                  <option>Other</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Referred By</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Designation</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <ButtonGroup>
            <Button color="secondary">Clear</Button>
            <Button color="primary">Save</Button>
          </ButtonGroup>
        </ModalFooter>
      </Modal>
      <Modal size="lg" isOpen={dentalIssuesModal}>
        <ModalHeader toggle={() => setDentalIssuesModal(!dentalIssuesModal)}>
          Add/Edit Dental Issues
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col md={12} lg={12}>
              <Label className="fw-bold">Type : Dental</Label>
            </Col>
            <Col md={9} lg={9}>
              <FormGroup>
                <Label className="fw-semi-bold">
                  Search from list or type your own title
                </Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Begin Date & Time</Label>
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
                <Label className="fw-semi-bold">End Date & Time</Label>
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
            <Col md={12} lg={12}>
              <FormGroup>
                <Label className="fw-semi-bold">Comments</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"textarea"}
                />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Active Issue Codes</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"textarea"}
                />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Coding</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"textarea"}
                />
              </FormGroup>
            </Col>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">Occurence</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>N/A</option>
                  <option>Unknown</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">Outcome</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Unassigned</option>
                  <option>Other 1</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">Classifiaction Type</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>N/A</option>
                  <option>Other</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Referred By</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Designation</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <ButtonGroup>
            <Button color="secondary">Clear</Button>
            <Button color="primary">Save</Button>
          </ButtonGroup>
        </ModalFooter>
      </Modal>
      <Modal size="lg" isOpen={allergiesModal}>
        <ModalHeader toggle={() => setAllergiesModal(!allergiesModal)}>
          Add/Edit Dental Issues
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col md={12} lg={12}>
              <Label className="fw-bold">Type : Allergy</Label>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">
                  Search from list or type your own title
                </Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Title</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Begin Date & Time</Label>
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
                <Label className="fw-semi-bold">End Date & Time</Label>
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
                <Label className="fw-semi-bold">Reaction</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Severity</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={12} lg={12}>
              <FormGroup>
                <Label className="fw-semi-bold">Comments</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"textarea"}
                />
              </FormGroup>
            </Col>
            <Col md={9} lg={9}>
              <FormGroup>
                <Label className="fw-semi-bold">Coding</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"textarea"}
                />
              </FormGroup>
            </Col>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">Occurence</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>N/A</option>
                  <option>Unknown</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">Outcome</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Unassigned</option>
                  <option>Other 1</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">Classifiaction Type</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>N/A</option>
                  <option>Other</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">Verification Status</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Unconfirmed</option>
                  <option>Other</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">Referred By</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">Designation</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <ButtonGroup>
            <Button color="secondary">Clear</Button>
            <Button color="primary">Save</Button>
          </ButtonGroup>
        </ModalFooter>
      </Modal>
      <Modal size="md" isOpen={messagesModal}>
        <ModalHeader toggle={() => setMessagesModal(!messagesModal)}>
          Add/Edit Messages
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col md={12} lg={12}>
              <FormGroup>
                <Label className="fw-semi-bold">Type</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  {messageTypeArray.map((options) => (
                    <option>{options}</option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
            <Col md={12} lg={12}>
              <FormGroup>
                <Label className="fw-semi-bold">To</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Smith, Billy</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={12} lg={12}>
              <FormGroup>
                <Label className="fw-semi-bold">Comments</Label>
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
          <ButtonGroup>
            <Button color="secondary">Save as new message</Button>
            <Button color="primary">Append this message</Button>
          </ButtonGroup>
        </ModalFooter>
      </Modal>
      <Modal size="md" isOpen={cRemindersModal}>
        <ModalHeader toggle={() => setCRemindersModal(!cRemindersModal)}>
          Add/Edit Clinical Reminders
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col md={12} lg={12}>
              <FormGroup>
                <Label className="fw-bold">Assessment - Cancer Screening</Label>
              </FormGroup>
            </Col>
            <Col md={12} lg={12}>
              <FormGroup>
                <Label className="fw-semi-bold">Date/Time</Label>
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
            <Col md={12} lg={12}>
              <FormGroup>
                <Label className="fw-semi-bold">Completed</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Select</option>
                  <option>Yes</option>
                  <option>No</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={12} lg={12}>
              <FormGroup>
                <Label className="fw-semi-bold">Results/Details</Label>
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
          <Button color="secondary">Close</Button>
        </ModalFooter>
      </Modal>
      <Modal size="lg" isOpen={aoppointmentsModal}>
        <ModalHeader toggle={() => setAppointmentsModal(!aoppointmentsModal)}>
          Add/Edit Appointments
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Category</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Office Visit</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Title</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Facility</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Great Clinic</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Billing Facility</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Great Clinic</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={12} lg={12}>
              <FormGroup>
                <Label className="fw-semi-bold">Patient</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"text"}
                ></Input>
              </FormGroup>
            </Col>
            <Col md={12} lg={12}>
              <FormGroup>
                <Label className="fw-semi-bold">Provider</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"text"}
                ></Input>
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup className="mt-2">
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"radio"}
                ></Input>
                <Label className="fw-semi-bold ms-2">All day event</Label>
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
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
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"time"}
                  placeholder="time"
                ></Input>
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"number"}
                  placeholder="duration"
                ></Input>
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup className="mt-2">
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"checkbox"}
                ></Input>
                <Label className="fw-semi-bold ms-2">Repeat</Label>
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>every</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"select"}
                  placeholder=""
                >
                  <option>day</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"number"}
                  placeholder="until date"
                ></Input>
              </FormGroup>
            </Col>
            <Col md={3} lg={3}>
              <FormGroup className="mt-2">
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"checkbox"}
                ></Input>
                <Label className="fw-semi-bold ms-2"> Day of week</Label>
              </FormGroup>
            </Col>
            <Col md={9} lg={9}>
              <Row>
                {weekData.map((options) => (
                  <Col>
                    <FormGroup className="mt-2">
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
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Status</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>- None</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Room Number</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Room 404</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={12} lg={12}>
              <FormGroup>
                <Label className="fw-semi-bold">Comments</Label>
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
          <Button color="alternate">Create Duplicate</Button>
          <Button color="secondary">Find Avaialable</Button>
          <Button color="danger">Delete</Button>
          <Button color="secondary">Cancel</Button>
          <Button color="primary">Save</Button>
        </ModalFooter>
      </Modal>
      <Modal size="lg" isOpen={diagnosisModal}>
        <ModalHeader toggle={() => setDiagnosisModal(!diagnosisModal)}>
          Add/Edit medical problem
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col md={12} lg={12}>
              <Label className="fw-semi-bold">Type : Problem</Label>
              <Row>
                <Col md={6} lg={6}>
                  <FormGroup>
                    <Label className="fw-semi-bold">
                      Select from list or type your own in Title
                    </Label>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"text"}
                    />
                  </FormGroup>
                </Col>
                <Col md={6} lg={6}>
                  <FormGroup>
                    <Label className="fw-semi-bold">Title:</Label>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"text"}
                    />
                  </FormGroup>
                </Col>
                <Col md={6} lg={6}>
                  <FormGroup>
                    <Label className="fw-semi-bold">Begin Date and Time</Label>
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
                    <Label className="fw-semi-bold">End Date and Time</Label>
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
                <Col md={12} lg={12}>
                  <FormGroup>
                    <Label className="fw-semi-bold">Comment </Label>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"textarea"}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={9} lg={9}>
                  <FormGroup>
                    <Label className="fw-semi-bold">Coding </Label>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"textarea"}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={4} lg={4}>
                  <FormGroup>
                    <Label className="fw-semi-bold">Occurence</Label>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"select"}
                    >
                      <option>N/A</option>
                      <option>Unknown</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={4} lg={4}>
                  <FormGroup>
                    <Label className="fw-semi-bold">Outcome</Label>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"select"}
                    >
                      <option>Unassigned</option>
                      <option>Other 1</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={4} lg={4}>
                  <FormGroup>
                    <Label className="fw-semi-bold">Classifiaction Type</Label>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"select"}
                    >
                      <option>N/A</option>
                      <option>Other</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={4} lg={4}>
                  <FormGroup>
                    <Label className="fw-semi-bold">Verification Status</Label>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"select"}
                    >
                      <option>Unconfirmed</option>
                      <option>Other</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={4} lg={4}>
                  <FormGroup>
                    <Label className="fw-semi-bold">Referred By</Label>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"text"}
                    />
                  </FormGroup>
                </Col>
                <Col md={4} lg={4}>
                  <FormGroup>
                    <Label className="fw-semi-bold">Designation</Label>
                    <Input
                      id={"companyName"}
                      name={"companyName"}
                      type={"text"}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary">Cancel</Button>
          <Button color="primary">Save</Button>
        </ModalFooter>
      </Modal>
      <Modal size="lg" isOpen={immunizationModal}>
        <ModalHeader toggle={() => setImmunizationModal(!immunizationModal)}>
          Add/Edit Immunization
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Immunization (CVX Code)</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>

            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Date & Time Administered</Label>
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
                <Label className="fw-semi-bold">Amount Administered:</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">
                  Immunization Expiration Date
                </Label>
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
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">
                  Immunization Manufacturer{" "}
                </Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Immunization Lot Number </Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">
                  Name of Immunization Administrator{" "}
                </Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Or Choose </Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">
                  Date Immunization Information Statement Given
                </Label>
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
                <Label className="fw-semi-bold">Date of VIS Statement</Label>
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
                <Label className="fw-semi-bold">Route</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Adminsitration Site </Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12} lg={12}>
              <FormGroup>
                <Label className="fw-semi-bold">Notes </Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"textarea"}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">Information Source</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>N/A</option>
                  <option>Other</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">Completion Status</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>N/A</option>
                  <option>Other</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">Substance Refusal Reason</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>N/A</option>
                  <option>Other</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">Reason Code</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>N/A</option>
                  <option>Other</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">
                  Immunization Ordering Provider
                </Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>N/A</option>
                  <option>Other</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">Observation Criteria</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Unassigned</option>
                  <option>Vaccine funding program eligibility category</option>
                  <option>Vaccine type</option>
                  <option>Disease with presumed immunity</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary">Cancel</Button>
          <Button color="primary">Save</Button>
        </ModalFooter>
      </Modal>
      <Modal size="md" isOpen={documentModal}>
        <ModalHeader toggle={() => setDocumentModal(!documentModal)}>
          Add/Edit Document
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col md={12} lg={12}>
              <FormGroup>
                <Label className="fw-semi-bold">Category</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Lab report</option>
                  <option>Medical Report</option>
                  <option>Imaging</option>
                  <option>Other</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={12} lg={12}>
              <FormGroup>
                <Label className="fw-semi-bold">Template</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Help</option>
                  <option>Hippa Document Oemr</option>
                  <option>Insurence Info</option>
                  <option>Medical History</option>
                  <option>Privacy Document</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={12} lg={12}>
              <FormGroup>
                <Label className="fw-semi-bold">Source File Path</Label>
                <Input id={"companyName"} name={"companyName"} type={"file"} />
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="primary">Save</Button>
          <Button color="secondary">Close</Button>
        </ModalFooter>
      </Modal>
      <Modal size="lg" isOpen={referralModal}>
        <ModalHeader toggle={() => setReferralModal(!referralModal)}>
          Add/Edit Referral
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col md={4} lg={4}>
              <FormGroup>
                <Label className="fw-semi-bold">Transaction Type</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Billing</option>
                  <option>Legal</option>
                  <option>Patient Request</option>
                  <option>Referral</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={1} lg={1}></Col>
            <Col
              md={6}
              lg={6}
              style={{ border: "solid 1px", borderRadius: "5px" }}
              className="mb-3"
            >
              <div className="mt-1">
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"checkbox"}
                  checked
                />{" "}
                <Label className="fw-semi-bold">Send Summary of Care?</Label>
              </div>
              <div>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"checkbox"}
                />{" "}
                <Label className="fw-semi-bold">
                  Send Summary of Care Electronically
                </Label>
              </div>
              <div>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"checkbox"}
                />{" "}
                <Label className="fw-semi-bold">
                  Confirmed Recipient Received Summary of Care
                </Label>
              </div>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">
                  Referral Date<span style={{ color: "red" }}>* </span>
                </Label>
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
                <Label className="fw-semi-bold">
                  Refer By<span style={{ color: "red" }}>* </span>
                </Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Donna Lee</option>
                  <option>Harry Johnson</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">External Referral</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Unassigned</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">
                  Refer To<span style={{ color: "red" }}>* </span>
                </Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Lee, Donna</option>
                  <option>Johnson, Harry</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">
                  Reason<span style={{ color: "red" }}>* </span>
                </Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"textarea"}
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Referral Diagnosis</Label>
                <Input id={"companyName"} name={"companyName"} type={"type"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Risk Level</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                  <option>Very High</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Include Vitals</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Yes</option>
                  <option>No</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Requested Service</Label>
                <Input id={"companyName"} name={"companyName"} type={"text"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Patient Billing Facility</Label>
                <Input id={"companyName"} name={"companyName"} type={"select"}>
                  <option>Great Clinic</option>
                  <option>Facility 2</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="primary">Save</Button>
          <Button color="secondary">Close</Button>
        </ModalFooter>
      </Modal>
      <Modal size="lg" isOpen={counterReferralModal}>
        <ModalHeader
          toggle={() => setCounterReferralModal(!counterReferralModal)}
        >
          Counter-Referral
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Reply Date</Label>
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
                <Label className="fw-semi-bold">Reply From</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"text"}
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Presumed Diagnosis</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"text"}
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Final Diagnosis</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"text"}
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Documents</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"text"}
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Findings</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"textarea"}
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Services Provider</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"textarea"}
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Recommendations</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"textarea"}
                ></Input>
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Prescriptions/Referrals</Label>
                <Input
                  id={"companyName"}
                  name={"companyName"}
                  type={"textarea"}
                ></Input>
              </FormGroup>
            </Col>
          </Row>
        </ModalBody>
        <ModalFooter>
          <Button color="primary">Save</Button>
          <Button color="secondary">Close</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}
