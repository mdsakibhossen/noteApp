import NoteList from "./NoteList";
import Form from "./Form";
const NoteSection = () => {
  return (
    <div className="note-section container mx-auto py-10  px-3 flex gap-8 flex-col items-center md:flex-row md:items-start">
      <Form />
      <NoteList />
    </div>
  );
};

export default NoteSection;