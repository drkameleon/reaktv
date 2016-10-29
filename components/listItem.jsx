/********************************
 Reaktv
 ReactJS+Electron Framework

 (c)2016, Dr.Kameleon
 ********************************/

import React from "react";

class ListItem extends React.Component {
    render() {
        if (this.props.image) {
            return <li className="list-group-item">
                <img className="img-circle media-object pull-left" src={this.props.image} width="32" height="32"/>
                <div className="media-body">
                    {this.props.children}
                </div>
            </li>;
        } else {
            return <li className="list-group-item">
                <div className="media-body">
                    {this.props.children}
                </div>
            </li>;
        }
    }
}

export default ListItem;
