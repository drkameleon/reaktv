/********************************
 Reaktv
 ReactJS+Electron Framework

 (c)2016, Dr.Kameleon
 ********************************/

import React from "react";

class Panes extends React.Component {
    render() {
        return <div className="pane-group">
            {this.props.children}
        </div>
    }
}

export default Panes;
