/********************************
 Reaktv
 ReactJS+Electron Framework

 (c)2016, Dr.Kameleon
 ********************************/

import React from "react";
import ReactDOM from "react-dom";

import { Button,Buttons,Content,Footer,
         Header,Icon,List,ListItem,Nav,NavItem,
         Pane,Panes,Tab,Tabs,Title,Toolbar,Window }
from "./components/ui";

ReactDOM.render(
    <Window>
        <Header>
            <Title>My APP</Title>
            <Toolbar>
                <Buttons>
                    <Button><Icon type="plus"/></Button>
                    <Button><Icon type="minus"/></Button>
                </Buttons>
                <Button dropdown right><Icon type="eye" padded/>Something</Button>
            </Toolbar>
        </Header>
        <Tabs>
            <Tab>one</Tab>
            <Tab>two</Tab>
            <Tab fixed><Icon type="plus"/></Tab>
        </Tabs>
        <Content>
            <Panes>
                <Pane sidebar>
                    <Nav title="Navigation">
                        <NavItem>One_</NavItem>
                        <NavItem>Two_</NavItem>
                    </Nav>
                </Pane>
                <Pane padded>TWO</Pane>
            </Panes>
        </Content>
        <Footer>
            <Title>Footer</Title>
        </Footer>
    </Window>,
    document.getElementById("root")
)
