import "./App.css";
import { Routes, Route, Navlink } from "react-router-dom";
import { Home } from "./pages/Home";
import "./index.css";
import { Signin } from "./pages/Signin";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="*"
          element={
            <div className="flex items-center justify-center h-screen w-screen bg-slate-50">
              {" "}
              <h1 className="p-10 bg-slate-200 text-black font-semibold text-5xl font-serif rounded-md">
                PAGE NOT FOUND :{`(`}
              </h1>
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
