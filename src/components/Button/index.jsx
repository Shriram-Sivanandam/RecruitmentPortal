import "./button.css";
import { useAuth } from "../../contexts/AuthContext";

const Button = () => {
  const { currentUser } = useAuth();
  return (
    <button className="btn-component" style={{ textDecoration: "none" }}>
      {currentUser?"Dashboard":"Login"}
    </button>
  );
};

export default Button;
