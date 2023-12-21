import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Updated import
import Layout from "./components/Layout";
import UserList from "./components/UserListPage";
import UserDetail from "./components/UserDetail";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<UserList />} />
          <Route path="user/:id" element={<UserDetail />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
