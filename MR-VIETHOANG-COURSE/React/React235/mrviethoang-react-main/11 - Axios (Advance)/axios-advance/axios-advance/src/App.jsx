import "./App.css";
import PostComponent from "./pages/Post";
import UserComponent from "./pages/User";
import Header from "./shared/components/Layout/Header";
import Menu from "./shared/components/Layout/Menu";
import "./styles/bootstrap.css";
import "./styles/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div id="wrapper" className="container">
          <Header />
        </div>

        <Routes>
          {/* Load default Component */}
          <Route path="/" element={<UserComponent/>} />
          {/* Direct to other Component when user click */}
          <Route path="users" element={<UserComponent />} />
          <Route path="post" element={<PostComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
