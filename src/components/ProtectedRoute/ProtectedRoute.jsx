import { Route, Redirect, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedRoute = ({ component, path }) => {
  const authorization = useSelector((state) => state.userAuthorization.authorization);
  const location = useLocation();

  if (!authorization) {

    return (
      <Route path={path}>
        <Redirect to={{ pathname: '/login', state: { from: location } }} />
      </Route>
    )
  }
  return <Route path={path} component={component} />
}