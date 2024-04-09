import React, { useState } from 'react';
import { Layout, Menu, Button, ConfigProvider } from 'antd';
import { EnvironmentFilled } from '@ant-design/icons';
import { CHANGE_CURRENTMENUKEY } from '../../store/action/currentMenuKey';
import { MenuProps } from 'rc-menu';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './index.less';
import Home from '../Home';
import ParsingResume from '../ParsingResume';
import OnlineEdit from '../OnlineEdit';
import AttachmentUpload from '../AttachmentUpload';

const Main = ({changeCurrentMenuKey, currentMenuKey}:any) => {
  const { Header, Content, Footer } = Layout;
  const parsingResume = require('./parsingResume.png');
  const onlineEdit = require('./onlineEdit.png');
  const attachmentUpload = require('./attachmentUpload.png');
  const [currentCity, setCurrentCity] = useState<string>('上海');

  const items = [
    {
      key: 'home',
      label: '首页',
    },
    {
      key: 'resume',
      label: '简历',
      children: [
        {
          key: 'parsingResume',
          label: 
            <div 
              style={{background: 'linear-gradient(to bottom, #90aafb, #fff)', width: '118px', height: '145px', display: 'flex', flexDirection: "column", justifyContent: 'end'}}
              onClick={() => changeCurrentMenuKey('parsingResume')}
            >
              <img src={parsingResume} className='absolute' style={{zIndex: 10, left: '25%', top: '15%', width: '60px'}}/>
              <div style={{height: '25px', fontSize: '15px', color: '#222222', textAlign: 'center', lineHeight: '25px'}}>
                简历解析
              </div>
              <div style={{height: '30px', color: '#999999', textAlign: 'center', lineHeight: '20px', fontSize: '13px'}}>
                自动识别分析简历
              </div>
            </div>,
        },
        {
          key: 'onlineEdit',
          label: 
            <div 
              style={{background: 'linear-gradient(to bottom, #6bf5ee, #fff)', width: '118px', height: '145px', display: 'flex', flexDirection: "column", justifyContent: 'end'}}
              onClick={() => changeCurrentMenuKey('onlineEdit')}
            >
              <img src={onlineEdit} className='absolute' style={{zIndex: 10, left: '25%', top: '15%', width: '60px'}}/>
              <div style={{height: '25px', fontSize: '15px', color: '#222222', textAlign: 'center', lineHeight: '25px'}}>
                在线编辑
              </div>
              <div style={{height: '30px', color: '#999999', textAlign: 'center', lineHeight: '20px', fontSize: '13px'}}>
                编辑简历信息
              </div>
            </div>,
        },
        {
          key: 'attachmentUpload',
          label: 
            <div 
              style={{background: 'linear-gradient(to bottom, #77e5ff, #fff)', width: '118px', height: '145px', display: 'flex', flexDirection: "column", justifyContent: 'end'}} 
              onClick={() => changeCurrentMenuKey('attachmentUpload')}
            >
              <img src={attachmentUpload} className='absolute' style={{zIndex: 10, left: '25%', top: '15%', width: '60px'}}/>
              <div style={{height: '25px', fontSize: '15px', color: '#222222', textAlign: 'center', lineHeight: '25px'}}>
                附件上传
              </div>
              <div style={{height: '30px', color: '#999999', textAlign: 'center', lineHeight: '20px', fontSize: '13px'}}>
                快速投递简历
              </div>
            </div>,
        }
      ]
    },
  ];
  const changeMenuKey: MenuProps['onClick'] = (e) => {
    changeCurrentMenuKey(e.key);
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {colorLink: '#ff82b5', colorLinkHover: '', colorLinkActive: ''},
          Menu: {
            horizontalItemSelectedColor: '#ff82b5', itemColor: '#fff', 
            itemHoverColor: '#ff82b5', itemSelectedColor: '#ff82b5',
          }
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
            items={items}
            style={{ flex: 1, minWidth: 0, height: '50px', lineHeight: '54.5px', backgroundColor: 'transparent'}}
            selectedKeys={[currentMenuKey]}
            onClick={changeMenuKey}
          />
        </Header>
        <Content style={{ padding: '0 48px' }}>
          {/* {
            currentMenuKey == 'home' ?
            <Home/> : currentMenuKey == 'parsingResume' ?
            <ParsingResume/> : currentMenuKey == 'onlineEdit' ?
            <OnlineEdit/> : <AttachmentUpload/>
          } */}
          <OnlineEdit/>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Evaluation Recommendation System ©{new Date().getFullYear()} Created by LXY
        </Footer>
      </Layout>
    </ConfigProvider>
  );
}

Main.propTypes={
  changeCurrentMenuKey: PropTypes.func.isRequired,
  currentMenuKey: PropTypes.string.isRequired,
}

const mapStateToProps = ({currentMenuKey}: any) => ({
  currentMenuKey
})
const mapDispatchToProps = (dispatch: (arg0: { type: string; key: string; }) => any) => ({
  changeCurrentMenuKey: (key:string) => dispatch(CHANGE_CURRENTMENUKEY(key))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main);
