/********************************
 Reaktv
 ReactJS+Electron Framework

 (c)2016, Dr.Kameleon
 ********************************/

import React from "react";

class Footer extends React.Component {
    render() {
        return <footer className="toolbar toolbar-footer">
            {this.props.children}
        </footer>
    }
}

export default Footer;
