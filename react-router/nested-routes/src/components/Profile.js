import { Link, Outlet } from "react-router-dom";

export function Profile() {
  return (
    <div>
      <div className="buttons">
        <Link to="/profile" className="navBtn">
          Details
        </Link>
        <Link to="/profile/followers" className="navBtn">
          Followers
        </Link>
        <Link to="/profile/following" className="navBtn">
          Following
        </Link>
      </div>
      <Outlet />
    </div>
  );
}
