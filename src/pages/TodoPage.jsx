import React, { useEffect, useState } from "react";
import Button from "antd/es/button";
import message from "antd/es/message";
import {
  addTodo,
  deleteTodo,
  getTodos,
  markCompleted,
  updateTodo,
} from "../api/todoApi";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [editingTodo, setEditingTodo] = useState(null);

  useEffect(() => {
    fetchTodos();
    return () => {
      setTodos([]);
      setFormVisible(false);
      setEditingTodo(null);
    };
  }, []);

  const fetchTodos = async () => {
    const response = await getTodos();
    setTodos(response.data);
  };

  const handleAddOrUpdate = async (values) => {
    if (editingTodo) {
      await updateTodo(editingTodo._id, values);
      message.success("Task updated!");
    } else {
      await addTodo(values);
      message.success("Task added!");
    }
    setFormVisible(false);
    setEditingTodo(null);
    fetchTodos();
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    message.success("Task deleted!");
    fetchTodos();
  };

  const handleComplete = async (id) => {
    await markCompleted(id);
    message.success("Task marked as completed!");
    fetchTodos();
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">TODO List</h1>
        <Button type="primary" onClick={() => setFormVisible(true)}>
          Add Task
        </Button>
      </div>

      <TodoList
        todos={todos}
        onEdit={(todo) => {
          setEditingTodo(todo);
          setFormVisible(true);
        }}
        onDelete={handleDelete}
        onComplete={handleComplete}
      />

      <TodoForm
        visible={formVisible}
        onSubmit={handleAddOrUpdate}
        onCancel={() => {
          setFormVisible(false);
          setEditingTodo(null);
        }}
        initialValues={editingTodo}
      />
    </div>
  );
};

export default TodoPage;
