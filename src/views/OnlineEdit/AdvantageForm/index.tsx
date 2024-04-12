import React, { useState } from "react";
import { Form, Row, Col, Input, ConfigProvider, Select } from 'antd';
import './index.less';

export default function AdvantageForm() {
  const [isEdit, setIsEdit] = useState<Boolean>(true);
  const [form] = Form.useForm();
  const handleChange = (value:string) => {
    console.log(`selected ${value}`);
  }
  return (
    <>
      {
        isEdit ? 
        <ConfigProvider
          theme={{
            components: {
              Input: {activeBg: '', activeBorderColor: '', activeShadow: '', hoverBorderColor: '#ff82b5', errorActiveShadow: ''},
            },
          }}
        >
          <Form 
            colon={false}
            form={form}
            labelAlign='left'
            wrapperCol={{span: 22}}
            layout="vertical"
            style={{margin: '8px', padding: '20px 0 20px 32px', height: '482px', backgroundColor: '#f8f8f8', borderRadius: '16px'}}
          >
            <h3 style={{fontSize: '16px', color: '#333333', marginBottom: '20px'}}>编辑个人信息</h3>
            <Row>
              <Col span={12}>
                <Form.Item name="name" label={<span style={{color: '#666'}}>姓名</span>} rules={[{ required: true, message: '请输入您的姓名' }]}>
                  <Input style={{height: 44}}/>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label={<span style={{color: '#666'}}>当前求职状态</span>}>
                  <Select
                    defaultValue="lucy"
                    style={{ height: 44 }}
                    onChange={handleChange}
                    options={[
                      { value: 'jack', label: '离校-随时到岗' },
                      { value: 'lucy', label: '在校-暂不考虑' },
                      { value: 'Yiminghe', label: '在校-考虑机会' },
                      { value: 'disabled', label: '在校-月内到岗', disabled: true },
                    ]}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </ConfigProvider>
        : 
        <div>222</div>}
    </>
  );
}
