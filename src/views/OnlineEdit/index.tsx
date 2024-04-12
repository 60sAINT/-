import React from 'react';
import { Anchor, Row, Col, Button, ConfigProvider } from 'antd';
import './index.less';
import AdvantageForm from './AdvantageForm';

function OnlineEdit() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {colorLinkHover: '#ff9bc4'},
        },
      }}
    >
      <div style={{width: '90%', margin: '0 auto', paddingTop: '20px'}} id="information">
        <Row>
          <Col span={4} style={{borderRadius: '10px', overflow: 'hidden', backgroundColor: '#fff', position: 'fixed', top: '69.5px', width: '161.875px'}}>
            <h2 style={{height: '44px', background: 'linear-gradient(to right, #fff4f8, #f5fcfc)', paddingLeft: '19px', lineHeight: '44px', fontWeight: 'bold'}}>简历目录</h2>
            <Anchor
              items={[
                {
                  key: 'information',
                  href: '#information',
                  title: '个人信息',
                },
                {
                  key: 'advantage',
                  href: '#advantage',
                  title: '个人优势',
                },
                {
                  key: 'desiredPosition',
                  href: '#desiredPosition',
                  title: '期望职位',
                },
                {
                  key: 'workExperience',
                  href: '#workExperience',
                  title: '工作/实习经历',
                },
                {
                  key: 'projectExperience',
                  href: '#projectExperience',
                  title: '项目经历',
                },
                {
                  key: 'education',
                  href: '#education',
                  title: '教育经历',
                },
              ]}
            />
          </Col>
          <Col span={19} push={4} style={{marginLeft: '16px', borderRadius: '16px', overflow:'hidden'}}>
            <div style={{height: '44px', background: 'linear-gradient(to right, #fff4f8, #f5fcfc)', padding: '0 40px'}}>
              <div style={{float: 'left', lineHeight: '44px', color: '#999999'}}>我的在线简历</div>
              <div style={{float: 'right', lineHeight: '44px'}}>
                <Button type="link">导入已有简历</Button>
              </div>
            </div>
            <div style={{backgroundColor: '#fff', overflow: 'hidden'}}>
              <div id="advantage" style={{width: '100%'}} >
                <AdvantageForm/>
              </div>
              <div id="desiredPosition" style={{width: '100%', height: 100 }} />
              <div id="workExperience" style={{width: '100%', height: 100 }} />
              <div id="projectExperience" style={{width: '100%', height: 100 }} />
              <div id="education" style={{width: '100%', height: 100 }} />
              <div style={{width: '100%', height: 100 }} />
            </div>
          </Col>
        </Row>
      </div>
    </ConfigProvider>
  );
}

export default OnlineEdit;