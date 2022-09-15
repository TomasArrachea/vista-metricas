import React from "react";

const Navbar = () => {
    return (
        <nav style={{ backgroundColor: "#46A0E9" }} className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand px-5" href="#">Menu</a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div style={{
                padding: 10,
                margin: 8,
                display: "inline-block",
                backgroundColor: 'red',
                borderRadius: "80%",
                width: 30,
                height: 30,
                left: 0,
                top: 0
            }}> </div>
            <a className="navbar-brand" href="#">User Name</a>

            <div style={{
                padding: 10,
                marginLeft: 600,
                display: "inline-block",
                width: 30,
                height: 30,
                left: 0,
                top: 0
            }}> </div>
            <a className="navbar-brand px-5" href="#">Sales Report</a>

        </nav>
    );
};

export default Navbar;
