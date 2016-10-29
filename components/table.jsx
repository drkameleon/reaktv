/********************************
 Reaktv
 ReactJS+Electron Framework

 (c)2016, Dr.Kameleon
 ********************************/

import React from "react";

class Table extends React.Component {
    render() {
        return <table className="table-striped">
            {this.props.children}
        </table>;
    }
}

export default Table;
