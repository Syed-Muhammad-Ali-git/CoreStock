import { UserTableDataType } from "../../types/index";

// Create some example users
const UserTableData: UserTableDataType[] = [
  {
    name: "Theresa",
    role: "Admin",
    email: "line@yandex.com",
    clientAdmin: "Yes",
    lastLogin: "Today 09:14",
    dateInvited: "01 Jan 2024",
    status: "Active",
  },
  {
    name: "Michael",
    role: "Storekeeper",
    email: "michael@gmail.com",
    clientAdmin: "No",
    lastLogin: "Yesterday 18:32",
    dateInvited: "15 Feb 2024",
    status: "Trial",
  },
  {
    name: "Sophia",
    role: "Electrical",
    email: "sophia@yahoo.com",
    clientAdmin: "No",
    lastLogin: "Today 08:20",
    dateInvited: "22 Mar 2024",
    status: "Expired",
  },
  {
    name: "James",
    role: "Admin",
    email: "james@hotmail.com",
    clientAdmin: "Yes",
    lastLogin: "Today 07:55",
    dateInvited: "10 Apr 2024",
    status: "Suspended",
  },
  // Add 20 dummy users
  ...Array.from({ length: 20 }).map(
    (_, i): UserTableDataType => ({
      name: `User ${i + 1}`,
      role: i % 2 === 0 ? "Admin" : "Manager",
      email: `user${i + 1}@example.com`,
      clientAdmin: i % 3 === 0 ? "Yes" : "No",
      lastLogin: `Today ${Math.floor(Math.random() * 12 + 1)}:${Math.floor(
        Math.random() * 60
      )
        .toString()
        .padStart(2, "0")}`,
      dateInvited: `0${(i % 12) + 1} Jan 2024`,
      status:
        i % 4 === 0
          ? "Active"
          : i % 4 === 1
          ? "Trial"
          : i % 4 === 2
          ? "Expired"
          : "Suspended",
    })
  ),
];

export default UserTableData;
