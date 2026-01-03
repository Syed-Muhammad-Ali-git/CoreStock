"use client";

import React, { useState } from "react";
import Image from "next/image";
import viewIcon from "@/app/assets/images/viewIcon.png";
import editIcon from "@/app/assets/images/editIcon.png";
import deleteIcon from "@/app/assets/images/deleteIcon.png";
import adjustIcon from "@/app/assets/images/adjustIcon.png";
import plusBlackIcon from "@/app/assets/images/plusBlack.png";
import bookIcon from "@/app/assets/images/bookIcon.png";
import printIcon from "@/app/assets/images/printIcon.png";
import suspendedRedIcon from "@/app/assets/images/suspendedRed.png";
import { Menu, IconButton, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SuspendedOrganizationModal from "@/app/modals/suspendOrganization";
import sendIcon from "@/app/assets/images/sendGray.png";
import prpfileIcon from "@/app/assets/images/profileGray.png";
import lockIcon from "@/app/assets/images/lockGray.png";
import ResetPasswordModal from "@/app/modals/resetPassword";
import { ToggleButtonProps } from "@/app/types/index";

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

const UserTabActionMenu: React.FC<ToggleButtonProps> = ({
  initial = false,
  onChange,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [isOn, setIsOn] = useState(initial);
  const [isOpenResetModal, setIsOpenResetModal] = useState(false);

  const openResetModal = () => setIsOpenResetModal(true);
  const closeResetModal = () => setIsOpenResetModal(false);

  const handleToggle = () => {
    setIsOn(!isOn);
    if (onChange) onChange(!isOn);
  };

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
          <button
            type="button"
            onClick={handleToggle}
            className={`w-10 h-6 flex items-center rounded-full p-1 mr-2 duration-300 bg-[#EEF2F6]  ${
              isOn ? "bg-green-500" : "bg-gray-300"
            }
               `}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${
                isOn ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </button>
          <span>Disable / Enable</span>
        </MenuItem>
        <MenuItem>
          <Image src={sendIcon} alt="edit icon" className="mr-3" />
          <span>Resend Invite</span>
        </MenuItem>
        <MenuItem>
          <Image src={lockIcon} alt="adjust icon" className="mr-3" />
          <button onClick={openResetModal}>Reset Password</button>
          <ResetPasswordModal
            isOpen={isOpenResetModal}
            onClose={closeResetModal}
          />
        </MenuItem>
        <MenuItem>
          <Image src={prpfileIcon} alt="book icon" className="mr-3" />
          <span>Make Admin</span>
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

export {
  ActionMenu,
  ActionMenuOrganization,
  OrganizationNameMenu,
  UserTabActionMenu,
};
