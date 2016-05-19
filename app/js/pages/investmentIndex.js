import React from 'react';
import {
  Container,
  Group,
} from 'amazeui-touch';

const InvestmentIndex = React.createClass({
  render() {
    return (
      <Container {...this.props}>
        <Group>
          <h2>这是理财列表页</h2>
        </Group>
      </Container>
    );
  },
});

export default InvestmentIndex;
