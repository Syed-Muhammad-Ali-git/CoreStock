"use client";

import React, { useState } from "react";
import Image from "next/image";
import viewIcon from "../../assets/images/viewIcon.png";
import editIcon from "../../assets/images/editIcon.png";
import deleteIcon from "../../assets/images/deleteIcon.png";
import adjustIcon from "../../assets/images/adjustIcon.png";
import plusBlackIcon from "../../assets/images/plusBlack.png";
import bookIcon from "../../assets/images/bookIcon.png";
import printIcon from "../../assets/images/printIcon.png";
import suspendedRedIcon from "../../assets/images/suspendedRed.png";
import { Menu, IconButton, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SuspendedOrganizationModal from "../../modals/suspendOrganization";

const ActionMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <>
      <IconButton
        onClick={(e) => setAnchorEl(e.currentTarget)}
        style={{ display: "flex" }}
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        disableScrollLock={true}
        onClose={() => setAnchorEl(null)}
        PaperProps={{
          sx: {
            borderRadius: "8px",
            color: "#697586",
          },
        }}
      >
        <MenuItem>
          <Image src={viewIcon} alt="view icon" className="mr-3" />
          <span>View</span>
        </MenuItem>
        <MenuItem>
          <Image src={editIcon} alt="edit icon" className="mr-3" />
          <span>Edit</span>
        </MenuItem>
        <MenuItem>
          <Image src={adjustIcon} alt="adjust icon" className="mr-3" />
          <span>Adjust</span>
        </MenuItem>
        <MenuItem>
          <Image src={bookIcon} alt="book icon" className="mr-3" />
          <span>Book In/Issue/Transfer</span>
        </MenuItem>
        <MenuItem>
          <Image src={printIcon} alt="print Icon" className="mr-3" />
          <span>Print Label</span>
        </MenuItem>
        <MenuItem>
          <Image src={deleteIcon} alt="delete Icon" className="mr-3" />
          <span>Delete</span>
        </MenuItem>
      </Menu>
    </>
  );
};

const ActionMenuOrganization = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <>
      <IconButton
        onClick={(e) => setAnchorEl(e.currentTarget)}
        style={{ display: "flex" }}
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        disableScrollLock={true}
        onClose={() => setAnchorEl(null)}
        PaperProps={{
          sx: {
            borderRadius: "8px",
            color: "#697586",
          },
        }}
      >
        <MenuItem>
          <Image src={viewIcon} alt="view icon" className="mr-3" />
          <span>View</span>
        </MenuItem>
        <MenuItem>
          <Image src={editIcon} alt="edit icon" className="mr-3" />
          <span>Edit</span>
        </MenuItem>
        <MenuItem>
          <Image src={adjustIcon} alt="adjust icon" className="mr-3" />
          <span>Adjust</span>
        </MenuItem>
        <MenuItem>
          <Image src={deleteIcon} alt="delete Icon" className="mr-3" />
          <span>Delete</span>
        </MenuItem>
      </Menu>
    </>
  );
};

const OrganizationNameMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isOpenSuspended, setisOpenSuspended] = useState(false);

  const openSuspended = () => setisOpenSuspended(true);
  const closeSuspended = () => setisOpenSuspended(false);

  return (
    <>
      <IconButton
        onClick={(e) => setAnchorEl(e.currentTarget)}
        style={{ display: "flex" }}
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        disableScrollLock={true}
        onClose={() => setAnchorEl(null)}
        PaperProps={{
          sx: {
            borderRadius: "8px",
            color: "#697586",
          },
        }}
      >
        <MenuItem>
          <Image src={plusBlackIcon} alt="impersonate icon" className="mr-3" />
          <button>Impersonate Client Admin</button>
        </MenuItem>
        <MenuItem>
          <Image src={suspendedRedIcon} alt="suspende icon" className="mr-3" />
          <button className="text-[#B6271F]" onClick={openSuspended}>
            Suspended Organization
          </button>
          <SuspendedOrganizationModal
            isOpen={isOpenSuspended}
            onClose={closeSuspended}
          />
        </MenuItem>
        <MenuItem>
          <Image src={printIcon} alt="print icon" className="mr-3" />
          <span>Print Label</span>
        </MenuItem>
        <MenuItem>
          <Image src={deleteIcon} alt="delete Icon" className="mr-3" />
          <span>Delete</span>
        </MenuItem>
      </Menu>
    </>
  );
};

export { ActionMenu, ActionMenuOrganization, OrganizationNameMenu };
