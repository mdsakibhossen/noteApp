import { createContext, useReducer } from "react";
import { noteReducer } from "../reducers/noteReducer";
export const NoteContext = createContext();

const initialState = {
    noteTitle: "",
    noteDescription: "",
    noteList: [],
    editMode: false,
    editableNote: null
};

const NoteProvider = ({children}) => {
    const [noteStates, dispatch] = useReducer(noteReducer,initialState);
    const noteContextValue = {
      noteStates,
      dispatch
    };
  return (
    <NoteContext.Provider value={noteContextValue}>
      {children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
