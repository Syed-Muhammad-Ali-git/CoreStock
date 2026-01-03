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
import UserTableData from "../../../data/hardcoded//userTableData";
import { UserTabActionMenu } from "../../actionMenu/actionMenu";
import EditUser from "../../../modals/editUser";
import { toast } from "react-toastify";
import styles from "../../organization/table.module.css";

/* ---------------- MAIN TABLE ---------------- */

const UsersTabHeader = ({ searchQuery }: { searchQuery: string }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState(UserTableData);
  const [editUserName, setEditUserName] = useState("");
  const [editUserRole, setEditUserRole] = useState("");
  const [editUserEmail, setEditUserEmail] = useState("");
  const [editUserStatus, setEditUserStatus] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleOpenEdit = (name: string, role: string, email: string, status: string) => {
    setEditUserName(name);
    setEditUserRole(role);
    setEditUserEmail(email);
    setEditUserStatus(status);
    setIsEditModalOpen(true);
  };

  const handleCloseEdit = () => {
    setIsEditModalOpen(false);
    setEditUserName("");
    setEditUserRole("");
    setEditUserEmail("");
    setEditUserStatus("");
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

  const filteredRows = rows.filter((row) =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDeleteUser = (userName: string) => {
    setRows(rows.filter((row) => row.name !== userName));
  };

  return (
    <Paper className={styles.paper}>
      {/* TABLE */}
      <TableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {[
                "Name",
                "Role",
                "Email",
                "Client Admin",
                "Last Login",
                "Date Invited",
                "Status",
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

          <TableBody sx={{ color: "#121926" }}>
            {filteredRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, i) => (
                <TableRow hover key={i}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell sx={{ color: "#4B5565" }}>
                    <span className="bg-[#EEF2F6] p-2 rounded-2xl">
                      {row.role}
                    </span>
                  </TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.clientAdmin}</TableCell>
                  <TableCell>{row.lastLogin}</TableCell>
                  <TableCell>{row.dateInvited}</TableCell>
                  <TableCell>
                    <Box
                      className={`${styles.statusBadge} ${getStatusClass(
                        row.status
                      )}`}
                    >
                      {row.status}
                    </Box>
                  </TableCell>
                  <TableCell align="center">
                    <UserTabActionMenu 
                      userName={row.name} 
                      userRole={row.role}
                      userEmail={row.email}
                      userStatus={row.status}
                      onDelete={handleDeleteUser}
                      onOpenEdit={handleOpenEdit}
                    />
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

      {/* EDIT USER MODAL */}
      {isEditModalOpen && (
        <EditUser
          isOpen={isEditModalOpen}
          onClose={handleCloseEdit}
          userName={editUserName}
          userRole={editUserRole}
          userEmail={editUserEmail}
          userStatus={editUserStatus}
        />
      )}
    </Paper>
  );
};

export default UsersTabHeader;
