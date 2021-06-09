/* eslint-disable import/no-cycle */
import React from "react";
import Loadable from "react-loadable";
import * as Icon from "@material-ui/icons";

function Loading() {
  return <div />;
}

// :FORM-1:<-Directory ->
const DirectoryContainer = Loadable({
  loader: () =>
    import("app/pages/dashboard/DashboardContainer"),
  loading: Loading,
});

const DirectoryDetailContainer = Loadable({
  loader: () =>
    import("app/pages/dashboard/DashboardContainer"),
  loading: Loading,
});

const AddNewDirectoryContainer = Loadable({
  loader: () =>
    import("app/pages/dashboard/DashboardContainer"),
  loading: Loading,
});
const EditDirectoryContainer = Loadable({
  loader: () =>
    import("app/pages/dashboard/DashboardContainer"),
  loading: Loading,
});

// :FORM-2:<-Category ->
const CategoryContainer = Loadable({
  loader: () =>
    import("app/pages/category/CategoryContainer"),
  loading: Loading,
});

const AddNewCategoryContainer = Loadable({
  loader: () =>
    import("app/pages/category/add-new-category/AddNewCategoryContainer"),
  loading: Loading,
});

const EditCategoryContainer = Loadable({
  loader: () =>
    import("app/pages/category/edit-new-category/EditCategoryContainer"),
  loading: Loading,
});

const MemberSupplierDetailContainer = Loadable({
  loader: () =>
    import("app/pages/dashboard/DashboardContainer"),
  loading: Loading,
});

// :FORM-3:<- News Events ->
const NewsEventsContainer = Loadable({
  loader: () =>
    import("app/pages/dashboard/DashboardContainer"),
  loading: Loading,
});

const AddNewNewsEventsContainer = Loadable({
  loader: () =>
    import("app/pages/dashboard/DashboardContainer"),
  loading: Loading,
});

const EditNewsEventsContainer = Loadable({
  loader: () =>
    import("app/pages/dashboard/DashboardContainer"),
  loading: Loading,
});

const NewsEventsDetailContainer = Loadable({
  loader: () =>
    import("app/pages/dashboard/DashboardContainer"),
  loading: Loading,
});

// :FORM-4:<- Training ->
const TrainingContainer = Loadable({
  loader: () =>
    import("app/pages/dashboard/DashboardContainer"),
  loading: Loading,
});

const AddNewTrainingContainer = Loadable({
  loader: () =>
    import("app/pages/dashboard/DashboardContainer"),
  loading: Loading,
});

const EditTrainingContainer = Loadable({
  loader: () =>
    import("app/pages/dashboard/DashboardContainer"),
  loading: Loading,
});

const TrainingDetailContainer = Loadable({
  loader: () =>
    import("app/pages/dashboard/DashboardContainer"),
  loading: Loading,
});

// :FORM-5:<- User Receipt ->
const UserReceiptContainer = Loadable({
  loader: () =>
    import("app/pages/dashboard/DashboardContainer"),
  loading: Loading,
});

const UserReceiptQRCodeContainer = Loadable({
  loader: () =>
    import("app/pages/dashboard/DashboardContainer"),
  loading: Loading,
});

const UserReceiptDetailContainer = Loadable({
  loader: () =>
    import("app/pages/dashboard/DashboardContainer"),
  loading: Loading,
});

// :FORM-5:<- User Receipt ->
const PriceUpdateContainer = Loadable({
  loader: () =>
    import("app/pages/dashboard/DashboardContainer"),
  loading: Loading,
});

const AddNewPriceUpdateContainer = Loadable({
  loader: () =>
    import("app/pages/dashboard/DashboardContainer"),
  loading: Loading,
});

const EditPriceUpdateContainer = Loadable({
  loader: () =>
    import("app/pages/dashboard/DashboardContainer"),
  loading: Loading,
});
const PriceUpdateDetailContainer = Loadable({
  loader: () =>
    import("app/pages/dashboard/DashboardContainer"),
  loading: Loading,
});

// :FORM-6:<- Users ->
const UserContainer = Loadable({
  loader: () =>
    import("app/pages/dashboard/DashboardContainer"),
  loading: Loading,
});
const AddNewUserContainer = Loadable({
  loader: () =>
    import("app/pages/dashboard/DashboardContainer"),
  loading: Loading,
});
const EditUserContainer = Loadable({
  loader: () =>
    import("app/pages/dashboard/DashboardContainer"),
  loading: Loading,
});

const UserDetailContainer = Loadable({
  loader: () =>
    import("app/pages/dashboard/DashboardContainer"),
  loading: Loading,
});

