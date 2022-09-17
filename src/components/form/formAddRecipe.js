import React, { useState } from 'react'
import 'antd/dist/antd.min.css';
import './formAddRecipe.css'
import Icon from "@ant-design/icons";
import { ReactComponent as uploadIcon } from '../../asset/img/upload.svg'
import {
    Form,
    Input,
    Upload,
    Button
} from 'antd';
const { TextArea } = Input;

const FormAddRecipe = () => {
    const [componentDisabled, setComponentDisabled] = useState(false);

    const onFormLayoutChange = ({ disabled }) => {
        setComponentDisabled(disabled);
    };

    return (
        // <div className='container'>
            <Form
                // wrapperCol={{
                //     span: 14,
                // }}
                layout="horizontal"
                onValuesChange={onFormLayoutChange}
                disabled={componentDisabled}
            >
                <Form.Item valuePropName="fileList">
                    <Upload action="/upload.do" listType="picture-card">
                        <div>
                            <Icon component={uploadIcon} />
                            <div style={{ marginTop: 8 }}>
                                Add Photo
                            </div>
                        </div>
                    </Upload>
                </Form.Item>
                <Form.Item>
                    <Input placeholder='Title' />
                </Form.Item>
                <Form.Item>
                    <TextArea placeholder='Ingredients' rows={4} />
                </Form.Item>
                <Form.Item
                    name="url"
                    rules={[{ required: true }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
                >
                    <Input placeholder="Video" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">Post</Button>
                </Form.Item>
            </Form>
        // </div>
    )
}

export default FormAddRecipe