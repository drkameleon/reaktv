/********************************
 Reaktv
 ReactJS+Electron Framework

 (c)2016, Dr.Kameleon
 ********************************/

import React from "react";

class Button extends React.Component {
    render() {
        var cType = (this.props.type !== undefined ? this.props.type : "default" );
        var cDropdown = (this.props.dropdown !== undefined ? "btn-dropdown" : "");
        var cRight = (this.props.right !== undefined ? "pull-right" : "");

        var cName = `btn btn-${cType} ${cDropdown} ${cRight}`;

        return <button className={cName}>
            {this.props.children}
        </button>;
    }
}

export default Button;
