/********************************
 Reaktv
 ReactJS+Electron Framework

 (c)2016, Dr.Kameleon
 ********************************/

import React from "react";

class Tab extends React.Component {
    render() {
        var cActive = (this.props.active !== undefined ? "active" : "");
        var cFixed = (this.props.fixed !== undefined ? "tab-item-fixed" : "");

        var cIcon = (this.props.fixed !== undefined ? "" : <span className="icon icon-cancel icon-close-tab"></span>)

        var cName = `tab-item ${cActive} ${cFixed}`;

        return <div className={cName}>
            {cIcon}
            {this.props.children}
        </div>;
    }
}

export default Tab;
