/********************************
 Reaktv
 ReactJS+Electron Framework

 (c)2016, Dr.Kameleon
 ********************************/

import React from "react";

class Header extends React.Component {
    render() {
        return <header className="toolbar toolbar-header">
            {this.props.children}
        </header>
    }
}

export default Header;
