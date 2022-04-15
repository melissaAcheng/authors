import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayAll from "./components/DisplayAll";
import Form from "./components/Form";
import Edit from "./components/Edit";
import Error from "./components/Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<DisplayAll />} path="/" default />
          <Route element={<Form />} path="/new" />
          <Route element={<Edit />} path="/edit/:id" />
          <Route element={<Error />} path="/error" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
