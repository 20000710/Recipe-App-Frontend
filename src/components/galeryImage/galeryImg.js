import React from 'react'
import { Image } from 'antd'
import './galeryImg.css'

const GaleryImg = ({ img, caption }) => {
  return (
    <div>
        <Image
            preview={false}
            width={370}
            src={img}
        />
        <div className="caption-img">
            <h2>{caption}</h2>
        </div>
    </div>
  )
}

export default GaleryImg