import * as Icon from "@material-ui/icons";

export const SIDEBAR_MAIN = [
  {
    name: "Directory",
    icon: <Icon.Folder />,
    route: "/directory",
    key: 0,
  },
  {
    name: "Members, Suppliers",
    icon: <Icon.PeopleAlt />,
    route: "/member-supplier",
    key: 1,
  },
  {
    name: "News, Events",
    icon: <Icon.Subtitles />,
    route: "/news-events",
    key: 2,
  },
  {
    name: "Training",
    icon: <Icon.EventAvailable />,
    route: "training",
    key: 3,
  },
  {
    name: "User Receipt",
    icon: <Icon.Receipt />,
    route: "user-receipt",
    key: 4,
  },
  {
    name: "Price Update",
    icon: <Icon.Loop />,
    route: "price-update",
    key: 5,
  },
];

export const SIDEBAR_USER_ROLE = [
  {
    name: "Users",
    icon: <Icon.Person />,
    route: "users",
    key: 6,
  },
  {
    name: "Roles",
    icon: <Icon.VpnKey />,
    route: "roles",
    key: 7,
  },
];
