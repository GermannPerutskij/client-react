import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </nav>
  );
}
