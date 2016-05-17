import React from 'react';
import {
  Container,
  List,
  NavBar,
  Group,
  View,
  Button,
  Field,
} from 'amazeui-touch';
import {
  Link,
} from 'react-router';

const Index = React.createClass({
  getDefaultProps() {
    return {
      transition: 'rfr',
    };
  },

  renderItems() {
    const pages = [
      'Page1',
      'Page2',
    ];

    return pages.map((item, index) => {
      return (
        <List.Item
          linkComponent={Link}
          linkProps={{to: `/${item.toLowerCase()}`}}
          title={item}
          key={index}
        />
      );
    });
  },

  render() {
    return (
      <View>
        <NavBar
          amStyle="primary"
          title="AMT Starter Kit"
        />
        <Container scrollable>
          <Group
            header="Welcome to AMT.Good to see you"
            noPadded
          >
            <List>
              {this.renderItems()}
            </List>
          </Group>

          <Group
            header="登录表单"
            noPadded
          >
            <Field
              label="账号"
              placeholder="请输入您的账号"
              type="text"
            />

            <Field
              label="密码"
              placeholder="请输入您的密码"
              type="password"
            />
            <div><Button amStyle="primary" block>登录</Button></div>
          </Group>
        </Container>
      </View>
    );
  },
});

export default Index;
