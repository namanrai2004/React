import "./App.css";
import Food from "./components/Food";

function App() {
  let food = ["chole", "paneer", "chicken"];
  return (
    <>
      <h1>Names</h1>
      <Food items = {food}/>
    </>
  );
}

export default App;
