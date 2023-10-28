import HeaderSection from "./components/header_sections/HeaderSection";
import NoteSection from "./components/note_sections/NoteSection";
import FooterSection from "./components/footer_sections/FooterSection";
import "./App.css";
function App() {
  return (
    <div className="App">
      <HeaderSection />
      <NoteSection />
      <FooterSection />
    </div>
  );
}

export default App;
