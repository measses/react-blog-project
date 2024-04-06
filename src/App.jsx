import BlogList from "./components/BlogList";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./App.css";
import { BlogProvider } from "./context/BlogContext";
import { CategoryProvider } from "./context/CategoryContext";
import BlogDetail from "./components/BlogDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // console.log(import.meta.env.VITE_API_KEY);
  //loading items from the API

  return (
    <BlogProvider>
      <CategoryProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
          </Routes>
          <Footer />
        </div>
      </CategoryProvider>
    </BlogProvider>
  );
}

export default App;
