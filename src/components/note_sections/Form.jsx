import { useContext } from "react";
import { NoteContext } from "../../contexts/NoteContext";

const Form = () => {
  const { noteStates, dispatch } = useContext(NoteContext);
  const submitHandler = (e) => {
    e.preventDefault();
    if (!(noteStates.noteTitle && noteStates.noteDescription)) {
      return alert("Please Enter Note Title & Description...");
    }
    noteStates.editMode ? dispatch({
      type: "UPDATE_NOTE"
    }) : dispatch({
      type: "ADD_NOTE"
    })
  };
  return (
    <div className="form w-full sm:w-2/3 lg:w-1/3">
      <form action="" onSubmit={submitHandler}>
        <div className="form-field mb-3">
          <input
            onChange={(e) =>
              dispatch({ type: "CHANGE_NOTE_TITLE", payload: e.target.value })
            }
            value={noteStates.noteTitle}
            type="text"
            className="p-2 rounded-md w-full outline-none bg-slate-600 text-slate-300 placeholder:text-blue-400 tracking-wider"
            placeholder="Note Title..."
          />
        </div>
        <div className="form-field mb-3">
          <textarea
            onChange={(e) =>
              dispatch({
                type: "CHANGE_NOTE_DESCRIPTION",
                payload: e.target.value,
              })
            }
            value={noteStates.noteDescription}
            className="p-2 rounded-md outline-none w-full resize-none bg-slate-600 text-slate-300 placeholder:text-blue-400 tracking-wider"
            placeholder="Note Description..."
            rows="8"
          ></textarea>
        </div>
        <div className="btn-box text-center">
          <button className="text-blue-400 border border-1 border-blue-400 py-2 px-7 rounded-md hover:bg-blue-500 hover:text-white transition-all">
            {noteStates.editMode ? "Update Note" : "Add Note"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
