import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme, Button, ConfigProvider } from 'antd';
import { EnvironmentFilled } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const items = new Array(2).fill(
  {
    key: String(1),
    label: '首页'
  },
  {
    key: String(2),
    label: '公司'
  },
);

function Main() {
  const [currentCity, setCurrentCity] = useState<string>('上海');
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {colorLink: '#ff82b5', colorLinkHover: '', colorLinkActive: ''},
          Menu: {horizontalItemSelectedColor: '#ff82b5'}
        },
      }}
    >
      <Layout>
        <Header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            height: '50px',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div style={{height: '50px', lineHeight:'50px'}}>
            <Button type="link">
              <EnvironmentFilled style={{verticalAlign: 'middle'}}/><span style={{verticalAlign: 'middle', marginLeft: 3}}>{currentCity}</span><span style={{verticalAlign: 'middle', marginLeft: 10, fontSize: 12, color: 'white'}}>[切换]</span>
            </Button>
          </div>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['1']}
            items={items}
            style={{ flex: 1, minWidth: 0, height: '50px', lineHeight: '54.5px', backgroundColor: 'transparent'}}
          />
        </Header>
        <Content style={{ padding: '0 48px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 380,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Content
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </ConfigProvider>
  );
}

export default Main;
