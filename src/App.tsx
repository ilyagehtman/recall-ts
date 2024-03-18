import "./App.css";
import Editor from "./pages/Editor/Editor.tsx";
import { Route, Routes } from "react-router-dom";
import Archive from "./pages/Archive/Archive.tsx";
import About from "./pages/About/About.tsx";
import Missing from "./pages/Missing/Missing.tsx";
import Landing from "./pages/Landing/Landing.tsx";
import Cart from "./pages/Cart/Cart.tsx";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path={ "*" } element={ <Missing/> }/>
        <Route path={ "/" } element={ <Landing/> }/>
        <Route path={ "/cart" } element={ <Cart product={ {
          type: "брелок",
          size: "большой",
          order: "бусина",
          color: { name: "классика", hex: "#fea2c4" }
        } }/> }/>
        <Route path={ "/about" } element={ <About/> }/>
        <Route path={ "/archive" } element={ <Archive/> }/>
        <Route path={ "/editor/:type" } element={ <Editor/> }/>
      </Routes>
    </div>
  );
}

export default App;
