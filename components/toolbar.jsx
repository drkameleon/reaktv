/********************************
 Reaktv
 ReactJS+Electron Framework

 (c)2016, Dr.Kameleon
 ********************************/

import React from "react";

class Toolbar extends React.Component {
    render() {
        return <div className="toolbar-actions">
            {this.props.children}
        </div>;
    }
}

export default Toolbar;
