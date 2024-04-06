import BlogList from "./components/BlogList";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  // console.log(import.meta.env.VITE_API_KEY);
  //loading items from the API

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <BlogList />
      <Footer />
    </div>
  );
}

export default App;
