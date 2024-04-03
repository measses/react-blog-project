import Navbar from "./components/Navbar";

function App() {
  console.log(import.meta.env.VITE_API_KEY);

  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
