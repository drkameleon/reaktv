/********************************
 Reaktv
 ReactJS+Electron Framework

 (c)2016, Dr.Kameleon
 ********************************/

import React from "react";

class List extends React.Component {
    render() {
        return <ul className="list-group">
            {this.props.children}
        </ul>;
    }
}

export default List;
