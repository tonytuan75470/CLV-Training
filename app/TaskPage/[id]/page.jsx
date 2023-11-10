import TaskForm from "@/app/components/TaskForm";

const getTaskById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/Tasks/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to get task");
    }

    return res.json();
  } catch (error) {}
};

const TaskPage = async ({ params }) => {
  const EditMode = params.id === "new" ? false : true;
  let updateTaskData = {};
  let calendar = {}

  if (EditMode) {
    updateTaskData = await getTaskById(params.id);
    updateTaskData = updateTaskData.foundTask
  } else {
    updateTaskData = {
      _id: "new"
    }
  }

  return (
      <TaskForm task={updateTaskData} />
  );
};

export default TaskPage;
