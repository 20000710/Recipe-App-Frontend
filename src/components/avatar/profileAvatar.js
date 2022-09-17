import React from 'react'
import { Avatar } from 'antd'
import './profileAvatar.css'

const ProfileAvatar = ({img}) => {
  return (
    <div className="profile-img">
        <Avatar src={img} size={172}/>
        <p className="profile-name">Garneta Sharina</p>
    </div>
  )
}

export default ProfileAvatar