import "./App.css";
import Home from "./pages/home/Home";
function App() {
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ bottom: "36%", left: "0" }}></div>
      <Home />
    </div>
  );
}

export default App;
