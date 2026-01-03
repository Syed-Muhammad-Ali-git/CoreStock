export interface ExpiringRow {
  Organization: string;
  status: "Active" | "Trial" | "Expired" | "Suspended";
  seatsUsed: string;
  expiryDate: string;
  billingStatus:
    | "Paid"
    | "Pending"
    | "Unpaid"
    | "Suspended"
    | "Critical"
    | "Overstock";
  created: string;
}

export interface HighUtilRow extends ExpiringRow {
  used: React.ReactNode;
}

export interface TableDataType {
  id: string;
}

export interface UserTableDataType {
  name: string;
  role: "Admin" | "Manager" | "Storekeeper" | "Electrical";
  email: string;
  clientAdmin: "Yes" | "No";
  lastLogin: string;
  dateInvited: string;
  status: "Active" | "Trial" | "Expired" | "Suspended";
}

export default ExpiringRow;
