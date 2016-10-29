/********************************
 Reaktv
 ReactJS+Electron Framework

 (c)2016, Dr.Kameleon
 ********************************/

import React from "react";

class Buttons extends React.Component {
    render() {
        return <div className="btn-group">
            {this.props.children}
        </div>;
    }
}

export default Buttons;
