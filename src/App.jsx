import HeaderSection from "./components/header_sections/HeaderSection";
import NoteSection from "./components/note_sections/NoteSection";
import FooterSection from "./components/footer_sections/FooterSection";
function App() {
  return (
    <div className="container">
      <HeaderSection />
      <NoteSection />
      <FooterSection />
    </div>
  );
}

export default App;
