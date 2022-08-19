import { Routes, Route } from "react-router-dom";
import { Detail } from "./components/Detail";
import { Followers } from "./components/Followers";
import { Following } from "./components/Following";
import { Profile } from "./components/Profile";
import { Home } from "./components/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="/profile" element={<Detail />} />
          <Route path="/profile/followers" element={<Followers />} />
          <Route path="/profile/following" element={<Following />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
