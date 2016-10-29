/********************************
 Reaktv
 ReactJS+Electron Framework

 (c)2016, Dr.Kameleon
 ********************************/

import React from "react";

class Select extends React.Component {
    render() {
        return <select className="form-control">
            {this.props.children}
        </select>;
    }
}

export default Select;
