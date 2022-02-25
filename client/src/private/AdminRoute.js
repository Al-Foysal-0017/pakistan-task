import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
const AdminRoute = (props) => {
  const { user } = useSelector((state) => state.auth);
  return user.admin ? (
    <Route path={props.path} exact={props.exact} component={props.component} />
  ) : (
    <Redirect to="/" />
  );
};
export default AdminRoute;
