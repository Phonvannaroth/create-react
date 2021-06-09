import React from "react";

export const UploadFile = React.lazy(
  () => import("./upload/UploadFile")
);

export const PageHeaderComponent = React.lazy(
  () => import("./page-component/PageHeaderComponent")
);
