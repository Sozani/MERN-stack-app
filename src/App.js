import "./App.css";
import Home from "./pages/home/Home";
import Profile from "./pages/home/Profile/Profile";
function App() {
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ bottom: "36%", left: "0" }}></div>
      {/* <Home /> */}
      <Profile />
    </div>
  );
}

export default App;
