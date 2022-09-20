import React, { useState } from 'react'
import { Avatar, Form, Button, Upload, Input } from 'antd'
import './profileAvatar.css'
import Icon from "@ant-design/icons";
import { ReactComponent as edit } from '../../asset/img/edit.svg'
import { Link } from 'react-router-dom';

const ProfileAvatar = ({ img }) => {
  const [visible, setVisible] = useState(false)

  const editModal = () => {
    if (!visible){
      setVisible(true)
    } else{
      setVisible(false)
    }
  };

  return (
    <div className="profile-img">
      <Avatar src={img} size={172} />
      <Link to={"#"} onClick={editModal}>
        <Icon className="edit-profile" component={edit} />
      </Link>
        {visible === true ? 
          <div className="change-profile">
          <Form.Item className="update-photo" valuePropName="fileList">
            <Upload action="/upload.do" listType="picture-card">
              <div style={{ marginTop: 8 }}>
                Change Photo Profile
              </div>
            </Upload>
          </Form.Item>
          <Form.Item className="change-password">
            <Button type="primary" htmlType="submit">Change Password</Button>
          </Form.Item>
          {/* <Input.Password placeholder="Change Password" /> */}
          </div>
          :
          <p className="profile-name">Garneta Sharina</p>
        }
    </div>
  )
}

export default ProfileAvatar