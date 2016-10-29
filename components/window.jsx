/********************************
 Reaktv
 ReactJS+Electron Framework

 (c)2016, Dr.Kameleon
 ********************************/

import React from "react";

class Window extends React.Component {
    render() {
        return <div className="window">
            {this.props.children}
        </div>
    }
}

export default Window;
