import "./App.css";
import { Route, Routes, Link, NavLink } from "react-router-dom";
import Characters from "./pages/Characters/Characters";
import Comics from "./pages/Comics/Comics";
import Character from "./pages/Character/Character";
import ComicsPage from "./pages/Comics/Comic/ComicsPage";

function App() {
  return (
    <div className="App">
      <div className="navBar">
        <div className="navBar__name">
          <span className="navBar__name-red">Marvel </span>information portal
        </div>
        <div className="navBar__link-wrapper">
          <NavLink
            className={({ isActive }) =>
              isActive ? "navBar__link-active" : "navBar__link"
            }
            to="/"
          >
            <h1>Characters </h1>
          </NavLink>
          <div className="slesh"> / </div>
          <div className="navBar__link">
            <NavLink
              className={({ isActive }) =>
                isActive ? "navBar__link-active" : "navBar__link"
              }
              to="/comics"
            >
              <h1> Comics</h1>
            </NavLink>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/character/:id" element={<Character />} />
        <Route path="/comics/:id" element={<ComicsPage />} />
      </Routes>
    </div>
  );
}

export default App;
