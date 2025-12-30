"use client";

import * as React from "react";
import { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Menu,
  MenuItem,
  Box,
  TablePagination,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import OrganizationTableHeader from "./tableHeader";
import highUtilRows from "../../data/hardcoded/highUtilData";
import Image from "next/image";
import viewIcon from "../../assets/images/viewIcon.png";
import adjustIcon from "../../assets/images/adjustIcon.png";
import editIcon from "../../assets/images/editIcon.png";
import deleteIcon from "../../assets/images/deleteIcon.png";

/* ---------------- ACTION MENU ---------------- */

const ActionMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  return (
    <>
      <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
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
          <Image src={deleteIcon} alt="view cion" className="mr-3" />
          <span>Delete</span>
        </MenuItem>
      </Menu>
    </>
  );
};

/* ---------------- MAIN TABLE ---------------- */

const OrganizationTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(7);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const billingStatusStyles: Record<
    "Paid" | "Pending" | "Unpaid" | "Suspended" | "Critical" | "Overstock",
    { color: string; bg: string }
  > = {
    Paid: {
      color: "#087442",
      bg: "#EDFCF2",
    },
    Pending: {
      color: "#087442",
      bg: "#EDFCF2",
    },
    Unpaid: {
      color: "#BA3A14",
      bg: "#FFFAEB",
    },
    Critical: {
      color: "#BA3A14",
      bg: "#FFFAEB",
    },
    Suspended: {
      color: "#B6271F",
      bg: "#FEF3F2",
    },
    Overstock: {
      color: "#B6271F",
      bg: "#FEF3F2",
    },
  };

  const statusStyles: Record<
    "Active" | "Trial" | "Expired" | "Suspended",
    { color: string; bg: string }
  > = {
    Active: {
      color: "#087442",
      bg: "#EDFCF2",
    },
    Trial: {
      color: "#BA3A14",
      bg: "#FFFAEB",
    },
    Expired: {
      color: "#B6271F",
      bg: "#FEF3F2",
    },
    Suspended: {
      color: "#344054",
      bg: "#F2F4F7",
    },
  };

  return (
    <Paper sx={{ borderRadius: "12px", overflow: "hidden" }}>
      {/* ✅ HEADER */}
      <OrganizationTableHeader />

      {/* TABLE */}
      <TableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {[
                "Organization",
                "Status",
                "Seats",
                "% Used",
                "Expiry Date",
                "Billing Status",
                "Created",
                "Action",
              ].map((head) => (
                <TableCell
                  key={head}
                  sx={{
                    backgroundColor: "#F8FAFC",
                    color: "#697586",
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                  }}
                >
                  {head}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {highUtilRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, i) => (
                <TableRow hover key={i}>
                  <TableCell>{row.Organization}</TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        display: "inline-block",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: "999px",
                        fontSize: "13px",
                        fontWeight: 500,
                        backgroundColor: statusStyles[row.status].bg,
                        color: statusStyles[row.status].color,
                      }}
                    >
                      {row.status}
                    </Box>
                  </TableCell>
                  <TableCell>{row.seatsUsed}</TableCell>
                  <TableCell>{row.used}</TableCell>
                  <TableCell>{row.expiryDate}</TableCell>

                  {/* STATUS BADGE */}
                  <TableCell>
                    <Box
                      sx={{
                        display: "inline-block",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: "999px",
                        fontSize: "13px",
                        fontWeight: 500,
                        backgroundColor:
                          billingStatusStyles[row.billingStatus].bg,
                        color: billingStatusStyles[row.billingStatus].color,
                      }}
                    >
                      {row.billingStatus}
                    </Box>
                  </TableCell>

                  <TableCell>{row.created}</TableCell>

                  <TableCell align="center">
                    <ActionMenu />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* PAGINATION */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: isSmallScreen ? "center" : "space-between",
          px: 2,
          py: 1.5,
          borderTop: "1px solid #E5E7EB",
        }}
      >
        {!isSmallScreen && (
          <button
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
            style={{
              border: "1px solid #CDD5DF",
              borderRadius: "8px",
              padding: "6px 12px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              background: "#fff",
            }}
          >
            <ArrowBackIcon fontSize="small" /> Previous
          </button>
        )}

        <TablePagination
          component="div"
          count={highUtilRows.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={(_, newPage) => setPage(newPage)}
          rowsPerPageOptions={[7, 10, 15]}
          onRowsPerPageChange={(e) => {
            setRowsPerPage(parseInt(e.target.value, 10));
            setPage(0);
          }}
        />

        {!isSmallScreen && (
          <button
            disabled={page >= Math.ceil(highUtilRows.length / rowsPerPage) - 1}
            onClick={() => setPage(page + 1)}
            style={{
              border: "1px solid #CDD5DF",
              borderRadius: "8px",
              padding: "6px 12px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              background: "#fff",
            }}
          >
            Next <ArrowForwardIcon fontSize="small" />
          </button>
        )}
      </Box>
    </Paper>
  );
};

export default OrganizationTable;
