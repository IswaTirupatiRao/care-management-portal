import React from "react";
import {
  Row,
  Col,
  Card,
  Container,
  CardBody,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment-timezone";

export function CareCalender() {
  const views = {
    month: true,
    week: true,
    day: true,
    agenda: true, // Add or modify views as needed
  };
  const messages = {
    agenda: "Schedule", // Change the label for Agenda to Schedule
  };
  const localizer = momentLocalizer(moment);
  return (
    <>
      <Container fluid className="card-schedule-interview candidate-calendar">
        <Row>
          <Col md="12">
            <Card>
              <CardBody className="scheduled-calender">
                <Row>
                  <Col md={4} lg={4}>
                    <FormGroup>
                      <Label>Providers</Label>
                      <Input
                        id={"companyName"}
                        name={"companyName"}
                        type={"select"}
                      >
                        <option>Select</option>
                        <option>Great Clinic</option>
                        <option>Provider 2</option>
                        <option>Provider 3</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={4} lg={4}>
                    <FormGroup>
                      <Label>Patients</Label>
                      <Input
                        id={"companyName"}
                        name={"companyName"}
                        type={"select"}
                      >
                        <option>Select</option>
                        <option>Erin Adams</option>
                        <option>Mike Adams</option>
                        <option>Lucifer Morningstar</option>
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>

                <Calendar
                  localizer={localizer}
                  events={[
                    {
                      id: 1,
                      title: "Lucifer Morningstar - Followup",
                      start: new Date(2023, 12, 7),
                      end: new Date(2023, 12, 7),
                    },
                    {
                      id: 2,
                      title: "Lucifer Morningstar - Health Checkup",
                      start: new Date(2023, 11, 27),
                      end: new Date(2023, 11, 27),
                    },
                  ]}
                  views={views}
                  messages={messages}
                  startAccessor="start"
                  endAccessor="end"
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
