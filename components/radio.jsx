/********************************
 Reaktv
 ReactJS+Electron Framework

 (c)2016, Dr.Kameleon
 ********************************/

import React from "react";

class Radio extends React.Component {
    render() {
        const childrenWithProps = React.Children.map(this.props.children,
            (child) => React.cloneElement(child, {
                name: this.props.alias
            })
        );

        return <div>
            {childrenWithProps}
        </div>;
    }
}

export default Radio;
