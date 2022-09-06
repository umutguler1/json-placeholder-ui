import { Route, Routes } from "react-router-dom";

import Posts from "./components/Posts/Posts";
import Header from "./Layout/Header";
import HomePage from "./components/HomePage";
import Users from "./components/Users/Users";
import UserProfile from "./components/Users/UserProfile";

function App() {
  return (
    <div>
      <Header />
      <div className="grid gap-y-8 p-8">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:userId" element={<UserProfile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
