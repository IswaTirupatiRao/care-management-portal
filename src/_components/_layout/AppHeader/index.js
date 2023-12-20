import React from "react";
import cx from "classnames";
import CSSTransitionGroup from "react-transition-group/TransitionGroup";
import { UserBox } from "./Components/UserBox";
import logo from "../../../assets/utils/images/care.png";
import smlogo from "../../../assets/utils/sidebarimages/icon.png";
import { useSelector } from "react-redux";
import "./appheader.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Row, Col } from "reactstrap";

export function AppHeader({
  headerBackgroundColor = "white",
  enableMobileMenuSmall = true,
  enableHeaderShadow = true,
  unAuth = false,
  isSidebarOpen = true,
  onCloseSidebar,
  onOpenSidebar,
}) {
  const userroleid = useSelector((state) => state.auth.userroleid);
  return (
    <>
      <CSSTransitionGroup
        component="div"
        className={cx("app-header", headerBackgroundColor, {
          "header-shadow": enableHeaderShadow,
        })}
        transitionname="HeaderAnimation"
      >
        <div
          className={cx("app-header__content", {
            "header-mobile-open": enableMobileMenuSmall,
          })}
        >
          <div className="app-header-left">
            <Row>
              <Col className="no-padding">
                {isSidebarOpen ? (
                  <Link to="/">
                    <img src={logo} className="header-app-logo" alt="logo" />
                  </Link>
                ) : (
                  <></>
                )}
              </Col>
              <Col style={{ lineHeight: "50px" }}>
                {unAuth ? (
                  <></>
                ) : (
                  <>
                    {isSidebarOpen ? (
                      <FontAwesomeIcon
                        style={{ fontSize: "24px", marginTop: "15px" }}
                        icon={faBars}
                        onClick={() => onCloseSidebar()}
                      />
                    ) : (
                      <img
                        src={smlogo}
                        alt="Open side Menu"
                        width={"40px"}
                        height={"40px"}
                        onClick={() => onOpenSidebar()}
                      />
                    )}
                  </>
                )}
              </Col>
            </Row>
          </div>
          {!unAuth ? (
            <>
              <div className="user-title">
                <h4>
                  {userroleid === 1
                    ? "Admin"
                    : userroleid === 2
                    ? "Physician"
                    : "Care Manager"}
                </h4>
              </div>
              <div className="app-header-right">
                <UserBox />
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </CSSTransitionGroup>
    </>
  );
}
