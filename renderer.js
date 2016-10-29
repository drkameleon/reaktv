/********************************
 Reaktv
 ReactJS+Electron Framework

 (c)2016, Dr.Kameleon
 ********************************/

import React from "react";
import ReactDOM from "react-dom";

import { Button,Buttons,Checkbox,Content,Footer,Form,Header,Icon,
         Input,List,ListItem,Nav,NavItem,Pane,Panes,Radio,RadioOption,
         Select,SelectOption,Tab,Tabs,Textarea,Title,Toolbar,Window }
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
                <Pane sidebar small>
                    <Nav title="Navigation">
                        <NavItem>One_</NavItem>
                        <NavItem>Two_</NavItem>
                    </Nav>
                </Pane>
                <Pane padded>
                    <Form>
                        <Input title="This is an input"/>
                        <Textarea title="This is a textarea"/>
                        <Select>
                            <SelectOption title="One~"/>
                            <SelectOption title="Two~"/>
                            <SelectOption title="Three~"/>
                        </Select>
                        <Checkbox title="some option"/>
                        <Radio alias="rad__">
                            <RadioOption title="One*"/>
                            <RadioOption title="Two*"/>
                        </Radio>
                    </Form>
                </Pane>
            </Panes>
        </Content>
        <Footer>
            <Title>Footer</Title>
        </Footer>
    </Window>,
    document.getElementById("root")
)
