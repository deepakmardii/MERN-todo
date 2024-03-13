import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { getErrorMessage } from "../../util/getError";
import { Input, Modal, Tag, Tooltip, message } from "antd";
import { getUserDetails } from "../../util/getUser";
import ToDoServices from "../../services/todoServices";
import { useNavigate } from "react-router";
import {
  EditOutlined,
  DeleteOutlined,
  CheckCircleFilled,
  CheckCircleOutlined,
} from "@ant-design/icons";

const TodoList = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(false);
  const [allToDo, setAllToDo] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = getUserDetails();

    const getAllToDo = async () => {
      try {
        console.log(user?.userId);
        const response = await ToDoServices.getAllToDo(user?.userId);
        console.log(response.data);
        setAllToDo(response.data);
      } catch (error) {
        console.log(error);
        message.error(getErrorMessage(error));
      }
    };

    if (user && user?.userId) {
      getAllToDo();
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const getFormatedDate = (value) => {
    let date = new Date(value);
    let dateString = date.toDateString();
    let hh = date.getHours();
    let min = date.getMinutes();
    let ss = date.getSeconds();
    let finalDate = `${dateString} at ${hh}:${min}:${ss}`;
    return finalDate;
  };

  const handleSubmitTask = async () => {
    try {
      setLoading(true);
      const userId = getUserDetails()?.userId;
      const data = {
        title,
        description,
        isCompleted: false,
        createdBy: userId,
      };
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

  const handleEdit = (item) => {
    console.log(item);
  };

  const handleDelete = (item) => {
    console.log(item);
  };

  const handleUpdateStatus = (id) => {
    console.log(id);
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
        <div>
          {allToDo.map((item) => {
            return (
              <div key={item?._id}>
                <div>
                  <div>
                    <h3>{item?.title}</h3>
                    {item?.isCompleted ? (
                      <Tag color="green">Completed</Tag>
                    ) : (
                      <Tag color="red">Incompleted</Tag>
                    )}
                  </div>
                  <p>{item.description}</p>
                </div>
                <div>
                  <Tag>{getFormatedDate(item?.createdAt)}</Tag>
                  <div>
                    <Tooltip title="Edit Tasks?">
                      <EditOutlined onClick={() => handleEdit(item)} />
                    </Tooltip>
                    <Tooltip title="Delete Tasks?">
                      <DeleteOutlined onClick={() => handleDelete(item)} />
                    </Tooltip>
                    {item?.isCompleted ? (
                      <Tooltip title="Mark as completed">
                        <CheckCircleFilled />
                      </Tooltip>
                    ) : (
                      <Tooltip title="Mark as incomplete">
                        <CheckCircleOutlined />
                      </Tooltip>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
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
