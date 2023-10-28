import { useContext } from "react";
import { NoteContext } from "../../contexts/NoteContext";

const SelectBox = () => {
  const { dispatch } = useContext(NoteContext);
  return (
    <div className="select-box w-full">
      <select
        onChange={(e) =>
          dispatch({ type: "SELECT_NOTE_TYPE", payload: e.target.value })
        }
        className="p-2 rounded-md outline-none w-full bg-slate-800 text-blue-600 tracking-wider cursor-pointer"
      >
        <option value={""}>All Notes</option>
        <option value={"true"}>Completed Notes</option>
        <option value={"false"}>Uncompleted Notes</option>
      </select>
    </div>
  );
};

export default SelectBox;
