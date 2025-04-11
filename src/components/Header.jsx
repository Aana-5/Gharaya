import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Header = () => {
  return (
    <div className="container-fluid position-static">
      {/* Top Bar */}
      <div className="row bg-success bg-gradient text-white py-2 px-3">
        <div className="col-12 col-md-6">
          <h6 className="mb-0">Why Gharaya.Com</h6>
        </div>
        <div className="col-12 col-md-6 text-md-end">
          <h6 className="mb-0">
           <a className="text-white text-decoration-none" href="/about">About Us</a>  | <a className="text-white text-decoration-none" href="mailto:admin@desimati.com">admin@desimati.com</a> | Contact Us
          </h6>
        </div>
      </div>

      {/* Main Header */}
      <div className="headrshadow row rounded-bottom align-items-center py-3">
        {/* Left Side: Logo + Search */}
        <div className="col-12 col-md-6">
          <div className="d-flex align-items-center justify-content-center justify-content-md-start flex-wrap gap-3">
            <div className="custom-card shadow-sm p-2">
              <img src="../src/assets/images/gharayalogo.png" alt="Logo" className="img-fluid" style={{ maxHeight: "3.2rem" }} />
            </div>
            <input
              type="text"
              className="form-control flex-grow-1"
              placeholder="Search For Product"
              style={{ minWidth: "12.5rem", maxWidth: "19rem" }}
            />
          </div>
        </div>

        {/* Right Side: Dropdowns + Icons */}
        <div className="col-12 col-md-6 mt-4 mt-md-0">
          <div className="d-flex justify-content-center justify-content-md-end align-items-center flex-wrap gap-3">
            {/* Categories Dropdown */}
            <div className="dropdown">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/all">All</a></li>
                <li><a className="dropdown-item" href="#">Vegetables</a></li>
                <li><a className="dropdown-item" href="#">Leafy</a></li>
                <li><a className="dropdown-item" href="#">Exotic Vegetable</a></li>
                <li><a className="dropdown-item" href="#">Fruits</a></li>
              </ul>
            </div>

            {/* Location Dropdown */}
            <div className="dropdown">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Location
              </button>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Jabalpur</a></li>
                <li><a className="dropdown-item" href="#">Mumbai</a></li>
              </ul>
            </div>

            {/* User Icon */}
            <div className="text-center">
              <i className="bi bi-person fs-6"></i>
              <div className="small">User</div>
            </div>

            {/* Cart Icon */}
            <div className="text-center">
              <i className="bi bi-cart fs-6"></i>
              <div className="small">My Cart</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
