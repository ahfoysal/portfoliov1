import Home from "./Components/Home";
import LeftBar from "./Components/LeftBar";
import RightBar from "./Components/RightBar";
import Nav from "./Components/navbar";

function App() {
  return (
    <>
      <div className="body">
        <Nav isHome={true} />
        <LeftBar />
        <RightBar />
        <Home />
      </div>
    </>
  );
}

export default App;
