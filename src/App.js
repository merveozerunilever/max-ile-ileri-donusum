import "./App.css";
import Navbar from "./components/base/Navbar";
import Footer from "./components/base/Footer";
import Manifesto from "./components/pages/Manifesto";
import { routes } from "./routes";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row ">
          <Routes>
            {routes.map((item, index) => (
              <Route
                key={index}
                path={item.pathname}
                element={<item.element />}
              />
            ))}
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
