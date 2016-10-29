/********************************
 Reaktv
 ReactJS+Electron Framework

 (c)2016, Dr.Kameleon
 ********************************/

import React from "react";

class Textarea extends React.Component {
    render() {
        var cSize = (this.props.type !== undefined ? this.props.type : "3" );

        return <div className="form-group">
            <label>{this.props.title}</label>
            <textarea className="form-control" rows={cSize}></textarea>
        </div>;
    }
}

export default Textarea;
