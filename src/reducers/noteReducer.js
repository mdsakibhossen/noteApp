import { getDate } from "../customJS/getDate";

export const noteReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_NOTE_TITLE": {
            return {
                ...state,
                noteTitle: action.payload
            }
        }
        case "CHANGE_NOTE_DESCRIPTION": {
            return {
                ...state,
                noteDescription: action.payload
            }
        }
        case "ADD_NOTE": {
            const currentDate = getDate();

            const newNote = {
                id: Date.now() + "",
                title: state.noteTitle,
                description: state.noteDescription,
                isCompleted: false,
                date: currentDate
            }
            // console.log(state.noteList);
            return {
                ...state,
                noteList: [...state.noteList, newNote],
                noteTitle: "",
                noteDescription: "",
            }
        }
        case "EDIT_NOTE":{
            return {
                ...state,
                noteTitle: action.payload.title,
                noteDescription: action.payload.description,
                editMode: true,
                editableNote: action.payload
            }
        }
        case "UPDATE_NOTE":{
            const currentDate = getDate();
            const newNoteList = state.noteList.map(note=>{
                if (state.editableNote === note) {
                    return {
                        ...note,
                        title: state.noteTitle,
                        description: state.noteDescription,
                        date: currentDate
                    }
                }
                return note
            })
            // console.log(newNoteList);
            return {
                ...state,
                noteList: newNoteList,
                noteTitle: "",
                noteDescription: "",
                editMode: false,
                editableNote: null
            }
        }
        case "DELETE_NOTE": {
            return {
                ...state,
                noteList: state.noteList.filter((note) => note !== action.payload)            
            }
        }
        case "SEARCH_NOTE":{
            return{
                ...state,
                searchText: action.payload
            }
        }
        case "CHANGE_NOTE_STATUS":{
            
            return {
                ...state,
                noteList: state.noteList.map(note=> {
                    if (action.payload === note) {
                        return {
                            ...note,
                            isCompleted: !note.isCompleted
                        }
                    }
                    return note;
                    
                })
            }
        }
        case "SELECT_NOTE_TYPE":{
            // console.log(state.noteStatus);
            return {
                ...state,
                noteStatus: action.payload
            }
        }

    }
}