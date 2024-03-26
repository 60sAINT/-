import React, { useState } from 'react';
import { Segmented, ConfigProvider, Form, Input, Select, Button } from 'antd';
import './index.less';

function LoginForm() {
  const [role, setRole] = useState<string>('student');

  // Form配置
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const [form] = Form.useForm();
  const { Option } = Select;
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
      </Select>
    </Form.Item>
  );
  const handleSubmit = async(): Promise<void> => {
    try {
      await form.validateFields();
      const values = form.validateFields();
    } catch(_) {

    }
  }

  return (
    <div className='relative' style={{height: '100%', width: '50%', float: 'left'}}>
      <div className='relative' style={{height: '100%', padding: '0 60px'}}>
        <div className='relative w-full' style={{textAlign: 'center', top: '50%', transform: 'translateY(-50%)'}}>
          <h1 className='mx-0 mt-0 p-0' style={{fontSize: '22px'}}>验证码登录/注册</h1>
          <span className='mt-2' style={{marginBottom: '30px', fontSize: '12px', color: '#999999'}}>首次验证通过即注册系统账号</span>
          <div className='w-full' style={{marginTop: '12px'}}>
            <ConfigProvider
              theme={{
                components: {
                  Segmented: {itemSelectedColor: '#8c68a5', trackPadding: 4, trackBg: '#f0f0f0', itemHoverColor: '#8c68a5'},
                  Input: {activeBorderColor: '#8c68a5', activeShadow: 'none', addonBg: '', hoverBorderColor: '#8c68a5', inputFontSize: 16},
                  Select: {optionSelectedBg: '#f0f0f0', optionSelectedColor: '#8c68a5', optionFontSize: 16},
                  Button: {defaultActiveBorderColor: '#ffffff'}
                },
              }}
            >
              <Segmented 
                options={[
                  {label: (<div style={{height: '40px', lineHeight: '40px'}}>我是学生</div>), value: 'student'},
                  {label: (<div style={{height: '40px', lineHeight: '40px'}}>我要招聘</div>), value: 'company'},
                  {label: (<div style={{height: '40px', lineHeight: '40px'}}>我是管理员</div>), value: 'administrator'},
                ]}
                onChange={setRole}
                size="large"
                block={true}
                style={{height: '48px', lineHeight: '48px', marginBottom: '20px'}}
              />
              <Form
                {...formItemLayout}
                form={form}
                name="login"
                initialValues={{ prefix: '86' }}
                scrollToFirstError
                wrapperCol={{span: 24}}
              >
                <Form.Item
                  name="phone"
                  rules={[{ required: true, message: '请输入你的手机号' }]}
                  style={{marginBottom: '28px'}}
                >
                  <Input addonBefore={prefixSelector} placeholder="手机号" style={{ width: '100%' }}/>
                </Form.Item>
                <Form.Item
                  name="verificationCode"
                  rules={[{ required: true, message: '请输入验证码' }]}
                  style={{marginBottom: '30px'}}
                >
                  <Input suffix={<Button type='link' style={{color: '#8c68a5', fontSize: '16px', height: '35px'}}>发送验证码</Button>} placeholder="短信验证码" style={{ width: '100%' }}/>
                </Form.Item>
              </Form>
              <Button type='text' onClick={handleSubmit}>登录/注册</Button>
            </ConfigProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;