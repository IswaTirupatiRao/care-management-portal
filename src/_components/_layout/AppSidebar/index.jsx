/* eslint-disable react/display-name, jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";
import { Navigation } from "react-minimal-side-navigation";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./appsidebar.scss";
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

import sideBarIcons from "../../../assets/utils/sidebarimages";

export const AppSidebar = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [menuItems, setMenuItems] = useState([]);
  let menuDtoList = [
    // {"menuid":10,"menuname":"Profile","userroleid":3,"rolename":"Candidate","menuicon":"profile","modulename":"","path":"/","isview":null,"isadd":true,"isedit":true,"isdelete":true,"subMenuList":[]},
    {"menuid":11,"menuname":"Patient Profile","userroleid":3,"rolename":"Candidate","menuicon":"profile","modulename":"","path":"/","isview":null,"isadd":true,"isedit":true,"isdelete":true,"subMenuList":[]},
    {"menuid":12,"menuname":"Admin","userroleid":3,"rolename":"Candidate","menuicon":"profile","modulename":"","path":"/admin","isview":null,"isadd":true,"isedit":true,"isdelete":true,"subMenuList":[]},
    {"menuid":13,"menuname":"Master","userroleid":3,"rolename":"Candidate","menuicon":"profile","modulename":"","path":"/master","isview":null,"isadd":true,"isedit":true,"isdelete":true,"subMenuList":[
      // {"submenumenuid":14,"submenuname":"Letters","userroleid":3,"rolename":"Candidate","menuicon":"profile","modulename":"","path":"/letters","isview":null,"isadd":true,"isedit":true,"isdelete":true,"subMenuList":[]},
      // {"submenumenuid":19,"submenuname":"Medication ","userroleid":3,"rolename":"Candidate","menuicon":"profile","modulename":"","path":"/medication","isview":null,"isadd":true,"isedit":true,"isdelete":true,"subMenuList":[]},
      // {"submenumenuid":21,"submenuname":"Labs ","userroleid":3,"rolename":"Candidate","menuicon":"profile","modulename":"","path":"/labs","isview":null,"isadd":true,"isedit":true,"isdelete":true,"subMenuList":[]},
      // {"submenumenuid":22,"submenuname":"Immunizations","userroleid":3,"rolename":"Candidate","menuicon":"profile","modulename":"","path":"/immunizations","isview":null,"isadd":true,"isedit":true,"isdelete":true,"subMenuList":[]},
      // {"submenumenuid":23,"submenuname":"Vitals","userroleid":3,"rolename":"Candidate","menuicon":"profile","modulename":"","path":"/vitals","isview":null,"isadd":true,"isedit":true,"isdelete":true,"subMenuList":[]},
      // {"submenumenuid":24,"submenuname":"Surgeries","userroleid":3,"rolename":"Candidate","menuicon":"profile","modulename":"","path":"/surgeries","isview":null,"isadd":true,"isedit":true,"isdelete":true,"subMenuList":[]},
      // {"submenumenuid":25,"submenuname":"Dental Issues","userroleid":3,"rolename":"Candidate","menuicon":"profile","modulename":"","path":"/dental_issues","isview":null,"isadd":true,"isedit":true,"isdelete":true,"subMenuList":[]},
      // {"submenumenuid":26,"submenuname":"Allergies","userroleid":3,"rolename":"Candidate","menuicon":"profile","modulename":"","path":"/allergies","isview":null,"isadd":true,"isedit":true,"isdelete":true,"subMenuList":[]},
      // {"submenumenuid":34,"submenuname":"Diagnosis","userroleid":3,"rolename":"Candidate","menuicon":"profile","modulename":"","path":"/diagnosis","isview":null,"isadd":true,"isedit":true,"isdelete":true,"subMenuList":[]},
    ]},
    {"menuid":15,"menuname":"Search Patients ","userroleid":3,"rolename":"Candidate","menuicon":"profile","modulename":"","path":"/search_patients","isview":null,"isadd":true,"isedit":true,"isdelete":true,"subMenuList":[]},
    {"menuid":16,"menuname":"Demographics","userroleid":3,"rolename":"Candidate","menuicon":"profile","modulename":"","path":"/demographics","isview":null,"isadd":true,"isedit":true,"isdelete":true,"subMenuList":[]},
    {"menuid":17,"menuname":"Patient & Family History","userroleid":3,"rolename":"Candidate","menuicon":"profile","modulename":"","path":"/patient_and_family_history","isview":null,"isadd":true,"isedit":true,"isdelete":true,"subMenuList":[]},
    {"menuid":18,"menuname":"Insurance","userroleid":3,"rolename":"Candidate","menuicon":"profile","modulename":"","path":"/insurance","isview":null,"isadd":true,"isedit":true,"isdelete":true,"subMenuList":[]},
    // {"menuid":20,"menuname":"Prescriptions","userroleid":3,"rolename":"Candidate","menuicon":"profile","modulename":"","path":"/prescriptions","isview":null,"isadd":true,"isedit":true,"isdelete":true,"subMenuList":[]},
    // {"menuid":27,"menuname":"Disclosures","userroleid":3,"rolename":"Candidate","menuicon":"profile","modulename":"","path":"/disclosures","isview":null,"isadd":true,"isedit":true,"isdelete":true,"subMenuList":[]},
    // {"menuid":28,"menuname":"Documents","userroleid":3,"rolename":"Candidate","menuicon":"profile","modulename":"","path":"/documents","isview":null,"isadd":true,"isedit":true,"isdelete":true,"subMenuList":[]},
    // {"menuid":29,"menuname":"Clinical Reminders","userroleid":3,"rolename":"Candidate","menuicon":"profile","modulename":"","path":"/clinical_reminders","isview":null,"isadd":true,"isedit":true,"isdelete":true,"subMenuList":[]},
    // {"menuid":30,"menuname":"Patient Messages","userroleid":3,"rolename":"Candidate","menuicon":"profile","modulename":"","path":"/patient_messages","isview":null,"isadd":true,"isedit":true,"isdelete":true,"subMenuList":[]},
    {"menuid":31,"menuname":"Reports ","userroleid":3,"rolename":"Candidate","menuicon":"profile","modulename":"","path":"/reports","isview":null,"isadd":true,"isedit":true,"isdelete":true,"subMenuList":[]},
    {"menuid":32,"menuname":"Calendar","userroleid":3,"rolename":"Candidate","menuicon":"profile","modulename":"","path":"/calendar","isview":null,"isadd":true,"isedit":true,"isdelete":true,"subMenuList":[]},
    {"menuid":33,"menuname":"Access Control","userroleid":3,"rolename":"Candidate","menuicon":"profile","modulename":"","path":"/access_control","isview":null,"isadd":true,"isedit":true,"isdelete":true,"subMenuList":[]},
    
    ]

  useEffect(() => {
    if (menuDtoList) {
      const menuItems = menuDtoList?.map(
        ({ path, menuname: title, subMenuList = [], ...rest }) => ({
          itemId: path,
          pathname: path,
          title,
          ...rest,
          elemBefore: () => (
            <img src={sideBarIcons[rest.menuicon]} alt="icons" />
          ),
          ...(subMenuList?.length
            ? {
                subNav: subMenuList.map(({ submenuname: title, path }) => ({
                  title,
                  itemId: path,
                  elemBefore: () => <FontAwesomeIcon icon={faBars} />,
                })),
              }
            : {}),
        })
      );

      setMenuItems(menuItems);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onNavigate = (itemId) => {
    if (window.screen.width < 768) {
      props.setIsSidebarOpen(false);
      navigate(itemId);
    } else {
      navigate(itemId);
    }
  };
  return (
    <>
      {/* Sidebar Overlay */}

      <div
        className={`appsidebar  overflow-y-auto  bg-white ${
          props.isSidebarOpen ? "sidebar-open-main" : ""
        } `}
        // onMouseEnter={() => onEnterToSidebar()}
        // onMouseLeave={() => onLeaveToSidebar()}
      >
        <div
          className={`${
            props.isSidebarOpen ? "sidebar-open" : "sidebar-close"
          }`}
        >
          <Navigation
            activeItemId={location.pathname}
            onSelect={({ itemId }) => {
              onNavigate(itemId);
            }}
            items={menuItems}
          />
        </div>
      </div>
    </>
  );
};
