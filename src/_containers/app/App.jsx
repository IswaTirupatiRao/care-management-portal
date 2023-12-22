import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { history } from "_helpers";
import { PrivateRoute } from "_components";
import { Login } from "_containers/login/Login";
import { Registration } from "_containers/registration/Registration";
import { CustomerRegistration } from "_containers/registration/customerRegistration";
import { RegistrationSuccess } from "_containers/registration/RegistrationSuccess";
import { AppHeader } from "_components/_layout/AppHeader";
import { AppSidebar } from "_components/_layout/AppSidebar";
import { AppFooter } from "_components/_layout/AppFooter";
import "./app.scss";
import { ForgotPassword } from "_containers/forgotpassword/forgotPassword";
import { ForgotPasswordSuccess } from "_containers/forgotpassword/forgotPasswordSuccess";
import { CandidateProfile } from "_containers/candidate/candidateProfile";
import { CandidateSchedules } from "_containers/candidate/calendar/candidateSchedules";
import { messaging } from "../../firebase/index";
import { ToastContainer, toast } from "react-toastify";
import { Row } from "reactstrap";
import { candidateDashboardActions } from "_store";
import { useDispatch } from "react-redux";
import { Faciliy, Master } from "_containers/careManager/master/master";
import { SearchPatient } from "_containers/careManager/searchPatient";
import { PatientDemographic } from "_containers/careManager/patientDemographics";
import { PatientFamilyHistory } from "_containers/careManager/patientFamilyHistory";

export function App() {
  const authUser = useSelector((state) => state.auth.token);
  const userroleid = useSelector((state) => state.auth.userroleid);
  const [hideSidebar, setHideSidebar] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    if (authUser) {
      updatePushNotifications();
      messaging.onMessage((payload) => {
        toast(
          <Row>
            <p>
              <b>{payload.notification.title}</b>
            </p>
            <p>{payload.notification.body}</p>
          </Row>,
          {
            position: "bottom-right",
            autoClose: 10000,
          }
        );
        updatePushNotifications();
      });
    }
  }, [authUser]);

  const updatePushNotifications = () => {
    dispatch(candidateDashboardActions.getAlerts());
  };
  // init custom history object to allow navigation from
  // anywhere in the react app (inside or outside components)
  history.navigate = useNavigate();
  const location = useLocation();
  history.location = useLocation();
  useEffect(() => {
    if (
      location.pathname !== "" &&
      (location.pathname.indexOf("job-detail") !== -1 ||
        location.pathname.indexOf("video-screen") !== -1)
    ) {
      setHideSidebar(true);
    } else {
      setHideSidebar(false);
    }
  }, [location]);
  const renderRoutes = (userroleid) => {
      return (
        <>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <CandidateProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/calendar"
            element={
              <PrivateRoute>
                <CandidateSchedules title={"Calendar"} />
              </PrivateRoute>
            }
          />
          <Route
            path="/master"
            element={
              <PrivateRoute>
                <Master />
              </PrivateRoute>
            }
          />
          <Route
            path="/search_patients"
            element={
              <PrivateRoute>
                <SearchPatient />
              </PrivateRoute>
            }
          />
          <Route
            path="/demographics"
            element={
              <PrivateRoute>
                <PatientDemographic />
              </PrivateRoute>
            }
          />
          <Route
            path="/patient_and_family_history"
            element={
              <PrivateRoute>
                <PatientFamilyHistory />
              </PrivateRoute>
            }
          />
        </>
      );
  };

  const onOpenSidebar = () => {
    setIsSidebarOpen(true);
  };

  const onCloseSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      {authUser && (
        <AppHeader
          isSidebarOpen={isSidebarOpen}
          onOpenSidebar={() => onOpenSidebar()}
          onCloseSidebar={() => onCloseSidebar()}
        />
      )}
      {!authUser && hideSidebar && (
        <AppHeader
          unAuth={true}
          isSidebarOpen={isSidebarOpen}
          onOpenSidebar={() => onOpenSidebar()}
          onCloseSidebar={() => onCloseSidebar()}
        />
      )}
      <div className={authUser ? `app-main` : ""}>
        {authUser && !hideSidebar && (
          <AppSidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
        )}
        <div className={authUser ? `app-main__outer` : ""}>
          <div className={"app-main__inner "}>
            <ToastContainer />
            <Routes forceRefresh={true}>
              {renderRoutes(userroleid)}
              <Route path="/login" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
              <Route
                path="/customer-registration"
                element={<CustomerRegistration />}
              />
              <Route
                path="/registration-success"
                element={<RegistrationSuccess />}
              />
              <Route
                path="/forgot-password-success"
                element={<ForgotPasswordSuccess />}
              />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </div>
          {authUser && <AppFooter />}
          {!authUser && hideSidebar && <AppFooter />}
        </div>
      </div>
    </>
  );
}
