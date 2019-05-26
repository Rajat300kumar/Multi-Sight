import React, { Component } from "react";
class NavDrop extends Component {
  state = {
    showdropdown: false
  };

  toggleDropdown = () => {
    const { showdropdown } = this.state;

    showdropdown
      ? this.setState({ showdropdown: false })
      : this.setState({ showdropdown: true });
  };
  render() {
    const { showdropdown } = this.state;
    return (
      <div className="dropdown">
        <a
          className="btn  dropdown-toggle"
          href="/"
          data-toggle="dropdown"
          onClick={this.toggleDropdown}
        >
          Home
        </a>

        {showdropdown && (
          <div
            className="dropdown-menu"
            aria-labelledby="dropdownMenuLink"
            style={{ display: "block" }}
          >
            <a className="dropdown-item" to="#">
              Rooms
            </a>
            <a className="dropdown-item" href="#">
              Restorent
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default NavDrop;
