/********************************
 Reaktv
 ReactJS+Electron Framework

 (c)2016, Dr.Kameleon
 ********************************/

import React from "react";

class Title extends React.Component {
    render() {
        return <h1 className="title">{this.props.children}</h1>;
    }
}

export default Title;
