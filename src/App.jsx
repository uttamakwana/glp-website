import "./App.css";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      {/* Home page where all the Components like 
        -> Header, Footer, Feeds, College Details
      */}
      <Home />
      {/* Auth page, where all the Login, Register stuff will be held */}
    </div>
  );
}

export default App;
