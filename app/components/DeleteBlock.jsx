import { faX } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const { FontAwesomeIcon } = require("@fortawesome/react-fontawesome");

const DeleteBlock = ({ id }) => {
  const router = useRouter();
  const deleteTask = async () => {
    const res = await fetch(`http://localhost:3000/api/Tasks/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
  };
  return (
    <FontAwesomeIcon
      icon={faX}
      className="text-red-400 hover:cursor-pointer hover:text-red-200"
      onClick={deleteTask}
    />
  );
};

export default DeleteBlock;
