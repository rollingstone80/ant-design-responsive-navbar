import React from 'react';
import { Drawer, Layout, Menu, Typography } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import './App.css';

const { Header } = Layout; 
const { Title } = Typography

class App extends React.Component {
  state = {
    drawerVisible: false
  };

  showDrawer = () => {
    this.setState({
      drawerVisible: true
    });
  };

  onClose = () => {
    this.setState({
      drawerVisible: false
    });
  };
  
  render() {
    return(
      <Layout className="layout">
        <Header>
          <div id="logo">
            <Title level={3}>Logo</Title>
          </div>
          <Menu mode="horizontal">
            <Menu.Item key="1">
                <a href="">Link 1</a>
            </Menu.Item>
            <Menu.Item key="2">
              <a href="">Link 2</a>
            </Menu.Item>
            <Menu.Item key="3">
              <a href="">Link 3</a>
            </Menu.Item>
          </Menu>
          <div id="hamburger" onClick={this.showDrawer}>
            <MenuOutlined />
          </div>
          <Drawer
            title="Menu"
            placement="right"
            onClose={this.onClose}
            visible={this.state.drawerVisible}
          >
            <Menu mode="vertical">
              <Menu.Item key="1">
                  <a href="" onClick={this.onClose}>Link 1</a>
              </Menu.Item>
              <Menu.Item key="2">
                <a href="" onClick={this.onClose}>Link 2</a>
              </Menu.Item>
              <Menu.Item key="3">
                <a href="" onClick={this.onClose}>Link 3</a>
              </Menu.Item>
          </Menu>
          </Drawer>
        </Header>
      </Layout>
    )
  }
}

export default App;
