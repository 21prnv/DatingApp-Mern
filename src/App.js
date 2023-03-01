import "./App.css";
import Header from "./component/Header";
import SwipeButtons from "./component/SwipeButtons";
import TinderCards from "./component/TinderCards";

function App() {
  return (
    <div className="App">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
