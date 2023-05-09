import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import AddBlog from "./components/AddBlog";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<AddBlog />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
