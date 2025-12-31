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
  Box,
  TablePagination,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import highUtilRows from "../../data/hardcoded/highUtilData";
import { ActionMenuOrganization } from "../actionMenu/actionMenu";
import styles from "./table.module.css";

/* ---------------- MAIN TABLE ---------------- */

const OrganizationTable = ({ searchQuery }: { searchQuery: string }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const getBillingStatusClass = (status: string) => {
    switch (status) {
      case "Paid":
        return styles.paid;
      case "Pending":
        return styles.pending;
      case "Unpaid":
        return styles.unpaid;
      case "Critical":
        return styles.critical;
      case "Suspended":
        return styles.suspended;
      case "Overstock":
        return styles.overstock;
      default:
        return "";
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Active":
        return styles.active;
      case "Trial":
        return styles.trial;
      case "Expired":
        return styles.expired;
      case "Suspended":
        return styles.suspendedStatus;
      default:
        return "";
    }
  };

  const filteredRows = highUtilRows.filter((row) =>
    row.Organization.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Paper className={styles.paper}>
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
                    color: "#697586",
                    backgroundColor: "#f8fafc",
                    fontWeight: "500",
                    whiteSpace: "nowrap",
                  }}
                >
                  {head}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, i) => (
                <TableRow hover key={i}>
                  <TableCell>{row.Organization}</TableCell>
                  <TableCell>
                    <Box
                      className={`${styles.statusBadge} ${getStatusClass(
                        row.status
                      )}`}
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
                      className={`${styles.statusBadge} ${getBillingStatusClass(
                        row.billingStatus
                      )}`}
                    >
                      {row.billingStatus}
                    </Box>
                  </TableCell>
                  <TableCell>{row.created}</TableCell>
                  <TableCell align="center">
                    <ActionMenuOrganization />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* PAGINATION */}
      <Box
        className={styles.pagination}
        style={{ justifyContent: isSmallScreen ? "center" : "space-between" }}
      >
        {!isSmallScreen && (
          <button
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
            className={styles.paginationButton}
          >
            <ArrowBackIcon fontSize="small" /> Previous
          </button>
        )}

        <TablePagination
          component="div"
          count={filteredRows.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={(_, newPage) => setPage(newPage)}
          rowsPerPageOptions={[10, 15, 25]}
          onRowsPerPageChange={(e) => {
            setRowsPerPage(parseInt(e.target.value, 10));
            setPage(0);
          }}
        />

        {!isSmallScreen && (
          <button
            disabled={page >= Math.ceil(filteredRows.length / rowsPerPage) - 1}
            onClick={() => setPage(page + 1)}
            className={styles.paginationButton}
          >
            Next <ArrowForwardIcon fontSize="small" />
          </button>
        )}
      </Box>
    </Paper>
  );
};

export default OrganizationTable;
