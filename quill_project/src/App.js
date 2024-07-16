import "./App.css";
import { OnlyQuillComponent } from "./component/onlyQuill";
import Editor1, { EditorXyz, QuillComponent } from "./component/quillEditor";
import TextEditor from "./component/example";
import { DropDownQuill } from "./quill/quillEditorNew";
import { QuillToolbar } from "./component/quillEditorToolbar";
import Editor from "./quill/final";
import MyEditor from "./component/xyz";
import DropDown from "./component/quillEditor";

function App() {
  return (
    <div className="App">
      {/* <QuillComponent/> */}
      {/* <TextEditor/> */}
      {/* <EditorXyz/> */}

      {/* --------------------------- */}
      {/* <OnlyQuillComponent/>  */}
    
      {/* <DropDownQuill/> */}

      <DropDown />

      {/* <Editor/> */}

      {/* <MyEditor/> */}
    </div>
  );
}

export default App;
