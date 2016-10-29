/********************************
 Reaktv
 ReactJS+Electron Framework

 (c)2016, Dr.Kameleon
 ********************************/

import React from "react";

class Checkbox extends React.Component {
    render() {
        var cType = (this.props.type !== undefined ? this.props.type : "text" );

        return <div className="checkbox">
            <label>
                <input type="checkbox"/> {this.props.title}
            </label>
        </div>;
    }
}

export default Checkbox;
