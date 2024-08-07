import "../css/table.css";

import { t } from "i18next";
import { useState } from "react";

import { wrightIcon } from "../assets/icons/dashboard";
import {
  deleteIcon,
  editIcon,
  exportIcon,
  iIcon,
  searchIcon,
} from "../assets/icons/tables";
import Navbar from "../common/Navbar";
import AddNewTable from "../components/table/AddNewTable";

const Table = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="table-section">
      <Navbar
        title={t("table.tables")}
        showNewAddBtn
        newAddBtnText={t("table.newTable")}
        openCanvas={() => setDrawerOpen(true)}
      />

      <div className="table-container">
        <table className="table">
          <thead>
            <tr className="table-tr">
              <th className="table-heading th-common">
                <div className="d-flex align-items-center justify-content-start">
                  <input type="checkbox" className="table-heading-checkbox" />
                </div>
              </th>
              <th className="table-heading th-common">{t("table.no")}</th>
              <th className="table-heading th-common">
                {t("table.tableCode")}
              </th>
              <th className="table-heading th-common">{t("table.branch")}</th>
              <th className="table-heading th-common">{t("table.status")}</th>
              <th className="table-heading th-common">
                <div className="table-heading-export">
                  <div className="d-inline-block">
                    <button className="table-heading-export-btn">
                      {exportIcon("22")}
                      <span className="table-heading-export-text">
                        {t("table.exportSelected")}
                      </span>
                    </button>
                  </div>
                  <div className="d-inline-block ms-2">
                    <div className="table-heading-search">
                      <input
                        placeholder="Enter keyword"
                        type="text"
                        className="table-heading-search-input"
                      />
                      <div className="table-heading-search-icon">
                        {searchIcon}
                      </div>
                    </div>
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="table-data th-common">
                <div className="d-flex align-items-center justify-content-start">
                  <input type="checkbox" className="table-heading-checkbox" />
                </div>
              </td>
              <td className="table-data th-common">
                <div>1</div>
              </td>
              <td className="table-data th-common">101</td>
              <td className="table-data th-common">{t("table.doha")}</td>
              <td className="table-data th-common">
                <div className="table-data-status">
                  {wrightIcon(24)}
                  <span className="ms-2">{t("table.available")}</span>
                </div>
              </td>
              <td className="table-data th-common">
                <div className="table-data-action">
                  <div className="table-data-scan-edit-delete">
                    <button className="table-data-scan-btn table-data-action-common">
                      <div className="table-data-icon-common">{iIcon}</div>
                    </button>
                  </div>
                  <div className="table-data-scan-edit-delete">
                    <button className="table-data-edit-btn table-data-action-common">
                      <div className="table-data-icon-common">{editIcon}</div>
                    </button>
                  </div>
                  <div className="table-data-scan-edit-delete">
                    <button className="table-data-delete-btn table-data-action-common">
                      <div className="table-data-icon-common">{deleteIcon}</div>
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <AddNewTable
        isDrawerOpen={isDrawerOpen}
        setDrawerOpen={() => setDrawerOpen(false)}
      />
    </div>
  );
};

export default Table;
