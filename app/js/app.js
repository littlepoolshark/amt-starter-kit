import React from 'react';
import {
  render,
} from 'react-dom';
import {
  Router,
  Route,
  Link,
  IndexRoute,
  hashHistory,
} from 'react-router';
import {
  Container,
  TabBar,
} from 'amazeui-touch';

const App = React.createClass({
  render() {
    const {
      location,
      params,
      children,
      ...props,
      } = this.props;
      console.log("app props:",this.props);
    const transition = children.props.transition || 'sfr';

    return (
      <Container direction="column" id="sk-container">
        <Container
          transition={transition}
        >
          {React.cloneElement(children, {key: location.key})}
        </Container>

        <TabBar
          amStyle="primary"
        >
          <TabBar.Item
            component={Link}
            icon="list"
            title="首页"
            selected={!params.page}
            to="/"
          />
          <TabBar.Item
            component={Link}
            icon="star"
            title="精选"
            selected={!params.page}
            to="/hot"
          />
          <TabBar.Item
            component={Link}
            icon="home"
            title="我的"
            selected={params.page === 'about'}
            to="/about"
          />
        </TabBar>
      </Container>
    );
  },
});

// Pages
import Index from './pages/Index';
import Page from './pages/Page';

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path=":page" component={Page} />
    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded', () => {
  render(routes, document.getElementById('root'));
});
