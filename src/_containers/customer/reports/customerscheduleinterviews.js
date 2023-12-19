import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Input,
  Col,
  Row,
  FormGroup,
  InputGroup,
  Button,
  Card,
  CardBody,
  CardHeader,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarAlt,
  faSearch,
  faFileExcel,
} from "@fortawesome/free-solid-svg-icons";

import PageTitle from "../../../_components/common/pagetitle";
import titlelogo from "../../../assets/utils/images/candidate.svg";

import {
  getCustReportScheduleIVList,
  getScheduledCandidatesForCustomerDropdown,
  getJobDropdown,
  getCustReportJobDetail,
  getCustReportSchdIntvDetail,
} from "./customerreport.slice";
import { useParams } from "react-router-dom";

import DataTable from "react-data-table-component";
import moment from "moment";
import Loader from "react-loaders";
import { exportToExcel } from "react-json-to-excel";
import { NoDataFound } from "_components/common/nodatafound";
import { CustJobDetailModal } from "_components/modal/custjobdetailmodal";
import { getProfileActions } from "_store";
import { BuildCVModal } from "_components/modal/buildcvmodal";
import { InterViewDetailModal } from "_components/modal/interviewdetailmodal";
import "./customerreport.scss";

export function CustomerReportScheduledInterviews() {
  const dispatch = useDispatch();
  const { id } = useParams();
  let [filter, setFilter] = useState({});
  let [startDate, setStartDate] = useState();
  let [endDate, setEndDate] = useState();
  let [jobId, setJobId] = useState();
  let [candidateId, setCandidateId] = useState();
  const [excelData, setExcelData] = useState([]);
  const [showJDModal, setShowJDModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showIDModal, setShowIDModal] = useState(false);
  const schdInterviewList = useSelector(
    (state) => state?.customerReportReducer?.schdInterviewList
  );
  const loading = useSelector((state) => state?.customerReportReducer?.loading);
  const jobDetail = useSelector(
    (state) => state?.customerReportReducer?.jobDetail
  );
  const scheduleInterviewDetail = useSelector(
    (state) => state?.customerReportReducer?.scheduleInterviewDetail
  );

  const jobDropDownList = useSelector(
    (state) => state?.customerReportReducer?.jobDropDownList
  );
  const candidateDropDownList = useSelector(
    (state) => state?.customerReportReducer?.candidateDropDownList
  );
  useEffect(() => {
    let userId = Number(localStorage.getItem("userId"));
    onGetCustReportScheduleIVList({});
    dispatch(getScheduledCandidatesForCustomerDropdown(userId));
    dispatch(getJobDropdown());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (schdInterviewList?.length > 0) {
      let filteredData = schdInterviewList.map((data) => {
        return {
          "Job Code": data.jobid,
          Title: data.jobtitle,
          Status: data.jobstatus,
          "Candidate Name": data.candidatename,
          "Scheduled date": data.scheduledate
            ? moment(data.scheduledate).format("MM/DD/YYYY")
            : "",
          Interviewers: data.intervieweremailids,
          "Meeting Status": data.meetingstatus,
        };
      });
      setExcelData([
        {
          sheetName: "ScheduleInterviews",
          details: filteredData,
        },
      ]);
    }
  }, [schdInterviewList]);

  const onGetCustReportScheduleIVList = (filter) => {
    let data = {
      ...filter,
      reportId: id,
    };
    dispatch(getCustReportScheduleIVList(data));
  };

  const handleChange = (name, value) => {
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  const handleDateChange = (name, value) => {
    setFilter({
      ...filter,
      [name]: moment(value).format("YYYY-MM-DD"),
    });
  };

  const onSubmitClear = () => {
    setFilter({});
    setStartDate(null);
    setEndDate(null);
    setCandidateId("");
    setJobId("");
    onGetCustReportScheduleIVList({});
  };

  const onSubmitHandler = () => {
    onGetCustReportScheduleIVList(filter);
  };

  const openJobDetails = async (jobId) => {
    let res = await dispatch(getCustReportJobDetail(jobId));

    if (res?.payload?.statusCode === 200) {
      setShowJDModal(true);
    }
  };

  const onCandidateClick = async (candidateId) => {
    const response = await dispatch(
      getProfileActions.getCandidate(candidateId)
    );
    if (response?.payload) {
      setShowProfileModal(true);
    }
  };

  const onInterviewDetailClick = async (interviewdetailid) => {
    const response = await dispatch(
      getCustReportSchdIntvDetail(interviewdetailid)
    );
    if (response?.payload) {
      setShowIDModal(true);
    }
  };

  const columns = [
    {
      name: <span className="table-title">Job Code</span>,
      cell: (row) => (
        <span className="table-cell" title={row.jobid}>
          {row.jobid}
        </span>
      ),
      sortable: true,
      selector: (row) => row.jobid,
      minWidth: "150px",
    },
    {
      name: <span className="table-title">Title</span>,
      cell: (row) => (
        <span className="table-cell" title={row.jobtitle}>
          <Button
            className="no-padding"
            color="link"
            onClick={() => openJobDetails(row.jobid)}
          >
            {row.jobtitle}
          </Button>
        </span>
      ),
      sortable: true,
      selector: (row) => row.jobtitle,
      minWidth: "300px",
    },
    {
      name: <span className="table-title">Status</span>,
      cell: (row) => (
        <span className="table-cell" title={row.jobstatus}>
          {row.jobstatus}
        </span>
      ),
      sortable: true,
      selector: (row) => row.jobstatus,
      minWidth: "150px",
    },
    {
      name: <span className="table-title">Candidate Name</span>,
      cell: (row) => (
        <span className="table-cell" title={row.candidatename}>
          <Button
            color="link"
            onClick={() => onCandidateClick(row.candidateid)}
          >
            {row.candidatename}
          </Button>
        </span>
      ),
      sortable: true,
      selector: (row) => row.candidatename,
      minWidth: "200px",
    },
    {
      name: <span className="table-title">Scheduled date</span>,
      cell: (row) => (
        <span
          className="table-cell"
          title={
            row.scheduledate
              ? moment(row.scheduledate).format("MM/DD/YYYY")
              : ""
          }
        >
          <Button
            color="link"
            onClick={() => onInterviewDetailClick(row.scheduleinterviewid)}
          >
            {row.scheduledate
              ? moment(row.scheduledate).format("MM/DD/YYYY")
              : ""}
          </Button>
        </span>
      ),
      sortable: true,
      selector: (row) => row.scheduledate,
      minWidth: "200px",
    },
    {
      name: <span className="table-title">Interviewers</span>,
      cell: (row) => (
        <span className="table-cell" title={row.intervieweremailids}>
          {row.intervieweremailids}
        </span>
      ),
      sortable: true,
      selector: (row) => row.intervieweremailids,
      minWidth: "350px",
    },
    {
      name: <span className="table-title">Meeting Status</span>,
      cell: (row) => (
        <span className="table-cell" title={row.meetingstatus}>
          {row.meetingstatus}
        </span>
      ),
      sortable: true,
      selector: (row) => row.meetingstatus,
      minWidth: "150px",
    },
  ];

  return (
    <>
      <PageTitle
        heading={"Customer Scheduled Interview Report"}
        icon={titlelogo}
      />
      <Row className="cust-report-job-cont">
        <Col md="12" lg="12" xl="12">
          <Card className="mb-3">
            <CardHeader className="card-header-tab">
              <div className="card-header-title font-size-lg text-capitalize fw-normal">
                Filter by
              </div>
              <div className="btn-actions-pane-right actions-icon-btn">
                <UncontrolledButtonDropdown>
                  <DropdownToggle
                    className="btn-icon btn-icon-only"
                    color="link"
                  >
                    <i className="pe-7s-menu btn-icon-wrapper" />
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-shadow dropdown-menu-hover-link">
                    <DropdownItem header>Download Report</DropdownItem>
                    <DropdownItem
                      onClick={() =>
                        exportToExcel(
                          excelData,
                          "customerScheduledInterviewReport",
                          true
                        )
                      }
                    >
                      <FontAwesomeIcon className="pe-2" icon={faFileExcel} />
                      <span>Excel</span>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
              </div>
            </CardHeader>
            <CardBody>
              <Row>
                <Col lg="2" md="4" sm="12" sx="12">
                  <FormGroup>
                    {/* <Label for="candidateid">Candidate Id</Label> */}
                    {/* <Input
                      name="candidateid"
                      id="candidateid"
                      placeholder="Candidate Id"
                      value={candidateId}
                      onChange={(e) => {
                        handleChange("candidateid", e.target.value);
                        setCandidateId(e.target.value);
                      }}
                    /> */}
                    <Input
                      type="select"
                      value={candidateId}
                      name="candidateid"
                      id="candidateid"
                      placeholder="Candidate Id"
                      onChange={(e) => {
                        handleChange("candidateid", e.target.value);
                        setCandidateId(e.target.value);
                      }}
                    >
                      <option value={""}>Select a Candidate</option>
                      {candidateDropDownList?.length > 0 ? (
                        candidateDropDownList.map((data) => (
                          <option
                            value={data.id ? data.id : data.candidateid}
                            key={data.id ? data.id : data.candidateid}
                          >
                            {data.name
                              ? data.name
                              : data.firstname + " " + data.lastname}
                          </option>
                        ))
                      ) : (
                        <></>
                      )}
                    </Input>
                  </FormGroup>
                </Col>
                <Col lg="2" md="4" sm="12" sx="12">
                  <FormGroup>
                    {/* <Label for="jobid">Job Id</Label> */}
                    {/* <Input
                      name="jobid"
                      id="jobid"
                      placeholder="Job Id"
                      value={jobId}
                      onChange={(e) => {
                        handleChange("jobid", e.target.value);
                        setJobId(e.target.value);
                      }}
                    /> */}
                    <Input
                      type="select"
                      value={jobId}
                      name="jobid"
                      id="jobid"
                      placeholder="Job Id"
                      onChange={(e) => {
                        handleChange("jobid", e.target.value);
                        setJobId(e.target.value);
                      }}
                    >
                      <option value={""}>Select a Job</option>
                      {jobDropDownList?.length > 0 ? (
                        jobDropDownList.map((data) => (
                          <option value={data.jobid} key={data.jobid}>
                            {data.jobtitle}
                          </option>
                        ))
                      ) : (
                        <></>
                      )}
                    </Input>
                  </FormGroup>
                </Col>
                <Col lg="2" md="4" sm="12" sx="12">
                  <FormGroup>
                    <InputGroup>
                      <div className="input-group-text">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                      </div>
                      <DatePicker
                        name="startDate"
                        id="startDate"
                        placeholderText="MM/DD/YYYY"
                        className="form-control"
                        selected={startDate}
                        maxDate={endDate}
                        showMonthDropdown
                        showYearDropdown
                        onChange={(date) => {
                          handleDateChange("startDate", date);
                          setStartDate(date);
                        }}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col lg="2" md="4" sm="12" sx="12">
                  <FormGroup>
                    <InputGroup>
                      <div className="input-group-text">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                      </div>
                      <DatePicker
                        name="endDate"
                        id="endDate"
                        placeholderText="MM/DD/YYYY"
                        className="form-control"
                        selected={endDate}
                        minDate={startDate}
                        showMonthDropdown
                        showYearDropdown
                        onChange={(date) => {
                          handleDateChange("endDate", date);
                          setEndDate(date);
                        }}
                      />
                    </InputGroup>
                  </FormGroup>
                </Col>
                <Col lg="3" md="4" sm="12" sx="12">
                  <Button
                    style={{ background: "rgb(47 71 155)" }}
                    className="me-4"
                    color="primary"
                    type="button"
                    onClick={() => onSubmitHandler()}
                  >
                    <FontAwesomeIcon icon={faSearch} /> Search
                  </Button>
                  <Button
                    // style={{ background: "rgb(47 71 155)" }}
                    color="link"
                    type="button"
                    onClick={() => onSubmitClear()}
                  >
                    Clear
                  </Button>
                </Col>
              </Row>
              <Row className="mt-1">
                {loading ? (
                  <>
                    <Loader
                      type="line-scale-pulse-out-rapid"
                      className="d-flex justify-content-center"
                    />
                  </>
                ) : (
                  <>
                    {schdInterviewList.length > 0 ? (
                      <DataTable
                        columns={columns}
                        data={schdInterviewList}
                        fixedHeader
                        pagination
                        className="cust-rep-list-view"
                      />
                    ) : (
                      <Row className="center-align ">
                        <NoDataFound></NoDataFound>
                      </Row>
                    )}
                  </>
                )}
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <>
        {" "}
        {showJDModal && jobDetail?.length > 0 ? (
          <CustJobDetailModal
            isOpen={showJDModal}
            data={jobDetail}
            onClose={() => setShowJDModal(false)}
            isAdmin={true}
          />
        ) : (
          <></>
        )}
      </>
      <>
        {showProfileModal ? (
          <>
            <BuildCVModal
              isOpen={showProfileModal}
              onClose={() => setShowProfileModal(false)}
            />
          </>
        ) : (
          <></>
        )}
      </>
      <>
        {showIDModal && scheduleInterviewDetail.length > 0 ? (
          <>
            <InterViewDetailModal
              data={scheduleInterviewDetail[0]}
              isOpen={showIDModal}
              onClose={() => {
                setShowIDModal(false);
              }}
              isAdmin={true}
            ></InterViewDetailModal>
          </>
        ) : (
          <></>
        )}
      </>
    </>
  );
}
