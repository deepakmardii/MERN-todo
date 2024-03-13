import { useState } from "react";
import Navbar from "../../components/Navbar";
import { getErrorMessage } from "../../util/getError";
import { Input, Modal, message } from "antd";
import { getUserDetails } from "../../util/getUser";
import ToDoServices from "../../services/todoServices";

const TodoList = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmitTask = async () => {
    try {
      setLoading(true);
      const userId = getUserDetails()?.userId;
      const data = { title, description, isCompleted: false, userId: userId };
      console.log(data);
      const response = await ToDoServices.createToDo(data);
      console.log(response);
      setLoading(true);
      message.success("Task added successfully");
      setIsAdding(false);
    } catch (error) {
      console.log(error);
      setLoading(true);
      message.error(getErrorMessage(error));
    }
  };

  return (
    <>
      <Navbar />
      <section>
        <div className="flex gap-10">
          <h2>Your Tasks</h2>
          <input placeholder="Search your tasks here...." />
          <div>
            <button onClick={() => setIsAdding(true)}>Add task</button>
          </div>
        </div>
        <hr />
        <Modal
          confirmLoading={loading}
          title="Add new ToDo task"
          open={isAdding}
          onOk={handleSubmitTask}
          onCancel={() => setIsAdding(false)}
        >
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input.TextArea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Modal>
      </section>
    </>
  );
};

export default TodoList;
