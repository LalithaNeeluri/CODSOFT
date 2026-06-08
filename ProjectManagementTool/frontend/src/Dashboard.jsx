import { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css";

function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  // TASK STATE
  const [taskInputs, setTaskInputs] = useState({});
  const [tasks, setTasks] = useState({});

  // GET PROJECTS
  const fetchProjects = async () => {
    const res = await axios.get("http://localhost:5000/api/projects");
    setProjects(res.data);
  };

  // GET TASKS
  const fetchTasks = async (projectId) => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/tasks/project/${projectId}`
      );

      setTasks((prev) => ({
        ...prev,
        [projectId]: res.data,
      }));
    } catch (error) {
      console.log("Fetch Tasks Error:", error.message);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Load tasks when projects load
  useEffect(() => {
    if (projects.length > 0) {
      projects.forEach((p) => fetchTasks(p._id));
    }
  }, [projects]);

  // CREATE PROJECT
  const createProject = async () => {
  try {
    await axios.post("http://localhost:5000/api/projects", {
      title,
      description,
      deadline,
      status: "Pending",
    });

    setTitle("");
    setDescription("");
    setDeadline("");

    fetchProjects();
  } catch (error) {
    console.log(error);
    alert("Create Project Failed");
  }
};
  // DELETE PROJECT
  const deleteProject = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/projects/${id}`);
      fetchProjects();
    } catch (error) {
      console.log(error);
      alert("Delete Failed");
    }
  };

  // UPDATE STATUS
  const updateProject = async (id, status) => {
    try {
      await axios.put(`http://localhost:5000/api/projects/${id}`, {
        status,
      });
      fetchProjects();
    } catch (error) {
      console.log(error);
      alert("Update Failed");
    }
  };

  // ADD TASK
  const addTask = async (projectId) => {
    try {
      const data = taskInputs[projectId];

      if (!data?.taskName || !data?.assignedTo) {
        alert("Please fill task details");
        return;
      }

      await axios.post("http://localhost:5000/api/tasks", {
        taskName: data.taskName,
        assignedTo: data.assignedTo,
        projectId,
      });

      // clear input
      setTaskInputs((prev) => ({
        ...prev,
        [projectId]: { taskName: "", assignedTo: "" },
      }));

      // IMPORTANT: refresh tasks
      fetchTasks(projectId);

      alert("Task Added Successfully");
    } catch (error) {
      console.log("Add Task Error:", error.message);
      alert("Task Create Failed");
    }
  };

  return (
    <div className="container">
      <h1 className="title">Project Management Tool</h1>

      {/* PROJECT FORM */}
      <div className="project-form">
  <input
    placeholder="Project Title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
  />

  <input
    placeholder="Description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
  />

  <input
    type="date"
    value={deadline}
    onChange={(e) => setDeadline(e.target.value)}
  />

  <button onClick={createProject}>
    Create Project
  </button>
</div>

      {/* PROJECT LIST */}
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project._id} className="project-card">
  <h3>{project.title}</h3>

  <p>{project.description}</p>

  <p>
    <strong>Deadline:</strong>{" "}
    {project.deadline
      ? new Date(project.deadline).toLocaleDateString()
      : "Not Set"}
  </p>

  {/* STATUS */}
  <select
    value={project.status}
    onChange={(e) =>
      updateProject(project._id, e.target.value)
    }
  >
    <option>Pending</option>
    <option>In Progress</option>
    <option>Completed</option>
  </select>

            {/* TASK INPUT */}
            <div style={{ marginTop: "10px" }}>
              <h4>Add Task</h4>

              <input
                placeholder="Task Name"
                value={taskInputs[project._id]?.taskName || ""}
                onChange={(e) =>
                  setTaskInputs({
                    ...taskInputs,
                    [project._id]: {
                      ...taskInputs[project._id],
                      taskName: e.target.value,
                    },
                  })
                }
              />

              <input
                placeholder="Assigned To"
                value={taskInputs[project._id]?.assignedTo || ""}
                onChange={(e) =>
                  setTaskInputs({
                    ...taskInputs,
                    [project._id]: {
                      ...taskInputs[project._id],
                      assignedTo: e.target.value,
                    },
                  })
                }
              />

              <button onClick={() => addTask(project._id)}>
                Add Task
              </button>
            </div>

            {/* TASK DISPLAY */}
            <div style={{ marginTop: "10px" }}>
              <h4>Tasks</h4>

              {tasks[project._id]?.length > 0 ? (
                tasks[project._id].map((task) => (
                  <p key={task._id}>
                    ✔ {task.taskName} - {task.assignedTo}
                  </p>
                ))
              ) : (
                <p>No tasks yet</p>
              )}
            </div>

            {/* DELETE */}
            <button onClick={() => deleteProject(project._id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;