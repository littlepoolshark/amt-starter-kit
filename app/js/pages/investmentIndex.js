import React from 'react';
import {
  Container,
  Group,
  Grid,
  Col,
  Tabs
} from 'amazeui-touch';

const Group_header=React.createClass({
    render() {
      return (
          <h5>{this.props.title}</h5>
      )
    }
    
});

const Group_body =React.createClass({
    render(){
      return (
          <Grid collapse={true}>
            <Col cols={1}>
                <div className="investmentCard-subtitle">年化收益</div>
                <div>
                  <span className="investmentCard-yearRate-number">8.0</span>
                  <span className="investmentCard-yearRate-unit">%</span>
                </div>
            </Col>
            <Col cols={3}>
                <div className="text-center investmentCard-subtitle">投资期限</div>
                <div className="text-center">
                  <span className="investmentCard-deadline-number">1</span>
                  <span className="investmentCard-deadline-unit">个月</span>
                </div>
            </Col>
            <Col cols={2}>
                <div className="text-center investmentCard-subtitle">可购金额</div>
                <div className="text-center">
                  <span className="investmentCard-remainAmount-number">100.5</span>
                  <span className="investmentCard-remainAmount-unit">万</span>
                </div>
            </Col>
          </Grid>
      )
    }
});
const InvestmentIndex = React.createClass({
  render() {
    return (
      <Container {...this.props}>
        <Tabs defaultActiveKey={0}>
            <Tabs.Item title="理财计划" navStyle="success">
              <Group header="">
                <Group_header title="天天赚"/>
                <Group_body />
              </Group>   
            </Tabs.Item>
            <Tabs.Item title="项目直投" navStyle="success">
              <Group header="">
                <Group_header title="天天赚"/>
                <Group_body />
              </Group>   
            </Tabs.Item>
            <Tabs.Item title="债权转让" navStyle="success">
              <Group header="">
                <Group_header title="天天赚"/>
                <Group_body />
              </Group>   
            </Tabs.Item>
        </Tabs>
        
      </Container>
    );
  },
});

export default InvestmentIndex;
