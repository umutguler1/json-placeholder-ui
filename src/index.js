import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import UsersProvider from "./store/UsersProvider";
import PostsProvider from "./store/PostsProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UsersProvider>
      <PostsProvider>
        <App />
      </PostsProvider>
    </UsersProvider>
  </BrowserRouter>
);
