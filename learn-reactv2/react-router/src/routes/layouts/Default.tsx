import { Link, Outlet } from "react-router";

export default function Default () {
  return (
    <>
    <nav>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/custom-about">About</Link>
        </li>
    </nav>

    <h1>header</h1>
    <Outlet />
    <h1>footer</h1>
    </>
  );
}