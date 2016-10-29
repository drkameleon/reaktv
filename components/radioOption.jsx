/********************************
 Reaktv
 ReactJS+Electron Framework

 (c)2016, Dr.Kameleon
 ********************************/

import React from "react";

class RadioOption extends React.Component {
    render() {
        var cName = (this.props.name !== undefined ? this.props.name : "" );

        if (this.props.checked !== undefined) {
            return <div className="radio">
                <label>
                    <input type="radio" name={cName} checked/> {this.props.title}
                </label>
            </div>;
        } else {
            return <div className="radio">
                <label>
                    <input type="radio" name={cName}/> {this.props.title}
                </label>
            </div>;
        }
    }
}

export default RadioOption;
