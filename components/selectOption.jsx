/********************************
 Reaktv
 ReactJS+Electron Framework

 (c)2016, Dr.Kameleon
 ********************************/

import React from "react";

class SelectOption extends React.Component {
    render() {
        return <option>{this.props.title}</option>;
    }
}

export default SelectOption;