// :FORM-7:<- Roles ->
const RolesContainer = Loadable({
  loader: () =>
    import("app/pages/dashboard/DashboardContainer"),
  loading: Loading,
});
const AddNewRoleContainer = Loadable({
  loader: () =>
    import("app/pages/dashboard/DashboardContainer"),
  loading: Loading,
});
const EditRoleContainer = Loadable({
  loader: () =>
    import("app/pages/dashboard/DashboardContainer"),
  loading: Loading,
});

const RoleDetailContainer = Loadable({
  loader: () =>
    import("app/pages/dashboard/DashboardContainer"),
  loading: Loading,
});

export const USER_ACCESS = {
  roles: [{ id: 1, name: "create" }],

  forms: [
    {
      id: 0,
      formId: "f1",
      path: "/products",
      name: "Products",
      icon: <img className="hu5pjgll bixrwtb6" src="https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png?_nc_eui2=AeFaxCPLxceKMcmRmM5ZJESjRnQ_LTiVqatGdD8tOJWpq7MERWUUsWnA5_eIQU7pSAq_HaeiX4x33ovK4Al0q5nn" style={{ height: "36px", width: "36px" }} alt="" />,
      children: [
        { id: 0, path: "slug/:slug", element: DirectoryContainer },
        { id: 1, path: "", element: DirectoryContainer },
        {
          id: 2,
          path: "add-new-category",
          element: AddNewDirectoryContainer,
          routes: [
            {
              name: "Categories",
              route: "/categories",
            },
            {
              name: "Detail Categories",
              route: "add-new-directory-detail",
            },
          ],
        },
        {
          id: 3,
          path: "directory-detail/:id",
          element: DirectoryDetailContainer,
          routes: [
            {
              name: "Products",
              route: "/products",
            },
            {
              name: "Products Detail",
              route: "products-detail/:id",
            },
          ],
        },
        {
          id: 4,
          path: "edit-directory/:id",
          element: EditDirectoryContainer,
          routes: [
            {
              name: "Directory",
              route: "/directory",
            },
            {
              name: "Edit Directory",
              route: "edit-directory-detail",
            },
          ],
        },
      ],
    },
    {
      id: 1,
      formId: "f2",
      path: "/category",
      name: "Category",
      icon: <img className="hu5pjgll bixrwtb6" src="https://z-p3-static.xx.fbcdn.net/rsrc.php/v3/yy/r/9bekmF_PzNp.png?_nc_eui2=AeG5jP03XUyJa7uKyD6l8kbZuoxbk3lwwIO6jFuTeXDAg102GVt6LG-S674XFrfLSzgB1d0oUbzfFzoMiFp3YXa8" alt="" style={{ height: "36px", width: "36px" }} />,
      children: [
        { id: 0, path: "slug/:slug", element: CategoryContainer },
        { id: 1, path: "", element: CategoryContainer },
        {
          id: 2,
          path: "add-new-category",
          element: AddNewCategoryContainer,
          routes: [
            {
              name: "Category",
              route: "/category",
            },
            {
              name: "New Category",
              route: "add-new-category",
            },
          ],
        },
        {
          id: 3,
          path: "member-supplier-detail/:id",
          element: MemberSupplierDetailContainer,
          routes: [
            {
              name: "Member-Supplier",
              route: "/member-supplier",
            },
            {
              name: "Member-Supplier Detail",
              route: "member-supplier-detail/:id",
            },
          ],
        },
        {
          id: 4,
          path: "edit-category/:id",
          element: EditCategoryContainer,
          routes: [
            {
              name: "Category",
              route: "/category",
            },
            {
              name: "Edit Category",
              route: "edit-category/:id",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      formId: "f3",
      name: "Unit-Measurement",
      icon: <Icon.Link />,
      path: "/news-events",
      children: [
        { id: 0, path: "slug/:slug", element: NewsEventsContainer },
        { id: 1, path: "", element: NewsEventsContainer },
        {
          id: 2,
          path: "add-new-news-events",
          element: AddNewNewsEventsContainer,
          routes: [
            {
              name: "News-Events",
              route: "/news-events",
            },
            {
              name: "Add New News-Events",
              route: "add-new-news-events",
            },
          ],
        },
        {
          id: 3,
          path: "news-events-detail/:id",
          element: NewsEventsDetailContainer,
          routes: [
            {
              name: "News-Events",
              route: "/news-events",
            },
            {
              name: "News, Events Detail",
              route: "news-events-detail/:id",
            },
          ],
        },
        {
          id: 4,
          path: "edit-news-events/:id",
          element: EditNewsEventsContainer,
          routes: [
            {
              name: "News-Events",
              route: "/news-events",
            },
            {
              name: "Edit News-Events",
              route: "edit-news-events-detail",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      formId: "f4",
      name: "Exchange Rate",
      icon: <Icon.LocalAtm />,
      path: "/training",
      children: [
        { id: 0, path: "slug/:slug", element: TrainingContainer },
        { id: 1, path: "", element: TrainingContainer },
        {
          id: 2,
          path: "add-new-training",
          element: AddNewTrainingContainer,
          routes: [
            {
              name: "Training",
              route: "/training",
            },
            {
              name: "Add New Training",
              route: "add-new-news-events",
            },
          ],
        },
        {
          id: 3,
          path: "training-detail/:id",
          element: TrainingDetailContainer,
          routes: [
            {
              name: "Training",
              route: "/training",
            },
            {
              name: "Training Detail",
              route: "training-detail/:id",
            },
          ],
        },
        {
          id: 4,
          path: "edit-training/:id",
          element: EditTrainingContainer,
          routes: [
            {
              name: "Training",
              route: "/training",
            },
            {
              name: "Edit Trainings",
              route: "edit-training/:id",
            },
          ],
        },
      ],
    },
    {
      id: 4,
      formId: "f5",
      name: "Customers",
      icon: <Icon.PeopleAlt />,
      path: "/user-receipt",
      children: [
        { id: 0, path: "slug/:slug", element: UserReceiptContainer },
        { id: 1, path: "", element: UserReceiptContainer },
        {
          id: 2,
          path: "user-receipt-scan-qr-code",
          element: UserReceiptQRCodeContainer,
          routes: [
            {
              name: "User Receipt",
              route: "/user-receipt",
            },
            {
              name: "QR Scan",
              route: "user-receipt-scan-qr-code",
            },
          ],
        },
        {
          id: 3,
          path: "user-receipt-detail/:id",
          element: UserReceiptDetailContainer,
          routes: [
            {
              name: "User Receipt",
              route: "/user-receipt",
            },
            {
              name: "User Receipt Detail",
              route: "user-receipt-detail/:id",
            },
          ],
        },
      ],
    },
    {
      id: 5,
      formId: "f6",
      name: "Suppliers",
      icon: <Icon.Business />,
      path: "/price-update",
      children: [
        { id: 0, path: "slug/:slug", element: UserReceiptContainer },
        { id: 1, path: "", element: PriceUpdateContainer },
        {
          id: 2,
          path: "add-new-price-update",
          element: AddNewPriceUpdateContainer,
          routes: [
            {
              name: "Price Update",
              route: "/price-update",
            },
            {
              name: "Add New Price Update",
              route: "add-new-price-update",
            },
          ],
        },
        {
          id: 3,
          path: "price-update-detail/:id",
          element: PriceUpdateDetailContainer,
          routes: [
            {
              name: "Price Update",
              route: "/price-update",
            },
            {
              name: "Price Update Detail",
              route: "price-update-detail/:id",
            },
          ],
        },
        {
          id: 4,
          path: "edit-price-update/:id",
          element: EditPriceUpdateContainer,
          routes: [
            {
              name: "Price Update",
              route: "/price-update",
            },
            {
              name: "Edit Price Update",
              route: "edit-price-update",
            },
          ],
        },
      ],
    },
  ],
  management: [
    {
      id: 6,
      formId: "f7",
      name: "Users",
      icon: <Icon.Person />,
      path: "/users",
      children: [
        { id: 1, path: "", element: UserContainer },
        {
          id: 2,
          path: "add-new-user",
          element: AddNewUserContainer,
          routes: [
            {
              name: "Users",
              route: "/users",
            },
            {
              name: "Add New User",
              route: "add-new-user",
            },
          ],
        },
        {
          id: 3,
          path: "edit-user/:id",
          element: EditUserContainer,
          routes: [
            {
              name: "Users",
              route: "/users",
            },
            {
              name: "Edit User",
              route: "edit-user/:id",
            },
          ],
        },
        {
          id: 4,
          path: "user-detail/:id",
          element: UserDetailContainer,
          routes: [
            {
              name: "Users",
              route: "/users",
            },
            {
              name: "User Detail",
              route: "user-detail/:id",
            },
          ],
        },
      ],
    },
    {
      id: 7,
      formId: "f8",
      name: "Roles",
      icon: <Icon.VpnKey />,
      path: "/roles",
      children: [
        { id: 1, path: "", element: RolesContainer },
        {
          id: 2,
          path: "add-new-role",
          element: AddNewRoleContainer,
          routes: [
            {
              name: "Roles",
              route: "/roles",
            },
            {
              name: "Add New Role",
              route: "add-new-role",
            },
          ],
        },
        {
          id: 3,
          path: "edit-role/:id",
          element: EditRoleContainer,
          routes: [
            {
              name: "Roles",
              route: "/roles",
            },
            {
              name: "Edit Role",
              route: "edit-role/:id",
            },
          ],
        },
        {
          id: 4,
          path: "role-detail/:id",
          element: RoleDetailContainer,
          routes: [
            {
              name: "Roles",
              route: "/roles",
            },
            {
              name: "Role Detail",
              route: "role-detail/:id",
            },
          ],
        },
      ],
    },
  ],
};
