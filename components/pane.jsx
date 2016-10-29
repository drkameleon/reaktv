/********************************
 Reaktv
 ReactJS+Electron Framework

 (c)2016, Dr.Kameleon
 ********************************/

import React from "react";

class Pane extends React.Component {
    render() {
        var cSize = "";
        if (this.props.size !== undefined) {
            switch (this.props.size) {
                case "mini": cSize = "-mini"; break;
                case "small": cSize = "-sm"; break;
                default: break;
            }
        }
        
        var cSidebar = (this.props.sidebar !== undefined ? "sidebar" : "");
        var cPadded = (this.props.padded !== undefined ? "padded-more" : "");

        var cName = `pane${cSize} ${cSidebar} ${cPadded}`;

        return <div className={cName}>
            {this.props.children}
        </div>
    }
}

export default Pane;
