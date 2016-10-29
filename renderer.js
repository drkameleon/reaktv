/********************************
 Reaktv
 ReactJS+Electron Framework

 (c)2016, Dr.Kameleon
 ********************************/

import React from "react";
import ReactDOM from "react-dom";

import { Window,Content,Footer,Pane,Panes,Title } from "./components/ui";

ReactDOM.render(
    <Window>
        <Content>
            <Panes>
                <Pane sidebar padded>ONE</Pane>
                <Pane padded>TWO</Pane>
            </Panes>
        </Content>
        <Footer>
            <Title>Footer</Title>
        </Footer>
    </Window>,
    document.getElementById("root")
)
