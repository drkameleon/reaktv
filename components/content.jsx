/********************************
 Reaktv
 ReactJS+Electron Framework

 (c)2016, Dr.Kameleon
 ********************************/

import React from "react";

class Content extends React.Component {
    render() {
        var cPadded = (this.props.padded !== undefined ? "padded-more" : "");

        var cName = `window-content ${cPadded}`;

        return <div className={cName}>
            {this.props.children}
        </div>
    }
}

export default Content;
