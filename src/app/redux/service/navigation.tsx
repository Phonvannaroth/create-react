import React from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom";

export function withRouter(Child: any) {
  return (props: any) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams()
    return <Child {...props} params={params} navigate={navigate} routestate={location} />;
  }
}
