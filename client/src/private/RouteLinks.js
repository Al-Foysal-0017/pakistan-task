import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
const RouteLinks = (props) => {
  const { user } = useSelector((state) => state.auth);
  return user ? (
    <Redirect to="/" />
  ) : (
    <Route path={props.path} exact={props.exact} component={props.component} />
  );
};
export default RouteLinks;
