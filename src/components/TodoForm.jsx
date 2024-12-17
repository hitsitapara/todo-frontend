import Button from "antd/es/button";
import Form from "antd/es/form";
import Input from "antd/es/input";
import Modal from "antd/es/modal";
import React, { useEffect } from "react";

// We can add props type check
const TodoForm = ({ visible, onSubmit, onCancel, initialValues }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue(initialValues);
    } else {
      form.resetFields();
    }
  }, [initialValues, form]);

  return (
    <Modal
      title={initialValues ? "Edit Task" : "Add Task"}
      open={visible}
      onCancel={onCancel}
      footer={null}
    >
      <Form form={form} layout="vertical" onFinish={onSubmit}>
        <Form.Item name="title" label="Title" rules={[{ required: true }]}>
          <Input placeholder="Enter task title" />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input.TextArea placeholder="Enter task description" />
        </Form.Item>
        <div className="flex justify-end space-x-2">
          <Button onClick={onCancel}>Cancel</Button>
          <Button type="primary" htmlType="submit">
            {initialValues ? "Update" : "Add"}
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default TodoForm;
