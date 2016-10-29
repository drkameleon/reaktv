/********************************
 Reaktv
 ReactJS+Electron Framework

 (c)2016, Dr.Kameleon
 ********************************/

import React from "react";

class Input extends React.Component {
    render() {
        var cType = (this.props.type !== undefined ? this.props.type : "text" );

        return <div className="form-group">
            <label>{this.props.title}</label>
            <input className="form-control" type={cType} placeholder={this.props.placeholder}  />
        </div>;
    }
}

export default Input;
