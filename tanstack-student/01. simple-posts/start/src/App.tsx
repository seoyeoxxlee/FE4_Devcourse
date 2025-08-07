import { BrowserRouter as Router, Routes, Route } from "react-router";
import Layout from "./components/Layout";
import PostList from "./pages/PostList";
import PostDetail from "./pages/PostDetail";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/posts/:id" element={<PostDetail />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
