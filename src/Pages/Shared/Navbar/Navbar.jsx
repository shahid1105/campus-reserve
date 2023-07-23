// import { Link } from "react-router-dom";

const Navbar = () => {
  const navOption = (
    <>
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <a>Parent</a>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navOption}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">CampusReserve</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOption}</ul>
      </div>
      <div className="navbar-end">
        {
          <>
            <button
              //   onClick={handleLogOut}
              className="btn btn-active btn-ghost btn-sm">
              Log Out
            </button>
            <div className="avatar">
              <div className="w-10 ms-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={""} />
              </div>
            </div>
          </>
          // ) : (
          //   <>
          //     <Link to="/login" className="btn btn-active btn-ghost">
          //       Login
          //     </Link>
          //   </>
        }
      </div>
    </div>
  );
};

export default Navbar;