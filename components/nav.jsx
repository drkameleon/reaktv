/********************************
 Reaktv
 ReactJS+Electron Framework

 (c)2016, Dr.Kameleon
 ********************************/

import React from "react";

class Nav extends React.Component {
    render() {
        return <nav className="nav-group">
            <h5 className="nav-group-title">{this.props.title}</h5>
            {this.props.children}
        </nav>;
    }
}

export default Nav;
