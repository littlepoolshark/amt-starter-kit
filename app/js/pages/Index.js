import React from 'react';
import {
  Container,
  List,
  NavBar,
  Group,
  View,
  Button,
  Field,
  Modal,
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

  handleClick(){
    let account=this.refs.account.getValue();
    let password=this.refs.password.getValue();
    if(account == "13682330541" && password == "123456"){

      this.refs.loginSuccess.open();
      
    }else {
      this.refs.loginFailed.open();
    }
  },

  handleLoginSuccess(){
    this.props.history.pushState(null, '/investmentIndex');
  },

  render() {
    return (
      <View>
        <NavBar
          amStyle="primary"
          title="农泰金融"
        />
        <Container scrollable>
          <Group>
            <h3 className="text-center">登录</h3>
            <Field type="text" label="账号" ref="account"></Field>
            <Field type="text" label="密码" ref="password"></Field>
            <Button block amStyle="primary" onClick={this.handleClick}>登录</Button>
          </Group>
        </Container>
        <Modal
          role="alert"
          title="提示"
          ref="loginSuccess"
          onAction={this.handleLoginSuccess}
        >
          恭喜你，登录成功！
        </Modal>
        <Modal
          role="alert"
          title="提示"
          ref="loginFailed"
        >
          不好意思，登录失败！
        </Modal>
      </View>
    );
  },
});

export default Index;
