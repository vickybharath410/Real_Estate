import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  let token = localStorage.getItem("token");
  if (token === null) {
    token = "";
  }
  return <>{token.length ? children : <Navigate to="/" />}</>;
};
export default Protected;