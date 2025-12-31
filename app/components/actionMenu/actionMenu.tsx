import React, { useState } from "react";
import Image from "next/image";
import viewIcon from "../../assets/images/viewIcon.png";
import adjustIcon from "../../assets/images/adjustIcon.png";
import editIcon from "../../assets/images/editIcon.png";
import deleteIcon from "../../assets/images/deleteIcon.png";
import bookIcon from "../../assets/images/bookIcon.png";
import printIcon from "../../assets/images/printIcon.png";
import { Menu, IconButton, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

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
        onClose={() => setAnchorEl(null)}
        PaperProps={{
          sx: {
            borderRadius: "8px",
            color: "#697586",
          },
        }}
      >
        <MenuItem>
          <Image src={viewIcon} alt="view cion" className="mr-3" />
          <span>View</span>
        </MenuItem>
        <MenuItem>
          <Image src={editIcon} alt="view cion" className="mr-3" />
          <span>Edit</span>
        </MenuItem>
        <MenuItem>
          <Image src={adjustIcon} alt="view cion" className="mr-3" />
          <span>Adjust</span>
        </MenuItem>
        <MenuItem>
          <Image src={bookIcon} alt="view cion" className="mr-3" />
          <span>Book In/Issue/Transfer</span>
        </MenuItem>
        <MenuItem>
          <Image src={printIcon} alt="printIcon" className="mr-3" />
          <span>Print Label</span>
        </MenuItem>
        <MenuItem>
          <Image src={deleteIcon} alt="deleteIcon" className="mr-3" />
          <span>Delete</span>
        </MenuItem>
      </Menu>
    </>
  );
};

const ActionMenuOrganisation = () => {
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
        onClose={() => setAnchorEl(null)}
        PaperProps={{
          sx: {
            borderRadius: "8px",
            color: "#697586",
          },
        }}
      >
        <MenuItem>
          <Image src={viewIcon} alt="view cion" className="mr-3" />
          <span>View</span>
        </MenuItem>
        <MenuItem>
          <Image src={editIcon} alt="view cion" className="mr-3" />
          <span>Edit</span>
        </MenuItem>
        <MenuItem>
          <Image src={adjustIcon} alt="view cion" className="mr-3" />
          <span>Adjust</span>
        </MenuItem>
        <MenuItem>
          <Image src={deleteIcon} alt="deleteIcon" className="mr-3" />
          <span>Delete</span>
        </MenuItem>
      </Menu>
    </>
  );
};

export { ActionMenu, ActionMenuOrganisation };
