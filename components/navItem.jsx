/********************************
 Reaktv
 ReactJS+Electron Framework

 (c)2016, Dr.Kameleon
 ********************************/

import React from "react";

class NavItem extends React.Component {
    render() {
        if (this.props.active) {
            return <a className="nav-group-item active">
                {this.props.children}
            </a>;
        } else {
            return <span className="nav-group-item">
                {this.props.children}
            </span>;
        }
    }
}

export default NavItem;
