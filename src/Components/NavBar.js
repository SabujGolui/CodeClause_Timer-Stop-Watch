import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-dark navbar-expand-md bg-primary justify-content-between">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target=".dual-nav"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse collapse dual-nav w-50 order-1 order-md-0">
            <ul class="navbar-nav">
              <NavLink to ="/" class="nav-item">
                <li class="nav-link px-4 active">
                  <h5>Timer</h5>
                </li>
              </NavLink>
              <NavLink to="/sw" class="nav-item">
                <li class="nav-link active">
                  <h5>Stop-Watch</h5>
                </li>
              </NavLink>
            </ul>
          </div>
          <label class="navbar-brand mx-auto d-block text-center order-0 order-md-1 w-25">
            <h2>Time</h2>
          </label>
          <div class="navbar-collapse collapse dual-nav w-50 order-2">
            <ul class="nav navbar-nav ml-auto">
              <li class="nav-item">
                <label class="nav-link">
                  <i class="fa fa-twitter"></i>
                </label>
              </li>
              <li class="nav-item">
                <label class="nav-link">
                  <i class="fa fa-github"></i>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
