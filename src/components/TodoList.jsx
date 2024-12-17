import Button from "antd/es/button";
import List from "antd/es/list";
import Typography from "antd/es/typography";
import React from "react";

const { Text } = Typography;

// We can add props type check
const TodoList = ({ todos, onEdit, onDelete, onComplete }) => {
  return (
    <List
      dataSource={todos}
      renderItem={(item) => (
        <List.Item
          key={item._id}
          actions={[
            <Button onClick={() => onEdit(item)}>Edit</Button>,
            <Button onClick={() => onDelete(item._id)} danger>
              Delete
            </Button>,
            !item.completed && (
              <Button onClick={() => onComplete(item._id)} type="link">
                Mark Completed
              </Button>
            ),
          ]}
        >
          <List.Item.Meta
            title={<Text delete={item.completed}>{item.title}</Text>}
            description={item.description}
          />
          {item.completed && <Text type="success">Completed</Text>}
        </List.Item>
      )}
    />
  );
};

export default TodoList;
