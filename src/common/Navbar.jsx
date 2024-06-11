import React, { useEffect, useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { navbarMobileIcon } from "../assets/icons/dashboard";
import i18n from "../utils/i18next";
import { bellIcon } from "../assets/icons/navbar";
import MobileMenu from "../Components/MobileMenu";
import { exportIcon } from "../assets/icons/tables";
import "../css/navbar.css";
import { t } from "i18next";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../redux/slice/languageSlice";

const Navbar = ({
  title,
  showExportBtn,
  showNewAddBtn,
  newAddBtnText,
  openCanvas,
}) => {
  const dispatch = useDispatch();
  const language = useSelector((state) => state?.language?.language);
  const [show, setShow] = useState(false);

  const changeLanguage = () => {
    const newLanguage = language === "EN" ? "AR" : "EN";
    localStorage.setItem("language", newLanguage);
    dispatch(setLanguage(newLanguage));
    i18n.changeLanguage(newLanguage);
  };

  useEffect(() => {
    const defaultLanguage = localStorage.getItem("language");
    if (defaultLanguage) {
      dispatch(setLanguage(defaultLanguage));
      i18n.changeLanguage(defaultLanguage);
    }
  }, [dispatch]);

  const handelLogout = () => {
    localStorage.setItem("authUser", false);
  };

  return (
    <>
      <div className="navbar pt-5 pb-5">
        <div className="w-100 d-flex justify-content-between align-items-center">
          <div className="navbar-title d-none d-lg-block">{title}</div>
          <div
            className="navbar-mobile-logo d-block d-lg-none"
            onClick={() => setShow(true)}
          >
            {navbarMobileIcon}
          </div>

          <div className="d-flex align-items-center justify-content-center">
            {showExportBtn && (
              <button className="export-all">
                <div
                  className="d-flex align-items-center"
                  style={{ color: "blue" }}
                >
                  <div className="export-icon me-1"> {exportIcon(28)}</div>
                  <span className="ms-2 me-2">{t("navbar.exportAll")}</span>
                </div>
              </button>
            )}
            {showNewAddBtn && (
              <button className="add-products" onClick={openCanvas}>
                <div className="d-flex align-items-center">
                  <div className="plus-icon ms-2">+</div>
                  <span>{newAddBtnText}</span>
                </div>
              </button>
            )}

            <div className="navbar-icon">{bellIcon}</div>
            <DropdownButton
              id="dropdown-basic-button"
              title="AR"
              className="navbar-dropdown1 mx-3"
            >
              <Dropdown.Item onClick={changeLanguage}>
                {language === "EN" ? "العربية" : "English"}
              </Dropdown.Item>
              <Dropdown.Item href="/sign-in" onClick={() => handelLogout()}>
                Sign Out
              </Dropdown.Item>
            </DropdownButton>
          </div>
        </div>
      </div>

      <MobileMenu show={show} onHide={() => setShow(false)} />
    </>
  );
};

export default Navbar;