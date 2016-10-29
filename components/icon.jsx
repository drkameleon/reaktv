/********************************
 Reaktv
 ReactJS+Electron Framework

 (c)2016, Dr.Kameleon
 ********************************/

import React from "react";

class Icon extends React.Component {
    render() {
        var cPadded = (this.props.padded !== undefined ? "icon-text" : "");

        var cName = `icon icon-${this.props.type} ${cPadded}`;

        return <span className={cName}></span>;
    }
}

export default Icon;
