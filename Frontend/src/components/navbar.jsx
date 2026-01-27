import { Link } from "react-router-dom"
export default function Navbar() {
  return (

    <div>
      <div className="navbar bg-primary shadow-sm">
        <div className="navbar-start">
          <div className="flex-2">
            <a className="btn btn-ghost text-xl text-amber-50">Speak</a>
          </div>
        </div>
        
          
          

        <div className="navbar-end">
          {" "}
          <div className="dropdown dropdown-end">
            {" "}
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar">
              {" "}
              <div className="w-10 rounded-full">
                {" "}
                <img
                  alt="Login Icon"
                  src="https://img.icons8.com/material-outlined/24/user--v1.png"
                />{" "}
              </div>{" "}
            </div>{" "}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {" "}
              <li>
                <Link to="/auth/login">Login</Link>
              </li>{" "}
              <li>
                <a>SignUp</a>
              </li>{" "}
            </ul>{" "}
          </div>{" "}
        </div>
      </div>
    </div>)

}