import React, { useReducer } from "react";

const initialState = {
  tasks: [
    {
      taskId: 1,
      title: "Grocery Shopping",
      description: "Buy groceries from the supermarket",
      status: "open",
      assignedTo: ["Mary", "Peter"],
      createdBy: 201,
      createdAt: "2024-06-12T10:00:00Z",
    },
    {
      taskId: 2,
      title: "Lawn Mowing",
      description: "Mow the lawn at the front yard",
      status: "completed",
      assignedTo: ["David", "Peter"],
      createdBy: 202,
      createdAt: "2024-06-10T08:00:00Z",
      completedAt: "2024-06-11T15:00:00Z",
    },
  ],
};

const taskReducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            taskId: state.tasks.length + 1,
            ...action.payload,
          },
        ],
      };
    case "UPDATE":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.taskId === action.payload.taskId
            ? { ...task, ...action.payload }
            : task
        ),
      };
    case "DELETE":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.taskId !== action.payload.taskId),
      };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  const createTask = () => {
    dispatch({
      type: "CREATE",
      payload: {
        title: "New Task",
        description: "Description of the new task",
        status: "open",
        assignedTo: ["John", "Doe"],
        createdBy: 203,
        createdAt: "2024-06-10T08:00:00Z",
      },
    });
  };

  const updateTask = (taskId) => {
    dispatch({
      type: "UPDATE",
      payload: {
        taskId,
        title: "Updated Task",
        description: "Updated description",
        status: "open",
        assignedTo: ["Mary", "Peter"],
      },
    });
  };

  const deleteTask = (taskId) => {
    dispatch({
      type: "DELETE",
      payload: { taskId },
    });
  };

  return (
    <div>
      <div className="row">
        {state.tasks.map((task) => (
          <div key={task.taskId} className="col-sm-4 col-lg-3">
            <div className="card" style={{ width: "18rem", margin: "1rem", border: "0.1rem solid grey" }}>
              <div className="card-body">
                <h5 className="card-title">{task.title}</h5>
                <p className="card-text">
                  <strong>Description:</strong> {task.description}
                  <br />
                  <strong>Assigned To:</strong> {task.assignedTo.join(", ")}
                  <br />
                  <strong>Created By:</strong> {task.createdBy}
                  <br />
                  <strong>Status:</strong> {task.status}
                </p>
              </div>
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => deleteTask(task.taskId)}
              >
                Delete
              </button>
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => updateTask(task.taskId)}
              >
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="btn btn-primary btn-sm w-5 h-3"
        onClick={createTask}
      >
        Create New Task
      </button>
    </div>
  );
}

export default App;