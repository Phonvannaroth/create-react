/* eslint-disable import/no-cycle */
export const REQUEST_STATUS = ["ALL", "APPROVED", "REJECTED", "REQUESTED"];
export const STATUS = ["ACTIVE", "INACTIVE"];
export const STATUS_RECEIPT = ["ALL", "ACTIVE", "COMPLETE"];
export const DIRECTORY_STATUS = ["ACTIVE", "INACTIVE", "DELETED"];
export const ENTRIES = [10, 25, 50, 100];
export const MEMBER_SUPPLIER_TYPE = ["MEM", "SUP"];
export const NEWS_EVENTS_TYPE = ["NEW", "EVE"];
export const FUNCTION_CODE = [
  { id: 1, label: "Create", checked: false, name: "CREATE" },
  { id: 2, label: "Modify", checked: false, name: "MODIFY" },
  { id: 3, label: "Delete", checked: false, name: "DELETE" },
  { id: 4, label: "Deactivate", checked: false, name: "DEACTIVATE" },
];

export const BUSINESS_TYPE = [
  "Hotel",
  "Shop",
  "Restaurant",
  "Organization",
  "Bank",
];
