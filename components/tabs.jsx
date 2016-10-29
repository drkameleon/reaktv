/********************************
 Reaktv
 ReactJS+Electron Framework

 (c)2016, Dr.Kameleon
 ********************************/

import React from "react";

class Tabs extends React.Component {
    render() {
        return <div className="tab-group">
            {this.props.children}
        </div>;
    }
}

export default Tabs;
