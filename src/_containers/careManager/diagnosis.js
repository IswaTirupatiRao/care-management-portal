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

export function Diagnosis() {
  const [facilityModal, setDignosisModal] = useState(false);

  return (
    <>
      <Row>
        <Col>
          <Card className="mt-2">
            <CardHeader className="card-title-text text-capitalize">
              <Row><Col>HTN</Col>
              <Row><Col>CHronic Renal INsuficiency</Col></Row>
              <Row><Col>Diabetes</Col></Row></Row>
              <div className="float-end me-2 ms-auto">
                <Button
                  className="link-text"
                  color="primary"
                  onClick={() => setDignosisModal(!facilityModal)}
                >
                  Add
                </Button>
              </div>
            </CardHeader>
            <CardBody>
              
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Modal size="lg" isOpen={facilityModal}>
        <ModalHeader toggle={() => setDignosisModal(!facilityModal)}>
          Dignosis
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
              <Label className="fw-semi-bold">Problem</Label>
              <div className="divider mt-1" />
              <Row>
              <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Select from list or type your own in Title</Label>
                <Input id={"companyName"} name={"companyName"} type={"email"} />
              </FormGroup>
               </Col>
               <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Title:</Label>
                <Input id={"companyName"} name={"companyName"} type={"email"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">BeginDate and Time</Label>
                <Input id={"companyName"} name={"companyName"} type={"email"} />
              </FormGroup>
            </Col>
            <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">End Date and Time</Label>
                <Input id={"companyName"} name={"companyName"} type={"email"} />
              </FormGroup>
            </Col>

              </Row>
              <Row>
                <Col md={12} lg={12}>
                <FormGroup>
                  <Label className="fw-semi-bold">Comment :-</Label>
                  <Input
                    id={"companyName"}
                    name={"companyName"}
                    type={"textarea"}
                  />
                </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={12} lg={12}>
                <FormGroup>
                  <Label className="fw-semi-bold">Coding :-</Label>
                  <Input
                    id={"companyName"}
                    name={"companyName"}
                    type={"textarea"}
                  />
                </FormGroup>
                </Col>
              </Row>
              <Row>
              <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Occurrence:</Label>
                <Input id={"companyName"} name={"companyName"} type={"email"} />
              </FormGroup>
               </Col>
               <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Outcome:</Label>
                <Input id={"companyName"} name={"companyName"} type={"email"} />
              </FormGroup>
               </Col>
               <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Verification Status:</Label>
                <Input id={"companyName"} name={"companyName"} type={"email"} />
              </FormGroup>
               </Col>
               <Col md={6} lg={6}>
              <FormGroup>
                <Label className="fw-semi-bold">Referred by:</Label>
                <Input id={"companyName"} name={"companyName"} type={"email"} />
              </FormGroup>
               </Col>
              </Row>
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
