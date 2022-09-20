import React, { useState } from 'react'
import 'antd/dist/antd.min.css';
import './formAddRecipe.css'
import Icon from "@ant-design/icons";
import createRecipe from '../config/actions/createRecipeActions';
import { ReactComponent as uploadIcon } from '../../asset/img/upload.svg'
import {
    Form,
    Input,
    Upload,
    Button
} from 'antd';
import { useDispatch } from 'react-redux';
const { TextArea } = Input;

const FormAddRecipe = () => {
    const dispatch = useDispatch()
    const [componentDisabled, setComponentDisabled] = useState(false);
    const [saveImage, setSaveImage] = useState(null);
    const [data, setData] = useState({
        title: "",
        ingredients: "",
        user_id: "",
        liked: 0,
        saved: 0,
        popularity: 0,
        video: "",
        photo: ""
    })

    const onFormLayoutChange = ({ disabled }) => {
        setComponentDisabled(disabled);
    };

    const handleUpload = (e) => {
        console.log('e: ', e)
        const uploader = e.fileList[0]
        console.log('uploader: ', uploader)
        setSaveImage(uploader)
    }

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createRecipe(data, saveImage))
    }

    return (
        <Form
            onSubmit={handleSubmit}
            layout="horizontal"
            onValuesChange={onFormLayoutChange}
            disabled={componentDisabled}
        >
            <Form.Item className="upload-img" valuePropName="fileList">
                <Upload onChange={handleUpload} listType="picture-card">
                    <div>
                        <Icon component={uploadIcon} />
                        <div style={{ marginTop: 8 }}>
                            Add Photo
                        </div>
                    </div>
                </Upload>
            </Form.Item>
            <Form.Item>
                <Input placeholder="Title" name="title" value={data.title} onChange={handleChange} />
            </Form.Item>
            <Form.Item>
                <TextArea placeholder="Ingredients" name="ingredients" value={data.ingredients} onChange={handleChange} rows={4} />
            </Form.Item>
            <Form.Item
                name="url"
                rules={[{ required: true }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
            >
                <Input name="video" value={data.video} onChange={handleChange} placeholder="Video" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">Post</Button>
            </Form.Item>
        </Form>
    )
}

export default FormAddRecipe