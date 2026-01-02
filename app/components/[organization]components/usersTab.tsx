import React, { useState } from "react";
import UserTableHeader from "./usersTabComponent/tableHeader";
import UsersTable from "./usersTabComponent/userTable";
import UsersTabHeader from "./usersTabComponent/usersTabHeader";

const UsersTab = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      {/* users tab header */}
      <UsersTabHeader />

      {/* users tab table header */}
      <UserTableHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        showSearch={true}
      />

      {/* Organization Table */}
      <UsersTable searchQuery={searchQuery} />
    </>
  );
};

export default UsersTab;
